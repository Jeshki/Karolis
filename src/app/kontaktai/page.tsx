'use client';

import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { GitHubIcon, LinkedInIcon } from '../components/Icons';
import { AnimatedSection } from '@/app/components/AnimatedSection';
import { useTranslation } from 'react-i18next'; // Importuokite useTranslation

export default function ContactsPage() {
    const { t } = useTranslation(); // Inicializuokite hook'ą

    // Kontaktų duomenys naujam lentelės tipo išdėstymui
    const contactItems = [
        {
            icon: <EnvelopeIcon className="h-10 w-10 text-teal-500" />,
            label: t('contact_page.email_label'),
            value: 'mailto:karoliscibiras@gmail.com',
            displayValue: 'karoliscibiras@gmail.com',
            type: 'email',
        },
        {
            icon: <PhoneIcon className="h-10 w-10 text-teal-500" />,
            label: t('contact_page.phone_label'),
            value: 'tel:+37060302903',
            displayValue: '+370 603 02903',
            type: 'phone',
        },
        {
            icon: <GitHubIcon className="h-10 w-10 text-teal-500" />,
            label: t('contact_page.github_label'),
            value: 'https://github.com/Jeshki', // Pakeiskite į tikrą GitHub profilio nuorodą
            displayValue: 'Jeshki', // Pakeiskite į savo GitHub vartotojo vardą
            type: 'social',
        },
        {
            icon: <LinkedInIcon className="h-10 w-10 text-teal-500" />,
            label: t('contact_page.linkedin_label'),
            value: 'https://www.linkedin.com/in/karolis-cibiras/', // Pakeiskite į tikrą LinkedIn profilio nuorodą
            displayValue: 'Karolis Čibiras', // Pakeiskite į savo LinkedIn vardą
            type: 'social',
        },
    ];

    return (
      <AnimatedSection>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">{t('contact_page.title')}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
              {t('contact_page.description')}
          </p>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl mx-auto max-w-lg text-left">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">{t('contact_page.my_contacts')}</h2>
              <div className="space-y-6">
                  {contactItems.map((item, index) => (
                      <div key={index} className="flex items-center gap-4">
                          <div className="flex-shrink-0">
                              {item.icon}
                          </div>
                          <div className="flex-grow">
                              <p className="font-bold text-gray-800 dark:text-white">{item.label}</p>
                              {item.type === 'email' || item.type === 'phone' || item.type === 'social' ? (
                                  <a href={item.value} target={item.type === 'social' ? "_blank" : "_self"} rel={item.type === 'social' ? "noopener noreferrer" : undefined} className="text-teal-500 hover:underline break-all">
                                      {item.displayValue}
                                  </a>
                              ) : (
                                  <p className="text-gray-600 dark:text-gray-400">{item.displayValue}</p>
                              )}
                          </div>
                      </div>
                  ))}
              </div>
          </div>
        </div>
      </AnimatedSection>
    );
  }