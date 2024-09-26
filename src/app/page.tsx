'use client';

import Image from 'next/image';
import Link from 'next/link';

import { BLUR_FADE_DELAY } from '@/config/constant';
import BlurFade from '@/components/blur-fade';
import BlurFadeText from '@/components/blur-fade-text';

export default function Page() {
  return (
    <main className="flex flex-col justify-center items-center md:flex-row gap-10 md:gap-20 min-h-[100dvh] pb-[60px] px-5">
      <BlurFade delay={BLUR_FADE_DELAY} className="flex-shrink-0">
        <div className="flex justify-center items-center">
          <div className="relative aspect-square rounded-full w-[270px] h-[270px]">
            <div className="absolute z-20 h-full w-full text-2xl font-light animate-rotating">
              <div className="absolute top-2 left-2 h-16 w-16 bg-secondary rounded-full flex justify-center items-center">
                <div className="animate-back-rotating h-12 w-12 rounded-full bg-background">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-9">
                    {'</>'}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute z-20 h-full w-full text-2xl font-light animate-rotating">
              <div className="absolute bottom-2 right-2 h-16 w-16 bg-secondary rounded-full flex justify-center items-center">
                <div className="animate-back-rotating absolute h-12 w-12 rounded-full bg-background">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-9">
                    {'{}'}
                  </div>
                </div>
              </div>
            </div>
            <div className="border-2 border-dotted absolute border-foreground w-[270px] h-[270px] rounded-full animate-back-rotating">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[270px] z-0 bg-background h-[100px]"></div>
            </div>
            <Image
              className="rounded-full absolute z-10"
              src="/tran-xuan-tu.png"
              alt="front-end-dev"
              width={250}
              height={250}
            />
          </div>
        </div>
      </BlurFade>
      <div className="flex flex-col gap-4 md:gap-8">
        <BlurFadeText
          className="text-base font-medium"
          delay={BLUR_FADE_DELAY * 2}
          text="Hi 👋, I'm"
        />
        <BlurFadeText
          delay={BLUR_FADE_DELAY * 2}
          className="font-bold text-7xl md:text-9x"
          yOffset={8}
          text="Xuan Tu"
        />
        <BlurFadeText
          className="max-w-[600px text-2xl md:text-4xl font-light"
          delay={BLUR_FADE_DELAY * 2}
          text="A Full-Stack Developer with expertise in both Front End and Back End technologies."
        />
        <BlurFade delay={BLUR_FADE_DELAY * 2} className="pt-4">
          <Link
            className="rounded-3xl border px-6 py-3 bg-primary text-background text-lg shadow-md animate-pulse"
            href="/contact"
          >
            Contact me
          </Link>
        </BlurFade>
      </div>
    </main>
  );
}
