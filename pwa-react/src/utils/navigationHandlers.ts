import { NavigateFunction } from 'react-router-dom';

export const createNavigationHandlers = (navigate: NavigateFunction, setOpen?: (open: boolean) => void) => ({
    handleSignIn: () => {
        if (setOpen) {
            setOpen(false);
        }
        navigate("/signin");
    },
    handleSignUp: () => {
        if (setOpen) {
            setOpen(false);
        }
        navigate("/signup");
    },
    handleFeatures: () => {
        if (setOpen) {
            setOpen(false);
        }
        navigate("/features");
    },
    handleTestimonials: () => {
        if (setOpen) {
            setOpen(false);
        }
        navigate("/testimonials");
    },
    handleHighlights: () => {
        if (setOpen) {
            setOpen(false);
        }
        navigate("/highlights");
    },
    handlePricing: () => {
        if (setOpen) {
            setOpen(false);
        }
        navigate("/pricing");
    },
    handleFAQ: () => {
        if (setOpen) {
            setOpen(false);
        }
        navigate("/faq");
    },
    handleBlog: () => {
        if (setOpen) {
            setOpen(false);
        }
        navigate("/blog");
    },
    handleDashboard: () => {
        if (setOpen) {
            setOpen(false);
        }
        navigate("/dashboard");
    },
    handleCheckout: () => {
        if (setOpen) {
            setOpen(false);
        }
        navigate("/checkout");
    },
});