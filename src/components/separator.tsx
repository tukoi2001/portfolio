'use client';

import { forwardRef } from 'react';
import { Root as RootSeparator } from '@radix-ui/react-separator';
import type { ElementRef, ComponentPropsWithoutRef } from 'react';

import classNames from 'classnames';

const Separator = forwardRef<
  ElementRef<typeof RootSeparator>,
  ComponentPropsWithoutRef<typeof RootSeparator>
>(
  (
    { className, orientation = 'horizontal', decorative = true, ...props },
    ref,
  ) => (
    <RootSeparator
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={classNames(
        'shrink-0 bg-border',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        className,
      )}
      {...props}
    />
  ),
);
Separator.displayName = RootSeparator.displayName;

export { Separator };
