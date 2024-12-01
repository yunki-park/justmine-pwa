import { useEffect, ReactNode } from "react";

import { useLocation } from "react-router-dom";

interface ScrollToTopProps {
  children: ReactNode;
}

function ScrollToTop({ children }: ScrollToTopProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
}

export default ScrollToTop;
