'use client';

import { BriefcaseIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next'; 

export const ExperienceSection = () => {
  const { t } = useTranslation(); 

  return (
    <>
      <h2 className="flex items-center text-2xl font-bold text-gray-300 border-b-2 border-teal-500 pb-2 mb-4">
        <BriefcaseIcon className="h-6 w-6 mr-3 text-teal-500" />
        {t('cv_page.experience_title')}
      </h2>
      <div className="space-y-6">
        <div className="pl-4 border-l-4 border-zinc-700">
          <h3 className="text-xl font-semibold text-gray-200">{t('cv_page.manager_position')}</h3>
          <p className="text-md text-gray-400 italic">{t('cv_page.manager_company')} | {t('cv_page.manager_period')}</p>
          <ul className="list-disc list-inside mt-2 text-gray-400 space-y-1">
            <li>{t('cv_page.manager_responsibilities_1')}</li>
            <li>{t('cv_page.manager_responsibilities_2')}</li>
            <li>{t('cv_page.manager_responsibilities_3')}</li>
            <li>{t('cv_page.manager_responsibilities_4')}</li>
            <li>{t('cv_page.manager_responsibilities_5')}</li>
          </ul>
          <p className="mt-2 text-sm text-gray-300"><strong>{t('cv_page.manager_skills_prefix')}</strong> {t('cv_page.manager_skills')}</p>
        </div>
        <div className="pl-4 border-l-4 border-zinc-700">
          <h3 className="text-xl font-semibold text-gray-200">{t('cv_page.consultant_position')}</h3>
          <p className="text-md text-gray-400 italic">{t('cv_page.consultant_company')} | {t('cv_page.consultant_period')}</p>
          <ul className="list-disc list-inside mt-2 text-gray-400 space-y-1">
            <li>{t('cv_page.consultant_responsibilities_1')}</li>
          </ul>
          <p className="mt-2 text-sm text-gray-300"><strong>{t('cv_page.consultant_skills_prefix')}</strong> {t('cv_page.consultant_skills')}</p>
        </div>
      </div>
    </>
  );
};