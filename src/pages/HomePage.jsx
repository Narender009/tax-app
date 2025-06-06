import React from "react"
import HeroSection from "../components/Home/Herosection";
import CoursesList from "../components/Home/CoursesList";
import FeaturesSection from "../components/Home/FeaturesSection";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import CtaSection from "../components/Home/CtaSection"

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <CoursesList />
      <TestimonialsSection />
      <CtaSection />
    </div>
  )
}

export default HomePage
