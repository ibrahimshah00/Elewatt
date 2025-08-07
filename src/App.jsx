// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Banner from "./Components/Banner";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import About from "./Components/About";
import ProjectShowcase from "./Components/ProjectShowcase";
import Lowerbanner from "./Components/Lowerbanner";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
import Depannages from "./Components/Depannages";
import Installation from "./Components/Installation";
import Miseconfirmite from "./Components/Miseconfirmite";
import Installationdeclarage from "./Components/Installationdeclarage";
import ContactForm from "./Components/Contact"; // Importing the ContactForm component

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main home route showing all components */}
        <Route
          path="/"
          element={
            <div>
              <div className="shared-bg">
                <Navbar />
                <Hero />
              </div>
              <Banner />
              <Services />
              <Projects />
               <div id="about">
                <About />
              </div>
              
              <ProjectShowcase />
              <Lowerbanner />
              <FAQ />
              <Footer />
            </div>
          }
        />

        {/* Separate page for Dépannages électrique */}
        <Route path="/depannages" element={<Depannages />} />
        <Route path="/installation" element={<Installation />} />
        <Route path="/conformite" element={<Miseconfirmite />} />
        <Route path="/eclairage" element={<Installationdeclarage />} />
          

         <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </Router>
  );
};

export default App;
