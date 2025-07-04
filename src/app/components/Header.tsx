'use client';

import Image from 'next/image';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';

import { useTranslation } from 'react-i18next'; 

export const Header = () => {
  const { t } = useTranslation(); 

  return (
    <header className="bg-gray-800 text-white p-8">

      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <Image
            src="/karolis.jpg"
            alt={t('homepage.name')} 
            width={150}
            height={150}
            className="rounded-full border-4 border-teal-400 object-cover shadow-lg"
            priority
          />
        </div>
        
        <div className="text">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wider">{t('homepage.name')}</h1>
          <p className="text-xl md:text-2xl text-teal-300 mt-2">{t('cv_page.frontend_developer_title')}</p> {/* Pridėta nauja vertimo eilutė */}
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3 text-gray-300">
            <a href="tel:+37060302903" className="flex items-center hover:text-teal-300 transition-colors">
              <PhoneIcon className="h-5 w-5 mr-2" aria-hidden="true" /> +370 603 02903
            </a>
            <a href="mailto:karoliscibiras@gmail.com" className="flex items-center hover:text-teal-300 transition-colors">
              <EnvelopeIcon className="h-5 w-5 mr-2" aria-hidden="true" /> karoliscibiras@gmail.com
            </a>
            <div className="flex items-center">
              <MapPinIcon className="h-5 w-5 mr-2" aria-hidden="true" /> {t('contact_page.city_name')} {/* Pridėta nauja vertimo eilutė */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};