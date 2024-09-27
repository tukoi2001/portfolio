'use client';

import useDarkMode from '@/hooks/useDarkMode';
import { BLUR_FADE_DELAY } from '@/config/constant';
import IconCloud from '@/components/icon-cloud';
import Particles from '@/components/particles';
import BlurFade from '@/components/blur-fade';
import BlurFadeText from '@/components/blur-fade-text';
import TypingAnimation from '@/components/typing-animation';
import { BorderBeam } from '@/components/border-beam';

const slugs = [
  'typescript',
  'javascript',
  'dart',
  'java',
  'react',
  'flutter',
  'android',
  'html5',
  'css3',
  'nodedotjs',
  'express',
  'nextdotjs',
  'prisma',
  'amazonaws',
  'postgresql',
  'firebase',
  'nginx',
  'vercel',
  'testinglibrary',
  'jest',
  'cypress',
  'docker',
  'git',
  'jira',
  'github',
  'gitlab',
  'visualstudiocode',
  'androidstudio',
  'sonarqube',
  'figma',
  'vue',
];

const skills = ['VueJs', 'ReactJs', 'NextJs', 'NestJs'];

export default function SkillsPage() {
  const { color } = useDarkMode();

  return (
    <>
      <main className="flex flex-col justify-center items-center lg:flex-row gap-10 lg:gap-20 min-h-[100dvh] pb-[100px] pt-[50px] px-5 overflow-y-auto">
        <BlurFade delay={BLUR_FADE_DELAY} className="flex-shrink-0">
          <div className="relative flex items-center justify-center overflow-hidden w-[400px] h-[400px] px-5">
            <IconCloud iconSlugs={slugs} />
          </div>
        </BlurFade>
        <div className="flex flex-col gap-2 overflow-hidden">
          <BlurFadeText
            delay={BLUR_FADE_DELAY}
            className="uppercase font-normal text-xl text-muted-foreground"
            text="Skills"
          />
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <TypingAnimation
              className="max-w-[700px] text-6xl lg:text-7xl font-bold"
              text="Some of my essential skills."
            />
          </BlurFade>
          <BlurFadeText
            className="max-w-[700px] font-thin text-2xl sm:text-4xl"
            delay={BLUR_FADE_DELAY * 3}
            text="I often use the following platforms and libraries to develop projects."
          />
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-md pt-10">
              {skills.map((skill, index) => (
                <div className="relative" key={index}>
                  <div className="px-4 py-2 border border-dashed text-center">
                    {skill}
                  </div>
                  <BorderBeam duration={2} size={40} anchor={40} />
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </main>
      <Particles
        className="absolute inset-0 -z-10"
        quantity={200}
        ease={120}
        color={color}
        refresh
      />
    </>
  );
}
