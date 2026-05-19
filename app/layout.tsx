import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Prompt Token Budget Predictor — Predict AI Costs Before You Run",
  description: "Estimate token usage and costs for complex AI workflows before execution. Set budget alerts, track usage patterns, and optimize prompt efficiency."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c8cc9c9d-7e9c-41fa-a8bf-392e0fdf5fa2"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
