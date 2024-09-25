'use client';

import Image from 'next/image';

import BlurFade from '@/components/blur-fade';
import BlurFadeText from '@/components/blur-fade-text';
import { BLUR_FADE_DELAY } from '@/config/constant';

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-2 flex justify-between">
          <div className="flex-col flex flex-1 space-y-1.5">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              yOffset={8}
              text="Hi, I'm 👋"
            />
            <BlurFadeText
              className="max-w-[600px] md:text-xl"
              delay={BLUR_FADE_DELAY}
              text="123"
            />
          </div>
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Image
              src="/tran-xuan-tu.png"
              alt="front-end-dev"
              width={300}
              height={300}
            />
          </BlurFade>
        </div>
      </div>
    </main>
  );
}
