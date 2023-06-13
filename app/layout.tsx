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
      <body>{children}</body>
    </html>
  )
}
