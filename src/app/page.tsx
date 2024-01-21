'use client';

import { useState } from 'react';
import ideaList from '@/ideaList.json';
import { useChoice } from './(components)/Choice';
import { useDialog } from './(components)/Dialog';

export default function Home() {
  const ideaListData = ideaList;
  const { choice, ChoiceListBoxUi } = useChoice();
  const { onOpen, DialogUi } = useDialog();
  const [idea, setIdea] = useState('');
  const onSelectTheme = () => {
    const selectedItems =
      choice.name === 'game' ? ideaListData.games : ideaListData.applications;
    const randomIndex = Math.floor(Math.random() * selectedItems.length);
    const randomItem = selectedItems[randomIndex];
    onOpen({ title: 'あなたのテーマは...' });
    setIdea(randomItem);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ChoiceListBoxUi />

      <button
        onClick={onSelectTheme}
        className="border border-spacing-28 border-indigo-700 p-4 rounded-md cursor-pointer"
      >
        テーマを決めてもらう
      </button>

      <DialogUi>{idea}</DialogUi>
    </main>
  );
}
