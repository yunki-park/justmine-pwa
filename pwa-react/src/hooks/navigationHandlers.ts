import { useNavigate } from 'react-router-dom';

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