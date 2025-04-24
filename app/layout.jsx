import React from "react"
import "../src/styles/globals.css"

export const metadata = {
  title: "FinTaxPro",
  description: "Finance, Taxation, and Accounting Courses and Services",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>{children}</body>
    </html>
  )
}
