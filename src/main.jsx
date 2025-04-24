"use client"

import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./styles/globals.css"

// Only run this in the browser
if (typeof window !== "undefined") {
  const rootElement = document.getElementById("root")
  if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
  }
}

export default App
