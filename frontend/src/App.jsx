import React from "react";
import Nutrition from "./components/nutrition";
import WhyUseSuvidhaShare from "./components/whyUseSuvidhaShare";
import Gallery from "./components/gallery"
import ClientTestimonials from "./components/clientTestmonials"

function App() {
  return (
    <>
        < Nutrition />
        < WhyUseSuvidhaShare />
    <div>
      <Gallery/>
    </div>
    <div>
      <ClientTestimonials />
    </div>
    </>
  )
}

export default App
