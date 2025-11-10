import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Suspense fallback={<div>yo</div>}>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<About/>} path="/about"/>
        <Route element={<Contact/>} path="/contact"/>
        <Route element={<Services/>} path="/services"/>
        <Route element={<SingleService/>} path="/services/:id"/>
        <Route element={<Blogs/>} path="/blogs"/>
        <Route element={<SingleBlog/>} path="/blogs/:id"/>
      </Routes>
    </Suspense>
  );
}

export default App;
