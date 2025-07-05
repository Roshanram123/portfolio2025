'use client';

import * as React from 'react';
import { GripVertical } from 'lucide-react';
import { cn } from '@/lib/utils';

// Simple placeholder Resizable component using native HTML/React
// (Does not provide real resizing, just a static panel for now)

interface ResizableProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Resizable = React.forwardRef<HTMLDivElement, ResizableProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('w-full h-full border rounded-md', className)} {...props}>
      {children}
      {/* Placeholder grip icon */}
      <div className="flex justify-center items-center mt-2">
        <GripVertical className="opacity-50" />
      </div>
    </div>
  )
);
Resizable.displayName = 'Resizable';

export { Resizable };
