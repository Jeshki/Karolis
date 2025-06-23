import { UserIcon, CodeBracketIcon, SwatchIcon, BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/solid';

export const AboutSection = () => {
  return (
    <>
      <h2 className="flex items-center text-2xl font-bold text-gray-300 border-b-2 border-teal-500 pb-2 mb-4">
        <UserIcon className="h-6 w-6 mr-3 text-teal-500" />
        Apie mane
      </h2>
      <p className="text-gray-400 leading-relaxed mb-8">
       Esu patyręs Web Develop-eris, besispecializuojantis Front-End programavime ir UX/UI dizaine. Su 15 metų patirtimi šeimos versle, esu išsiugdęs stiprias verslumo ir problemų sprendimo savybes. Įgijau žinių ISM, baigiau Front-End studijas Bit Akademijoje, o šiuo metu tęsiu mokslus <a href="https://www.codecademy.com" className="text-teal-400 underline" target="_blank" rel="noopener noreferrer">www.codecademy.com</a>. Esu laisvai bendraujantis, pozityvus ir ryžtingas &quot;kovotojas&quot;, nuolat siekiantis tobulumo ir inovacijų.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
        <div className="flex items-center">
          <CodeBracketIcon className="h-6 w-6 mr-3 text-teal-500" aria-hidden="true" />
          <strong>Front-End programavimas</strong>
        </div>
        <div className="flex items-center">
          <SwatchIcon className="h-6 w-6 mr-3 text-teal-500" aria-hidden="true" />
          <strong>UX/UI Dizaino supratimas</strong>
        </div>
        <div className="flex items-center">
          <BriefcaseIcon className="h-6 w-6 mr-3 text-teal-500" aria-hidden="true" />
          <strong>Verslo procesų patirtis</strong>
        </div>
        <div className="flex items-center">
          <AcademicCapIcon className="h-6 w-6 mr-3 text-teal-500" aria-hidden="true" />
          <strong>Nuolatinis mokymasis ir tobulėjimas</strong>
        </div>
      </div>
    </>
  );
};