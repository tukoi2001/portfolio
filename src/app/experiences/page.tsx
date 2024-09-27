'use client';

import useDarkMode from '@/hooks/useDarkMode';
import { BLUR_FADE_DELAY } from '@/config/constant';
import Particles from '@/components/particles';
import BlurFade from '@/components/blur-fade';
import BlurFadeText from '@/components/blur-fade-text';
import TypingAnimation from '@/components/typing-animation';
import Image from 'next/image';

export default function Page() {
  const { color } = useDarkMode();

  return (
    <>
      <main className="flex flex-col justify-center items-center lg:flex-row gap-10 min-h-[100dvh] pb-[100px] pt-[50px] px-5 overflow-y-auto">
        <div className="flex flex-col gap-2 overflow-hidden">
          <BlurFadeText
            delay={BLUR_FADE_DELAY}
            className="uppercase font-normal text-xl text-muted-foreground pt-2"
            text="Experiences"
          />
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <TypingAnimation
              className="max-w-[700px] text-6xl lg:text-7xl font-bold"
              text="My Work Experiences."
            />
          </BlurFade>
          <BlurFadeText
            className="max-w-[700px] font-thin text-2xl sm:text-4xl"
            delay={BLUR_FADE_DELAY * 3}
            text="My work experiences highlight my ability to adapt, innovate, and deliver results in fast-paced environments, while continuously improving my craft."
          />
        </div>
        <BlurFade
          delay={BLUR_FADE_DELAY * 4}
          className="flex gap-4 w-full sm:w-auto basis-0 lg:basis-[500px] justify-center"
        >
          <div className="flex gap-4 justify-center items-center">
            <Image
              width="45"
              height="45"
              alt="hodfords"
              src="/hodfords.png"
              className="rounded-full flex-shrink-0"
            />
            <div>
              <div className="text-xl sm:text-2xl font-normal">
                Hodfords Viet Nam CO., LTD
              </div>
              <div className="text-sm">04/2022 - 08/2024</div>
              <div className="font-bold text-lg">
                Frontend Developer (VueJs - ReactJs)
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
