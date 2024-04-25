import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./utils/Loader";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Products = lazy(() => import("./pages/Products"));
const Cart = lazy(() => import("./pages/Cart"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
// Auth screen imports
const LogInPage = lazy(() => import("./components/auth/LogInPage"));
const SignUpPage = lazy(() => import("./components/auth/SignUpPage"));
const ForgetPassword = lazy(() => import("./components/auth/ForgetPassword"));

function App() {
  // To exclude the Header and Footer to be Displayed on the PageNotFound Page
  // const location = useLocation();
  // Check if the current location matches the path for PageNotFound
  const isPageNotFound = location.pathname === "/pageNotFound";

  return (
    <Router>
      {/* Render the Header if it's not the PageNotFound */}
      {!isPageNotFound && <Header />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pageNotFound" element={<PageNotFound />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
        </Routes>
      </Suspense>
      {/* Render the Footer if it's not the PageNotFound */}
      {!isPageNotFound && <Footer />}
    </Router>
  );
}

export default App;
