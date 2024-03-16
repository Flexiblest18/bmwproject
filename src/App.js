import React from "react";
import SignIn from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-up/SignUp";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import SeeMore from "./components/Seemoredetail/SeemoreDetail";
import ContactUs from "./pages/home/contactUs/ContactUs";
import Allcar from "./pages/home/new-car/Allcar";
import AboutUs from "./pages/aboutUs/aboutUs";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/see-more" element={<SeeMore />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/car" element={<Allcar />} />
          <Route path="/about-us" element={<AboutUs/>} />

          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
