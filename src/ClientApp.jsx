"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout"
import HomePage from "./pages/HomePage"
import CoursesPage from "./pages/CoursesPage"
import ServicesPage from "./pages/ServicesPage"
import ConsultPage from "./pages/ConsultPage"
import BuyDSCPage from "./pages/BuyDSCPage"
import NewsletterPage from "./pages/NewsletterPage"
import AboutPage from "./pages/AboutPage"
import FAQPage from "./pages/FAQPage"
import LoginPage from "./pages/LoginPage"

export default function ClientApp() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/consult-us" element={<ConsultPage />} />
          <Route path="/buy-dsc" element={<BuyDSCPage />} />
          <Route path="/newsletter" element={<NewsletterPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}
