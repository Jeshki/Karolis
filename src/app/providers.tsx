// src/app/providers.tsx
'use client';

// Kelias nuo src/app iki src/config
import i18n from './i18n';

import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from 'next-themes';


export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <I18nextProvider i18n={i18n}>
        {children}
      </I18nextProvider>
    </ThemeProvider>
  );
}