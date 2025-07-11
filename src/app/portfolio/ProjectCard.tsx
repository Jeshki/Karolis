'use client';
// src/app/portfolio/ProjectCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next'; 
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFigma,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiVercel,
  SiVite,
} from 'react-icons/si';

interface ProjectCardProps {
  title: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

const getTechnologyIcon = (tag: string) => {
  switch (tag.toLowerCase()) {
    case 'next.js':
      return <SiNextdotjs className="h-5 w-5 text-gray-700 " />;
    case 'react':
      return <SiReact className="h-5 w-5 text-gray-700 " />;
    case 'typescript':
      return <SiTypescript className="h-5 w-5 text-gray-700 " />;
    case 'tailwind css':
      return <SiTailwindcss className="h-5 w-5 text-gray-700 " />;
    case 'figma':
      return <SiFigma className="h-5 w-5 text-gray-700 " />;
    case 'html':
      return <SiHtml5 className="h-5 w-5 text-gray-700 " />;
    case 'css':
    case 'css modules':
      return <SiCss3 className="h-5 w-5 text-gray-700 " />;
    case 'javascript':
      return <SiJavascript className="h-5 w-5 text-gray-700 " />;
    case 'vercel':
      return <SiVercel className="h-5 w-5 text-gray-700 " />;
    case 'vite':
      return <SiVite className="h-5 w-5 text-gray-700 " />;
    default:
      return null;
  }
};

export const ProjectCard = ({ title, imageUrl, tags, liveUrl }: ProjectCardProps) => {
  const { t } = useTranslation(); // Inicializuokite hook'ą

  return (
    <div className="bg-stone-200  rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2">
      <Image src={imageUrl} alt={title} width={500} height={300} className="w-full h-48 object-cover" />
      <div className="p-6 text-center">
        <div className="flex space-x-2 mb-2 justify-center">
          {tags.map(tag => (
            <div key={tag} title={tag}>
              {getTechnologyIcon(tag)}
            </div>
          ))}
        </div>
        <h3 className="text-xl font-bold text-gray-800  mb-4">{title}</h3>

        <div className="flex justify-center">
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-600 transition-transform transform hover:scale-105 inline-block"
            >
              {t('portfolio_page.view_project_button')}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};