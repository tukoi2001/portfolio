'use client';

import classNames from 'classnames';
import Link from 'next/link';
import {
  HomeIcon,
  BriefcaseBusinessIcon,
  NotebookTabsIcon,
  GraduationCapIcon,
  ContactIcon,
} from 'lucide-react';

import { buttonVariants } from '@/config/variants';
import { Dock, DockIcon } from '@/components/dock';
import ModeToggle from '@/components/mode-toggle';
import { Separator } from '@/components/separator';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/tooltip';

const menuItems = [
  { href: '/', icon: HomeIcon, label: 'Home' },
  { href: '/skills', icon: BriefcaseBusinessIcon, label: 'Skills' },
  { href: '/experiences', icon: NotebookTabsIcon, label: 'Experiences' },
  { href: '/education', icon: GraduationCapIcon, label: 'Education' },
  { href: '/contact', icon: ContactIcon, label: 'Contact' },
];

export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background" />
      <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ">
        {menuItems.map((item) => (
          <DockIcon key={item.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={classNames(
                    buttonVariants({ variant: 'ghost', size: 'icon' }),
                    'size-12',
                  )}
                >
                  <item.icon className="size-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full py-2" />
        <DockIcon>
          <ModeToggle />
        </DockIcon>
      </Dock>
    </div>
  );
}
