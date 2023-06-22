'use client'

import StyledComponentsRegistry from "@/lib/registry"
import '../styles/global.css'

export const metadata = {
  title: 'Newsletter Signup form',
  description: 'Creating using Nextjs 13 & styled components',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body>
            <StyledComponentsRegistry>
              {children}
            </StyledComponentsRegistry>
          </body>
    </html>
  )
}
