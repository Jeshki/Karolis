import { ProjectCard } from './ProjectCard';
import { AnimatedSection } from '@/app/components/AnimatedSection';


const projects = [
  {
    title: 'Asmeninė CV ir Portfolio Svetainė',
    description: 'Ši svetainė, kurioje dabar esate. Sukurta nuo nulio naudojant Next.js, TypeScript ir Tailwind CSS, siekiant sukurti greitą, modernią ir pilnai adaptyvią svetainę.',
    imageUrl: '/images/portfolio-svetaine.png',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: '/',
    repoUrl: '#',
  },
  {
    title: 'E-komercijos Platformos Dizainas',
    description: 'UX/UI dizaino projektas, kurtas Figma įrankiu. Analizuota vartotojų kelionė, kurti prototipai ir galutinis dizainas moderniai drabužių parduotuvei.',
    imageUrl: '/images/ecommerce-dizainas.png',
    tags: ['Figma', 'UX/UI Design', 'Prototyping'],
    repoUrl: '#',
  },
  {
    title: 'Užduočių Valdymo Aplikacija (TODO)',
    description: 'Klasikinė "TODO" aplikacija, kuri leidžia vartotojams kurti, redaguoti ir trinti užduotis. Puikus pratiktinis projektas įtvirtinti React pagrindus.',
    imageUrl: '/images/todo-app.png',
    tags: ['React', 'JavaScript', 'CSS Modules'],
    liveUrl: '#',
    repoUrl: '#',
  },
];

export default function PortfolioPage() {
  return (
    <AnimatedSection>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-800 dark:text-white">Portfolio</h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-12">Mano atliktų darbų ir projektų pavyzdžiai.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}