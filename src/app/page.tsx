'use client'; // Privaloma naudoti React hooks (pvz., useTranslation)

import Image from 'next/image';
import Link from 'next/link';
import { AnimatedSection } from '@/app/components/AnimatedSection';
import { useTranslation } from 'react-i18next'; // Importuojame useTranslation

export default function HomePage() {
  const { t, i18n } = useTranslation(); // Inicializuojame hook'ą ir gauname i18n objektą

  // Funkcija kalbai pakeisti
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <AnimatedSection>
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Kalbos pasirinkimo mygtukai su vėliavėlėmis */}
        <div className="flex justify-end mb-8 space-x-2">
          <button
            onClick={() => changeLanguage('lt')}
            className="p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            title="Lietuvių"
          >
            <Image src="/lietuva.png" alt="Lietuvos vėliava" width={30} height={20} className="rounded" />
          </button>
          <button
            onClick={() => changeLanguage('en')}
            className="p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            title="English"
          >
            <Image src="/anglija.png" alt="Anglijos vėliava" width={30} height={20} className="rounded" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <span className="text-teal-500 font-semibold">{t('homepage.title_prefix')}</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-2 mb-4">
              {t('homepage.name')}
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              {t('homepage.description')}
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link href="/portfolio" className="bg-teal-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-600 transition-transform transform hover:scale-105">
                {t('homepage.my_work_button')}
              </Link>
              <Link href="/kontaktai" className="bg-gray-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-600 transition-transform transform hover:scale-105">
                {t('homepage.contact_button')}
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
              <Image
                  src="/karolis.jpg"
                  alt={t('homepage.name')}
                  width={350}
                  height={350}
                  className="rounded-full shadow-2xl border-8 border-gray-800"
              />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}