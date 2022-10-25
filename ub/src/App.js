import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TopBar from "./components/Navbar";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <>
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/post/:postId" element={<BlogPage />} />
        </Routes>
      </>
    </>
  );
}

export default App;
