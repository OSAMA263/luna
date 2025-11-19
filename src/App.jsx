import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>yo</div>}>
        <Routes>
          <Route element={<Home />} path="/" />
          {/* <Route element={<About />} path="/about" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Services />} path="/services" />
          <Route element={<SingleService />} path="/services/:id" />
          <Route element={<Blogs />} path="/blogs" />
          <Route element={<SingleBlog />} path="/blogs/:id" /> */}
        </Routes>
      </Suspense>
      <Footer/>
    </>
  );
}

export default App;
