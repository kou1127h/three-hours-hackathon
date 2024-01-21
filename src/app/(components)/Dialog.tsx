'use client';

import { Dialog } from '@headlessui/react';
import { ReactNode, useState } from 'react';

export const useDialog = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');

  const onOpen = ({ title }: { title: string }) => {
    setTitle(title);
    setOpen(true);
  };

  const onCloseDialog = () => {
    setOpen(false);
  };

  const DialogUi = ({ children }: { children: ReactNode }) => {
    return (
      <Dialog open={open} onClose={onCloseDialog} className="relative z-50">
        <Dialog.Overlay className="fixed inset-0 flex items-center justify-center p-4 bg-opacity-50 bg-slate-600">
          <Dialog.Panel className="rounded bg-white border-spacing-14 border-gray-500 border-2 p-10">
            <Dialog.Title>{title}</Dialog.Title>
            {children}
          </Dialog.Panel>
        </Dialog.Overlay>
      </Dialog>
    );
  };

  return { onOpen, DialogUi };
};
