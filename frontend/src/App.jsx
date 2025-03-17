import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importing necessary components from react-router-dom

// Import your components
import Dashboard from "./components/Dashboard";
import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import Solutions from "./components/Solutions";
import SignUp from "./components/SignUp";
import Nutrition from "./components/nutrition";
import WhyUseSuvidhaShare from "./components/whyUseSuvidhaShare";
import Gallery from "./components/gallery";
import ClientTestimonials from "./components/clientTestmonials";
import ContactUs from "./components/contactUs";
import AboutUs from "./pages/AboutUs";
import SignIn from "./components/signin";

const App = () => {
  return (
    <Router>
      {" "}
      {/* Wrapping the app with Router to enable routing */}
      {/* Navbar will be available on all pages */}
      <Routes>
        {" "}
        {/* Only one Route will be rendered at a time */}
        {/* Route for Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Default Route (Home page) */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HeroSection />
              <Solutions />
              <Nutrition />
              <WhyUseSuvidhaShare />
              <Gallery />
              <ClientTestimonials />
              <ContactUs/>
            </>
          }
        />
        <Route
        path="/aboutus"
        element={<AboutUs />}
      />

<Route
        path="/signin"
        element={<SignIn />}
      />
      
<Route
        path="/signup"
        element={<SignIn />}
      />

      </Routes>
      
    </Router>
  );
};

export default App;
