'use client';

import { Listbox } from '@headlessui/react';
import { useState } from 'react';

type Choice = 'game' | 'app';
export type ChoiceData = {
  name: Choice;
  id: number;
};
const option = [
  { name: 'game', id: 1 },
  { name: 'app', id: 2 },
] as const satisfies ChoiceData[];

type ChoiceListBoxProps = {
  currentData?: ChoiceData;
  onChange: (data: ChoiceData) => void;
};

const ChoiceListBox = ({ currentData, onChange }: ChoiceListBoxProps) => {
  return (
    <Listbox value={currentData} onChange={onChange}>
      <Listbox.Button>
        <p>作るアプリの方向性：{currentData?.name ?? 'press and select'}</p>
      </Listbox.Button>
      <Listbox.Options>
        {option.map((item) => (
          <Listbox.Option
            key={item.id}
            value={item}
            className={({ active }) =>
              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
              } cursor-pointer`
            }
          >
            {item.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export const useChoice = () => {
  const [choice, setChoice] = useState<ChoiceData>(option[0]);
  const onSelectChoice = (data: ChoiceData) => {
    console.log(data);
    setChoice(data);
  };

  const ChoiceListBoxUi = () => {
    return <ChoiceListBox currentData={choice} onChange={onSelectChoice} />;
  };

  return { choice, ChoiceListBoxUi };
};
