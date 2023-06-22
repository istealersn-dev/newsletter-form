import StyledComponentsRegistry from "@/lib/registry"
import { GlobalStyles } from "@/styles/global"

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
          <GlobalStyles />
        {children}
        </StyledComponentsRegistry>
        </body>
    </html>
  )
}
