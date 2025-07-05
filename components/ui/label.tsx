'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      color: {
        default: "text-gray-900 dark:text-gray-100",
        muted: "text-gray-500 dark:text-gray-400",
      },
    },
    defaultVariants: {
      color: "default",
    },
  }
);

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & VariantProps<typeof labelVariants>;

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, color, ...props }, ref) => (
    <label ref={ref} className={cn(labelVariants({ color }), className)} {...props} />
  )
);
Label.displayName = "Label";

export { Label, labelVariants };
