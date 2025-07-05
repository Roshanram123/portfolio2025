'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

// Simple Popover implementation using native HTML/React
const Popover = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('relative', className)} {...props}>
      {children}
    </div>
  )
);
Popover.displayName = 'Popover';

export { Popover };
