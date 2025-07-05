'use client';

import * as React from 'react';
import { Circle } from 'lucide-react';
import { cn } from '@/lib/utils';

// Simple RadioGroup implementation using native HTML/React
interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col gap-2', className)} {...props}>
      {children}
    </div>
  )
);
RadioGroup.displayName = 'RadioGroup';

interface RadioGroupItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const RadioGroupItem = React.forwardRef<HTMLInputElement, RadioGroupItemProps>(
  ({ className, label, ...props }, ref) => (
    <label className={cn('inline-flex items-center gap-2 cursor-pointer', className)}>
      <input type="radio" ref={ref} {...props} />
      <span>{label}</span>
    </label>
  )
);
RadioGroupItem.displayName = 'RadioGroupItem';

export { RadioGroup, RadioGroupItem };
