import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

// @ts-ignore
export const Scroll = ({ children, location }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return children || null;
};

// @ts-ignore
export const ScrollToTop = withRouter(Scroll);
