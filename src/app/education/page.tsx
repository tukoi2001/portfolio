'use client';

import useDarkMode from '@/hooks/useDarkMode';
import { BLUR_FADE_DELAY } from '@/config/constant';
import BlurFade from '@/components/blur-fade';
import BlurFadeText from '@/components/blur-fade-text';
import Particles from '@/components/particles';
import TypingAnimation from '@/components/typing-animation';

export default function Page() {
  const { color } = useDarkMode();

  return (
    <>
      <main className="flex flex-col lg:flex-row justify-center items-center gap-10 min-h-[100dvh] pb-[100px] pt-[50px] px-5 overflow-y-auto">
        <div className="flex flex-col gap-4 items-end text-end lg:items-start lg:text-start">
          <BlurFadeText
            delay={BLUR_FADE_DELAY}
            className="uppercase font-normal text-xl text-muted-foreground"
            text="Education"
          />
          <BlurFadeText
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-secondary"
            delay={BLUR_FADE_DELAY * 2}
            text="Studied"
          />
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <TypingAnimation
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-end lg:text-start"
              text="Software Development"
            />
          </BlurFade>
        </div>
        <BlurFade
          delay={BLUR_FADE_DELAY * 4}
          className="flex gap-4 w-full sm:w-auto flex-shrink-0 justify-center"
        >
          <div className="flex gap-4 justify-center items-center">
            <span className="w-5 h-5 rounded-full bg-primary flex-shrink-0"></span>
            <div>
              <div className="text-xl sm:text-2xl font-normal">
                <span className="font-bold">Bachelor</span> of Software
                Engineering
              </div>
              <div className="text-sm">
                05 / 2022: BTEC International Colleage
              </div>
            </div>
          </div>
        </BlurFade>
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
