import { useNavigate, useLocation } from 'react-router-dom';
import { scrollToSection } from '../utils/scrollUtil';

export const useCheckMainPage = (): boolean => {
  const location = useLocation();
  return location.pathname === "/";
};

// 내부 네비게이션 핸들러
export const useInternalNavigation = () => {
  return {
    handleFeatures: () => scrollToSection("features"),
    handleTestimonials: () => scrollToSection("testimonials"),
    handleHighlights: () => scrollToSection("highlights"),
    handlePricing: () => scrollToSection("pricing"),
    handleFAQ: () => scrollToSection("faq"),
  };
};

export const useHandleSignIn = (setOpen?: (open: boolean) => void) => {
  const navigate = useNavigate();
  return () => {
    if (setOpen) setOpen(false);
    navigate("/signin");
  };
};

export const useHandleSignUp = (setOpen?: (open: boolean) => void) => {
  const navigate = useNavigate();
  return () => {
    if (setOpen) setOpen(false);
    navigate("/signup");
  };
};

export const useHandleFeatures = (setOpen?: (open: boolean) => void) => {
  const navigate = useNavigate();
  return () => {
    if (setOpen) setOpen(false);
    navigate("/features");
  };
};

export const useHandleTestimonials = (setOpen?: (open: boolean) => void) => {
  const navigate = useNavigate();
  return () => {
    if (setOpen) setOpen(false);
    navigate("/testimonials");
  };
};

export const useHandleHighlights = (setOpen?: (open: boolean) => void) => {
  const navigate = useNavigate();
  return () => {
    if (setOpen) setOpen(false);
    navigate("/highlights");
  };
};

export const useHandlePricing = (setOpen?: (open: boolean) => void) => {
  const navigate = useNavigate();
  return () => {
    if (setOpen) setOpen(false);
    navigate("/pricing");
  };
};

export const useHandleFAQ = (setOpen?: (open: boolean) => void) => {
  const navigate = useNavigate();
  return () => {
    if (setOpen) setOpen(false);
    navigate("/faq");
  };
};

export const useHandleBlog = (setOpen?: (open: boolean) => void) => {
  const navigate = useNavigate();
  return () => {
    if (setOpen) setOpen(false);
    navigate("/blog");
  };
};

export const useHandleDashboard = (setOpen?: (open: boolean) => void) => {
  const navigate = useNavigate();
  return () => {
    if (setOpen) setOpen(false);
    navigate("/dashboard");
  };
};

export const useHandleCheckout = (setOpen?: (open: boolean) => void) => {
  const navigate = useNavigate();
  return () => {
    if (setOpen) setOpen(false);
    navigate("/checkout");
  };
};