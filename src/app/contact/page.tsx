'use client';

import {
  PhoneIcon,
  MailIcon,
  LinkedinIcon,
  FacebookIcon,
  GithubIcon,
} from 'lucide-react';

import useDarkMode from '@/hooks/useDarkMode';
import { BLUR_FADE_DELAY } from '@/config/constant';
import BlurFade from '@/components/blur-fade';
import BlurFadeText from '@/components/blur-fade-text';
import TypingAnimation from '@/components/typing-animation';
import Particles from '@/components/particles';
import { BorderBeam } from '@/components/border-beam';

const contacts = [
  { href: 'tel:0345707835', icon: PhoneIcon },
  {
    href: 'mailto:tutx.it610@gmail.com',
    icon: MailIcon,
  },
  {
    href: 'https://www.facebook.com/tucute200',
    icon: FacebookIcon,
  },
  {
    href: 'https://github.com/tukoi2001',
    icon: GithubIcon,
  },
  {
    href: 'https://www.linkedin.com/in/t%C3%BA-tr%E1%BA%A7n-b7a482325',
    icon: LinkedinIcon,
  },
];

export default function Page() {
  const { color } = useDarkMode();

  return (
    <>
      <main className="flex flex-col justify-center items-center gap-20 min-h-[100dvh] pb-[100px] pt-[50px] px-5 overflow-y-auto">
        <div className="flex flex-col gap-2">
          <BlurFadeText
            delay={BLUR_FADE_DELAY}
            className="uppercase font-normal text-xl text-muted-foreground"
            text="Contact"
          />
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <TypingAnimation
              className="max-w-[700px] text-6xl lg:text-7xl font-bold"
              text="Contact me now!"
            />
          </BlurFade>
          <BlurFadeText
            className="max-w-[700px] font-thin text-2xl sm:text-4xl"
            delay={BLUR_FADE_DELAY * 3}
            text="Feel free to reach out for any inquiries, collaborations, or opportunities! You can contact me through the form below, or reach me directly via email or phone. I look forward to hearing from you!"
          />
        </div>
        <BlurFade
          delay={BLUR_FADE_DELAY * 4}
          className="flex flex-shrink-0 gap-4"
        >
          {contacts.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              className="p-2 rounded-full bg-primary text-background transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-custom relative"
            >
              <item.icon />
              <BorderBeam duration={2} size={40} anchor={40} />
            </a>
          ))}
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
