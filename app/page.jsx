"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import LoadingSpinner from "../src/components/ui/LoadingSpinner"

// Create a client-side only app component with no SSR
const ClientApp = dynamic(() => import("../src/ClientApp"), {
  ssr: false,
  loading: () => <LoadingSpinner />,
})

export default function Page() {
  // Only render the app on the client side
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <LoadingSpinner />
  }

  return <ClientApp />
}
