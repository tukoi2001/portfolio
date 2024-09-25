'use client';

import {
  forwardRef,
  useRef,
  Children,
  isValidElement,
  cloneElement,
} from 'react';
import classNames from 'classnames';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

import { DEFAULT_MAGNIFICATION, DEFAULT_DISTANCE } from '@/config/constant';
import { dockVariants } from '@/config/variants';

const Dock = forwardRef<HTMLDivElement, App.DockProps>(
  (
    {
      className,
      children,
      magnification = DEFAULT_MAGNIFICATION,
      distance = DEFAULT_DISTANCE,
      ...props
    },
    ref,
  ) => {
    const mousex = useMotionValue(Infinity);

    const renderChildren = () => {
      return Children.map(children, (child: App.Any) => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            mousex,
            magnification,
            distance,
          } as App.DockIconProps);
        }
        return child;
      });
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={(e) => mousex.set(e.pageX)}
        onMouseLeave={() => mousex.set(Infinity)}
        {...props}
        className={classNames(dockVariants({ className }))}
      >
        {renderChildren()}
      </motion.div>
    );
  },
);
Dock.displayName = 'Dock';

const DockIcon = ({
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mousex,
  className,
  children,
  ...props
}: App.DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const distanceCalc = useTransform(mousex, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [40, magnification, 40],
  );

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className={classNames(
        'flex aspect-square cursor-pointer items-center justify-center rounded-full',
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
DockIcon.displayName = 'DockIcon';

export { Dock, DockIcon };
