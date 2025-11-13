import { Route, Routes } from "react-router-dom";

import Home from "./pages/student/Home";
import Navbar from "./components/student/Navbar";
import Footer from "./components/student/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}
