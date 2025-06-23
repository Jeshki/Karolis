import Image from 'next/image';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';
import profilePic from '@/../public/karolis.jpg';

export const Header = () => {
  return (
    <header className="bg-gray-800 dark:bg-gray-900 text-white dark:text-gray-100 p-8">
      {/* Pakeista max-w-6xl į max-w-4xl ir pritaikytas turinio centravimas */}
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <Image
            src={profilePic}
            alt="Karolio Čibiro nuotrauka"
            width={150}
            height={150}
            className="rounded-full border-4 border-teal-400 object-cover shadow-lg"
            priority
          />
        </div>
        {/* Teksto turiniui pritaikytas centravimas */}
        <div className="text">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wider">Karolis Čibiras</h1>
          <p className="text-xl md:text-2xl text-teal-300 mt-2">Front-End Developer - UX/UI Dizaineris </p>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3 text-gray-300 dark:text-gray-400">
            <a href="tel:+37060302903" className="flex items-center hover:text-teal-300 transition-colors">
              <PhoneIcon className="h-5 w-5 mr-2" aria-hidden="true" /> +370 603 02903
            </a>
            <a href="mailto:karoliscibiras@gmail.com" className="flex items-center hover:text-teal-300 transition-colors">
              <EnvelopeIcon className="h-5 w-5 mr-2" aria-hidden="true" /> karoliscibiras@gmail.com
            </a>
            <div className="flex items-center">
              <MapPinIcon className="h-5 w-5 mr-2" aria-hidden="true" /> Kaunas
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};