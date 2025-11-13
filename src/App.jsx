import { Route, Routes } from "react-router-dom";

import Home from "./pages/student/Home";
import Navbar from "./components/student/Navbar";
import Footer from "./components/student/Footer";
import SignIn from "./pages/student/SignIUp";
import Login from "./pages/student/LogIn";
import CourseListPage from "./pages/student/CourseList";
import ScrollToTop from "./components/student/ScrollToTop";

export default function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="course-list" element={<CourseListPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
