'use client';

import classNames from 'classnames';
import type { ButtonHTMLAttributes } from 'react';
import { type VariantProps } from 'class-variance-authority';

import { buttonVariants } from '@/config/variants';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export default function Button({
  className,
  variant,
  size,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={classNames(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
}
Button.displayName = 'Button';
