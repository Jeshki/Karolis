import { AcademicCapIcon, CheckBadgeIcon, LanguageIcon, WrenchScrewdriverIcon, BookOpenIcon, ComputerDesktopIcon, CommandLineIcon } from '@heroicons/react/24/solid';
import { Pillar, CarFront, WinningMedalAward } from '@vectopus/atlas-icons-react';

import {
    SiFigma,
    SiTypescript,
    SiJavascript,
    SiTailwindcss,
    SiBootstrap,
    SiGit,
    SiReact,
    SiRedux,
    SiNextdotjs,
    SiSass,
    SiHtml5
} from 'react-icons/si';

export const SkillsSection = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <section className="mb-8">
                    <h2 className="flex items-center text-2xl font-bold text-gray-700 dark:text-gray-300 border-b-2 border-teal-500 pb-2 mb-4">
                      <AcademicCapIcon className="h-6 w-6 mr-3 text-gray-500 dark:text-gray-400" aria-hidden="true" />
                      Išsilavinimas 
                    </h2>
                    <div className="space-y-4 text-gray-800 dark:text-gray-200">
                      <div className="flex items-start pl-4">
                          <Pillar size={24} className="h-5 w-5 mr-3 mt-1 text-gray-500 dark:text-gray-400 flex-shrink-0" aria-hidden="true" />
                          <div>
                              <p className="font-semibold">Verslo vadybos ir analitikos bakalauras</p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">ISM vadybos ir ekonomikos universitetas | 2015 m.</p>
                          </div>
                      </div>
                      <div className="flex items-start pl-4">
                          <ComputerDesktopIcon className="h-5 w-5 mr-3 mt-1 text-gray-500 dark:text-gray-400 flex-shrink-0" aria-hidden="true" />
                          <div>
                              <p className="font-semibold">Front-end programavimas</p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">„Baltijos technologijų institutas” (BIT) | 2021 m.</p>
                          </div>
                      </div>
                      <div className="flex items-start pl-4">
                          <BookOpenIcon className="h-5 w-5 mr-3 mt-1 text-gray-500 dark:text-gray-400 flex-shrink-0" aria-hidden="true" />
                          <div>
                              <p className="font-semibold">Front-End Developer</p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">www.codeacademy.com | Šiuo metu </p>
                          </div>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="flex items-center text-2xl font-bold text-gray-700 dark:text-gray-300 border-b-2 border-teal-500 pb-2 mb-4">
                      <WinningMedalAward size={24} className="h-6 w-6 mr-3 text-gray-500 dark:text-gray-400" aria-hidden="true" />
                      Stiprybės ir kita
                    </h2>
                       <div className="flex flex-wrap gap-2">
                        {['Komunikabilumas', 'Sprendimų paieška', 'IT išmanymas', 'Atsparumas stresui', 'Saviugda ir tobulėjimas', 'Kantrybė', 'Pozityvumas'].map(skill => (
                          <span key={skill} className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 text-sm font-medium px-3 py-1 rounded-full">{skill}</span>
                        ))}
                       </div>
                       <div className="mt-4 pl-4 text-gray-800 dark:text-gray-200 flex items-center">
                           <CarFront size={24} className="h-5 w-5 mr-3 text-gray-500 dark:text-gray-400" aria-hidden="true" />
                           <p className="font-semibold">B kategorijos vairuotojo pažymėjimas</p>
                       </div>
                  </section>
                </div>

                <div>
                  <section>
                    <h2 className="flex items-center text-2xl font-bold text-gray-700 dark:text-gray-300 border-b-2 border-teal-500 pb-2 mb-4">
                      <CheckBadgeIcon className="h-6 w-6 mr-3 text-gray-500 dark:text-gray-400" aria-hidden="true" />
                      Įgūdžiai
                    </h2>
                    <div className="space-y-6 text-gray-800 dark:text-gray-200">
                      <div>
                        <h3 className="flex items-center text-lg font-semibold mb-2"><LanguageIcon className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" aria-hidden="true" />Užsienio kalbos</h3>
                        <div className="space-y-2 pl-4">
                            <div className="flex items-center">
                                <span>Anglų k. <em className="text-sm text-gray-500 dark:text-gray-400">(įgudęs)</em></span>
                            </div>
                            <div className="flex items-center">
                                <span>Rusų k. <em className="text-sm text-gray-500 dark:text-gray-400">(pažengęs)</em></span>
                            </div>
                        </div>
                      </div>
                      <div className="mt-6">
                        <h3 className="flex items-center text-lg font-semibold mb-2">
                            <WrenchScrewdriverIcon className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" aria-hidden="true" />Bendrieji Kompiuteriniai įgūdžiai
                        </h3>
                        <div className="space-y-2 pl-4 mb-6">
                            <div className="flex items-center"><span>MS Office (Word, Excel) <em className="text-sm text-gray-500 dark:text-gray-400">(profesionalus)</em></span></div>
                            <div className="flex items-center"><span>Apskaitos pr. „Būtent“ <em className="text-sm text-gray-500 dark:text-gray-400">(įgudęs)</em></span></div>
                            <div className="flex items-center"><span>Grafikos dizainas (Canva, Illustrator) <em className="text-sm text-gray-500 dark:text-gray-400">(profesionalus)</em></span></div>
                        </div>

                        <h3 className="flex items-center text-lg font-semibold mb-2">
                          <CommandLineIcon className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" aria-hidden="true" />Programavimo ir Web Technologijos
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4">
                            <div className="flex items-center">
                                <span className="flex items-center">
                                    <SiFigma className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" aria-hidden="true" /> Figma
                                </span>
                            </div>
                            <div className="flex items-center">
                                <span className="flex items-center">
                                    <SiTypescript className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" aria-hidden="true" /> TypeScript
                                </span>
                            </div>
                            <div className="flex items-center">
                                <span className="flex items-center">
                                    <SiJavascript className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" aria-hidden="true" /> JavaScript
                                </span>
                            </div>
                            <div className="flex items-center">
                                <span className="flex items-center">
                                    <SiJavascript className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" aria-hidden="true" /> JSX
                                </span>
                            </div>
                            <div className="flex items-center">
                                <span className="flex items-center">
                                    <SiHtml5 className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" aria-hidden="true" /> HTML
                                </span>
                            </div>
                            <div className="flex items-center">
                                <span className="flex items-center">
                                    <SiSass className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" aria-hidden="true" /> Sass
                                </span>
                            </div>
                            <div className="flex items-center">
                                <span className="flex items-center">
                                    <SiTailwindcss className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" aria-hidden="true" /> Tailwind CSS
                                </span>
                            </div>
                            <div className="flex items-center">
                                <span className="flex items-center">
                                    <SiBootstrap className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" aria-hidden="true" /> Bootstrap
                                </span>
                            </div>
                            <div className="flex items-center">
                                <span className="flex items-center">
                                    <SiGit className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" aria-hidden="true" /> Git
                                </span>
                            </div>
                            <div className="flex items-center">
                                <span className="flex items-center">
                                    <SiReact className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" aria-hidden="true" /> React
                                </span>
                            </div>
                            <div className="flex items-center">
                                <span className="flex items-center">
                                    <SiRedux className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" aria-hidden="true" /> Redux
                                </span>
                            </div>
                            <div className="flex items-center">
                                <span className="flex items-center">
                                    <SiNextdotjs className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" aria-hidden="true" /> Next.js
                                </span>
                            </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
            </div>
        </>
    )
}