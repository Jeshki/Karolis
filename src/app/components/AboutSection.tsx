'use client';

import { UserIcon, CodeBracketIcon, SwatchIcon, BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next'; 

export const AboutSection = () => {
  const { t } = useTranslation(); 

  return (
    <>
      <h2 className="flex items-center text-2xl font-bold text-gray-700 border-b-2 border-teal-500 pb-2 mb-4">
        <UserIcon className="h-6 w-6 mr-3 text-teal-500" />
        {t('cv_page.about_me_title')}
      </h2>
      <p className="text-gray-700 leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: t('cv_page.about_me_description') }} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
        <div className="flex items-center">
          <CodeBracketIcon className="h-6 w-6 mr-3 text-teal-500" aria-hidden="true" />
          <strong>{t('cv_page.frontend_programming')}</strong>
        </div>
        <div className="flex items-center">
          <SwatchIcon className="h-6 w-6 mr-3 text-teal-500" aria-hidden="true" />
          <strong>{t('cv_page.ux_ui_understanding')}</strong>
        </div>
        <div className="flex items-center">
          <BriefcaseIcon className="h-6 w-6 mr-3 text-teal-500" aria-hidden="true" />
          <strong>{t('cv_page.business_experience')}</strong>
        </div>
        <div className="flex items-center">
          <AcademicCapIcon className="h-6 w-6 mr-3 text-teal-500" aria-hidden="true" />
          <strong>{t('cv_page.continuous_learning')}</strong>
        </div>
      </div>
    </>
  );
};
