'use client';

import { useMemo } from 'react';
import classNames from 'classnames';
import { AnimatePresence, motion, Variants } from 'framer-motion';

export default function BlurFadeText({
  text,
  className,
  variant,
  characterDelay = 0.03,
  delay = 0,
  yOffset = 8,
  animateByCharacter = false,
}: App.BlurFadeTextProps) {
  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: 'blur(8px)' },
    visible: { y: -yOffset, opacity: 1, filter: 'blur(0px)' },
  };
  const combinedVariants = variant || defaultVariants;
  const characters = useMemo(() => Array.from(text), [text]);

  if (animateByCharacter) {
    return (
      <div className="flex">
        <AnimatePresence>
          {characters.map((char, i) => (
            <motion.span
              key={i}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={combinedVariants}
              transition={{
                yoyo: Infinity,
                delay: delay + i * characterDelay,
                ease: 'easeOut',
              }}
              className={classNames('inline-block', className)}
              style={{ width: char.trim() === '' ? '0.2em' : 'auto' }}
            >
              {char}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="flex">
      <AnimatePresence>
        <motion.span
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={combinedVariants}
          transition={{
            yoyo: Infinity,
            delay,
            ease: 'easeOut',
          }}
          className={classNames('inline-block', className)}
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
