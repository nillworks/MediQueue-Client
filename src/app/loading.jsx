'use client';

import { Spinner } from '@heroui/react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] bg-background/80 dark:bg-darkbg/80 backdrop-blur-sm flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" />
        <p className="text-heading dark:text-white font-heading font-semibold text-lg">
          Loading MediQueue...
        </p>
      </div>
    </div>
  );
}
