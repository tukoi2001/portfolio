declare namespace App {
  import('react');
  import('class-variance-authority');
  import('react-icon-cloud');

  import type { PropsWithChildren } from 'react';
  import { cva, type VariantProps } from 'class-variance-authority';
  import { fetchSimpleIcons } from 'react-icon-cloud';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type Any = any;

  interface DockProps extends VariantProps<typeof cva> {
    className?: string;
    magnification?: number;
    distance?: number;
    children: React.ReactNode;
  }

  type DockIconProps = {
    size?: number;
    magnification?: number;
    distance?: number;
    mousex?: App.Any;
    className?: string;
    children?: React.ReactNode;
    props?: PropsWithChildren;
  };

  type BlurFadeTextProps = {
    text: string;
    className?: string;
    variant?: {
      hidden: { y: number };
      visible: { y: number };
    };
    duration?: number;
    characterDelay?: number;
    delay?: number;
    yOffset?: number;
    animateByCharacter?: boolean;
  };

  type BlurFadeProps = {
    children: React.ReactNode;
    className?: string;
    variant?: {
      hidden: { y: number };
      visible: { y: number };
    };
    duration?: number;
    delay?: number;
    yOffset?: number;
    inView?: boolean;
    inViewMargin?: string;
    blur?: string;
  };

  type BorderBeamProps = {
    className?: string;
    size?: number;
    duration?: number;
    borderWidth?: number;
    anchor?: number;
    colorFrom?: string;
    colorTo?: string;
    delay?: number;
  };

  type TypingAnimationProps = {
    text: string;
    duration?: number;
    className?: string;
  };

  type DynamicCloudProps = {
    iconSlugs: string[];
  };

  type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

  type ParticlesProps = {
    className?: string;
    quantity?: number;
    staticity?: number;
    ease?: number;
    size?: number;
    refresh?: boolean;
    color?: string;
    vx?: number;
    vy?: number;
  };

  type Circle = {
    x: number;
    y: number;
    translateX: number;
    translateY: number;
    size: number;
    alpha: number;
    targetAlpha: number;
    dx: number;
    dy: number;
    magnetism: number;
  };

  type MousePosition = {
    x: number;
    y: number;
  };
}
