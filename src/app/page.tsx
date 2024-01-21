'use client';

import { useState } from 'react';
import ideaList from '@/ideaList.json';
import { ChoiceData, useChoice } from './Choice';

export default function Home() {
  // const [isOpen, setIsOpen] = useState(false);
  const ideaListData = ideaList;
  const { choice, ChoiceListBoxUi } = useChoice();
  const [idea, setIdea] = useState('');
  const onSelectTheme = () => {
    const selectedItems =
      choice.name === 'game' ? ideaListData.games : ideaListData.applications;
    const randomIndex = Math.floor(Math.random() * selectedItems.length);
    const randomItem = selectedItems[randomIndex];
    return setIdea(randomItem);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <p className="text-2xl">3時間ひとりハッカソン</p>
      </div>

      <ChoiceListBoxUi />

      <button onClick={onSelectTheme}>テーマを選ぶ</button>

      <div>
        <p className="text-2xl">テーマ</p>
        <p>{idea}</p>
      </div>
    </main>
  );
}
