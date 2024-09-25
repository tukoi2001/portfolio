declare namespace App {
  import('react');
  import('class-variance-authority');

  import type { PropsWithChildren } from 'react';
  import { cva, type VariantProps } from 'class-variance-authority';

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
}
