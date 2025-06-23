import Image from 'next/image';
import Link from 'next/link';
import { AnimatedSection } from '@/app/components/AnimatedSection';

export default function HomePage() {
  return (
    <AnimatedSection>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <span className="text-teal-500 font-semibold">JUNIOR WEB ENGINEER</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-2 mb-4">
              Karolis Čibiras
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Esu patyręs Web Develop-eris, besispecializuojantis Front-End programavime ir UX/UI dizaine.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link href="/portfolio" className="bg-teal-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-600 transition-transform transform hover:scale-105">
                Mano darbai
              </Link>
              <Link href="/kontaktai" className="bg-gray-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-600 transition-transform transform hover:scale-105">
                Susisiekime
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
              <Image
                  src="/karolis.jpg"
                  alt="Karolio Čibiro nuotrauka"
                  width={350}
                  height={350}
                  className="rounded-full shadow-2xl border-8 border-gray-800"
              />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}