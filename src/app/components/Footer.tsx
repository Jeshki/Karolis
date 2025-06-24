// src/app/components/Footer.tsx
'use client'; // Būtina, kad veiktų useTranslation hook'as ir kiti kliento pusės funkcionalumai

import { HeartIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next'; // Importuojame useTranslation hook'ą

export const Footer = () => {
    const { t } = useTranslation(); // Inicializuojame hook'ą
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 dark:bg-gray-900 text-white dark:text-gray-100">
            <div className="max-w-6xl mx-auto py-6 px-4 text-center">
                <p className="text-gray-400 dark:text-gray-500">
                    {t('footer.copyright', { year: currentYear })}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-600 mt-2 flex items-center justify-center">
                    {t('footer.created_with')} <HeartIcon className="h-4 w-4 mx-1 text-red-500" /> Next.js ir Tailwind CSS.
                </p>
            </div>
        </footer>
    );
}