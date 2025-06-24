// src/app/components/Footer.tsx
'use client'; 
import { HeartIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next'; 

export const Footer = () => {
    const { t } = useTranslation(); 
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-stone-200  text-white ">
            <div className="max-w-6xl mx-auto py-6 px-4 text-center">
                <p className="text-teal-900 ">
                    {t('footer.copyright', { year: currentYear })}
                </p>
                <p className="text-sm text-teal-900  mt-2 flex items-center justify-center">
                    {t('footer.created_with')} <HeartIcon className="h-4 w-4 mx-1 text-red-500" /> Next.js ir Tailwind CSS.
                </p>
            </div>
        </footer>
    );
}