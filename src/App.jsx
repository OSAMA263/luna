import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import LoaderPage from "./components/shared/LoaderPage";

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Suspense fallback={<LoaderPage />}>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Services />} path="/services" />
{/* <Route element={<SingleService />} path="/services/:id" /> */}
          <Route element={<Blogs />} path="/blogs" />
          {/* <Route element={<SingleBlog />} path="/blogs/:id" />  */}
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

const About = lazy(() => import("@/pages/about/About"));
const Contact = lazy(() => import("@/pages/contact/Contact"));
const Services = lazy(()=>import("@/pages/services/Services"));
// const SingleService = lazy(()=>import("@/pages/services/SingleService"));
const Blogs = lazy(()=>import("@/pages/blogs/Blogs"));
// const SingleBlog = lazy(()=>import("@/pages/blogs/SingleBlog"));
