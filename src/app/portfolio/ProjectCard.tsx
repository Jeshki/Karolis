import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export const ProjectCard = ({ title, description, imageUrl, tags, liveUrl, repoUrl }: ProjectCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2">
      <Image src={imageUrl} alt={title} width={500} height={300} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map(tag => (
            <span key={tag} className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {liveUrl && <Link href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:underline">Tiesioginė peržiūra</Link>}
          {repoUrl && <Link href={repoUrl} target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:underline">GitHub repozitorija</Link>}
        </div>
      </div>
    </div>
  );
};