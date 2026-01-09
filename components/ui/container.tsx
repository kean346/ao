'use client';

import { forwardRef } from 'react';
import { clsx } from 'clsx';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: boolean;
  as?: React.ElementType;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = 'lg', padding = true, as: Component = 'div', children, ...props }, ref) => {
    const sizes = {
      sm: 'max-w-3xl',
      md: 'max-w-5xl',
      lg: 'max-w-7xl',
      xl: 'max-w-[1400px]',
      full: 'max-w-full',
    };

    return (
      <Component
        ref={ref}
        className={clsx(
          'mx-auto w-full',
          sizes[size],
          padding && 'px-4 sm:px-6 lg:px-8',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = 'Container';

// Section Component - for consistent section spacing
interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  background?: 'light' | 'dark' | 'cream' | 'gradient';
  spacing?: 'sm' | 'md' | 'lg';
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, background = 'light', spacing = 'lg', children, ...props }, ref) => {
    const backgrounds = {
      light: 'bg-white',
      dark: 'bg-navy-900 text-white',
      cream: 'bg-cream-100',
      gradient: 'bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 text-white',
    };

    const spacings = {
      sm: 'py-12 md:py-16',
      md: 'py-16 md:py-24',
      lg: 'py-20 md:py-32',
    };

    return (
      <section
        ref={ref}
        className={clsx(backgrounds[background], spacings[spacing], className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';

// Section Header Component
interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  dark?: boolean;
}

const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, title, subtitle, alignment = 'center', dark = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'mb-12 md:mb-16',
          alignment === 'center' && 'text-center',
          className
        )}
        {...props}
      >
        <h2
          className={clsx(
            'text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4',
            dark ? 'text-white' : 'text-navy-900'
          )}
        >
          {title}
        </h2>
        <div
          className={clsx(
            'w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mb-6',
            alignment === 'center' && 'mx-auto'
          )}
        />
        {subtitle && (
          <p
            className={clsx(
              'text-lg md:text-xl max-w-2xl',
              alignment === 'center' && 'mx-auto',
              dark ? 'text-navy-200' : 'text-navy-600'
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
    );
  }
);

SectionHeader.displayName = 'SectionHeader';

export { Container, Section, SectionHeader };
export type { ContainerProps, SectionProps, SectionHeaderProps };
