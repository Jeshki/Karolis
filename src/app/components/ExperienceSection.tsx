import { BriefcaseIcon } from '@heroicons/react/24/solid';

export const ExperienceSection = () => {
  return (
    <>
      <h2 className="flex items-center text-2xl font-bold text-gray-300 border-b-2 border-teal-500 pb-2 mb-4">
        <BriefcaseIcon className="h-6 w-6 mr-3 text-teal-500" />
        Darbo patirtis
      </h2>
      <div className="space-y-6">
        <div className="pl-4 border-l-4 border-zinc-700">
          <h3 className="text-xl font-semibold text-gray-200">Vadybininkas</h3>
          <p className="text-md text-gray-400 italic">UAB „Medikatus” (prekyba kosmetinėmis priemonėmis) | 2008 – 2024-02 m.</p>
          <ul className="list-disc list-inside mt-2 text-gray-400 space-y-1">
            <li>Bendravimas su užsienio šalių partneriais, tiekėjais.</li>
            <li>Elektroninės parduotuvės IT priežiūra, administravimas, įmonės svetainės SEO optimizavimas.</li>
            <li>Pardavimų planavimas ir įmonės strategijos kūrimas.</li>
            <li>Pirminė finansinė apskaita, darbas kasos aparatu, pagalba buhalteriui.</li>
            <li>Prekių pristatymas didmenininkams ir sandėlio priežiūra.</li>
          </ul>
          <p className="mt-2 text-sm text-gray-300"><strong>Pagrindiniai įgūdžiai:</strong> organizaciniai, vadybiniai, komunikaciniai, planavimo, derybų vedimo, finansinės apskaitos, konfliktų sprendimo.</p>
        </div>
        <div className="pl-4 border-l-4 border-zinc-700">
          <h3 className="text-xl font-semibold text-gray-200">Klientų aptarnavimo konsultantas</h3>
          <p className="text-md text-gray-400 italic">UAB „Lintel“ (specializuotos informacijos paslaugos) | 2006 – 2007 m.</p>
          <ul className="list-disc list-inside mt-2 text-gray-400 space-y-1">
            <li>Profesionalus klientų konsultavimas ir techninė pagalba telefonu IT srityje.</li>
          </ul>
          <p className="mt-2 text-sm text-gray-300"><strong>Pagrindiniai įgūdžiai:</strong> komandinio darbo, problemų sprendimo, informacijos paieškos, komunikaciniai.</p>
        </div>
      </div>
    </>
  );
};