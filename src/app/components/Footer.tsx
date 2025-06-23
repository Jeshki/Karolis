import { HeartIcon } from '@heroicons/react/24/solid';

export const Footer = () => {
    return (
        <footer className="bg-gray-800 dark:bg-gray-900 text-white dark:text-gray-100">
            <div className="max-w-6xl mx-auto py-6 px-4 text-center">
                <p className="text-gray-400 dark:text-gray-500">
                    © {new Date().getFullYear()} Karolis Čibiras. Visos teisės saugomos.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-600 mt-2 flex items-center justify-center">
                    Sukurta su <HeartIcon className="h-4 w-4 mx-1 text-red-500" /> naudojant Next.js ir Tailwind CSS.
                </p>
            </div>
        </footer>
    );
}