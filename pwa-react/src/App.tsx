import './App.css';
import { Routes, Route } from 'react-router-dom';
import MarketingPage from './components/marketing-page/MarketingPage.tsx';
import Features from './components/marketing-page/components/Features.tsx';
import Testimonials from './components/marketing-page/components/Testimonials.tsx';
import Highlights from './components/marketing-page/components/Highlights.tsx';
import Pricing from './components/marketing-page/components/Pricing.tsx';
import FAQ from './components/marketing-page/components/FAQ.tsx';
import Blog from './components/blog/Blog.tsx';
import SignInSide from './components/sign-in-side/SignInSide.tsx';
import Dashboard from './components/dashboard/Dashboard.tsx';
import Checkout from './components/checkout/Checkout.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MarketingPage />} />
      <Route path="/signin" element={<SignInSide />} />
      <Route path="/features" element={<Features />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/highlights" element={<Highlights />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
