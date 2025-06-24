'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import { LT, GB } from 'country-flag-icons/react/3x2'; 

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const navLinks = [
    { name: t('navbar.home'), href: '/' },
    { name: t('navbar.cv'), href: '/cv' },
    { name: t('navbar.portfolio'), href: '/portfolio' },
    { name: t('navbar.contact'), href: '/kontaktai' },
  ];

  return (
    <nav className="bg-stone-200 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/jogy.svg"
              alt="Jogy Logo"
              width={80}
              height={80}
              priority
            />
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-3 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-teal-900 text-white'
                      : 'text-teal-900 hover:bg-teal-700 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            {/* Kalbos pasirinkimas darbalaukio versijai */}
            <div className="ml-4 flex items-center space-x-2">
              <button
                onClick={() => changeLanguage('lt')}
                title="Lietuvių"
                className={`flex items-center justify-center p-2 rounded-md transition-opacity ${i18n.language === 'lt' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
              >
                <LT className="w-6 h-6" /> 
              </button>
              <button
                onClick={() => changeLanguage('en')}
                title="English"
                className={`flex items-center justify-center p-2 rounded-md transition-opacity ${i18n.language === 'en' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
              >
                <GB className="w-6 h-6" /> 
              </button>
            </div>
          </div>

          <div className="flex items-center md:hidden">
            {!isOpen && (
              <div className="flex items-center space-x-2 mr-4">
                <button
                  onClick={() => changeLanguage('lt')}
                  title="Lietuvių"
                  className={`flex items-center justify-center p-2 rounded-md transition-opacity ${i18n.language === 'lt' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
                >
                  <LT className="w-6 h-6" />
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  title="English"
                  className={`flex items-center justify-center p-2 rounded-md transition-opacity ${i18n.language === 'en' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
                >
                  <GB className="w-6 h-6" />
                </button>
              </div>
            )}

            <button
              onClick={toggleMenu}
              className="p-3 rounded-md text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobilaus meniu išskleidimas */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 pb-3">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-lg font-medium transition-colors ${
                    isActive
                      ? 'bg-teal-500 text-white'
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            {/* Kalbos pasirinkimas mobiliame meniu viduje */}
            <div className="pt-4 border-t border-gray-700 flex justify-center space-x-4">
              <button
                onClick={() => changeLanguage('lt')}
                title="Lietuvių"
                className={`flex items-center justify-center p-2 rounded-md transition-opacity ${i18n.language === 'lt' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
              >
                <LT className="w-6 h-6" />
              </button>
              <button
                onClick={() => changeLanguage('en')}
                title="English"
                className={`flex items-center justify-center p-2 rounded-md transition-opacity ${i18n.language === 'en' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
              >
                <GB className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};