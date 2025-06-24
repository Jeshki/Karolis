'use client'
// src/app/portfolio/page.tsx
import { ProjectCard } from './ProjectCard';
import { AnimatedSection } from '@/app/components/AnimatedSection';
import { useTranslation } from 'react-i18next'; 

const projects = [
  {
    title: 'Dusofi svetainė',
    imageUrl: '/images/dusofi.png',
    tags: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'Vercel', 'Figma'],
    liveUrl: 'http://www.dusofi.lt',
    repoUrl: '#',
  },
  {
    title: 'Dovilės Resume',
    imageUrl: '/images/doviles.png',
    tags: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'Vercel'],
    liveUrl: 'https://doviles-resume.vercel.app',
    repoUrl: '#',
  },
  {
    title: 'Availane projektas',
    imageUrl: '/images/avalaine.png',
    tags: ['React', 'CSS', 'Vite', 'Vercel'],
    liveUrl: 'https://availane.vercel.app',
    repoUrl: '#',
  },
  {
    title: 'RKNuotykiai.lt',
    imageUrl: '/images/rknuotykiai.png',
    tags: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'Vercel', 'Figma'],
    liveUrl: 'http://www.rknuotykiai.lt',
    repoUrl: '#',
  },
  {
    title: 'Deivido CV svetainė',
    imageUrl: '/images/deividas.png',
    tags: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'Vercel'],
    liveUrl: 'https://chomiciuscv.vercel.app/',
    repoUrl: '#',
  },
];

export default function PortfolioPage() {
  const { t } = useTranslation(); 

  return (
    <AnimatedSection>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-800 dark:text-white">{t('portfolio_page.title')}</h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-12">{t('portfolio_page.description')}</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}