import * as React from 'react';
import { ChevronDown } from 'lucide-react';

// Simple NavigationMenu implementation using native HTML/React
const NavigationMenu = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <nav ref={ref} className={className} {...props}>
      {children}
    </nav>
  )
);
NavigationMenu.displayName = 'NavigationMenu';

export { NavigationMenu };
