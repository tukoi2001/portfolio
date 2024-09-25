'use client';

import { forwardRef } from 'react';
import classNames from 'classnames';
import {
  Provider as TooltipProvider,
  Root as Tooltip,
  Trigger as TooltipTrigger,
  Content,
} from '@radix-ui/react-tooltip';
import type { ElementRef, ComponentPropsWithoutRef } from 'react';

const TooltipContent = forwardRef<
  ElementRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <Content
    ref={ref}
    sideOffset={sideOffset}
    className={classNames(
      'z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      className,
    )}
    {...props}
  />
));
TooltipContent.displayName = Content.displayName;

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };
