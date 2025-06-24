'use client'

import { Header } from '@/app/components/Header';
import { AboutSection } from '@/app/components/AboutSection';
import { ExperienceSection } from '@/app/components/ExperienceSection';
import { SkillsSection } from '@/app/components/SkillsSection';
import { AnimatedSection } from '@/app/components/AnimatedSection';

export default function CvPage() {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-900">
      <Header />

      <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        <AnimatedSection>
          <AboutSection />
        </AnimatedSection>

        <div className="my-12 border-t border-gray-300"></div>

        <AnimatedSection>
          <ExperienceSection />
        </AnimatedSection>

        <div className="my-12 border-t border-gray-300"></div>

        <AnimatedSection>
          <SkillsSection />
        </AnimatedSection>
      </div>
    </div>
  );
}
