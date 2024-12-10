import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/main-page/MainPage.tsx";
import Features from "./components/main-page/components/Features.tsx";
import Testimonials from "./components/main-page/components/Testimonials.tsx";
import Highlights from "./components/main-page/components/Highlights.tsx";
import Pricing from "./components/main-page/components/Pricing.tsx";
import FAQ from "./components/main-page/components/FAQ.tsx";
import Blog from "./components/blog/Blog.tsx";
import SignInSide from "./components/sign-in-side/SignInSide.tsx";
import Dashboard from "./components/dashboard/Dashboard.tsx";
import Checkout from "./components/checkout/Checkout.tsx";
import SignUp from "./components/sign-up/SignUp.tsx";

function App() {
  return (
    <Routes>
      {/* 메인 페이지 내부 네비게이션 */}
      <Route path="/" element={<MainPage />} />
      <Route path="/features" element={<Features />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/highlights" element={<Highlights />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/faq" element={<FAQ />} />
      {/* 외부 링크 */}
      <Route path="/blog" element={<Blog />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/signin" element={<SignInSide />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
