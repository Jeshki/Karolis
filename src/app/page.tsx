'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatedSection } from '@/app/components/AnimatedSection';
import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <AnimatedSection>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <span className="text-teal-500 font-semibold">{t('homepage.title_prefix')}</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mt-2 mb-4">
              {t('homepage.name')}
            </h1>
            <p className="text-lg text-gray-700 mb-8">
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
