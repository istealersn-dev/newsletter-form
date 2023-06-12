import { Roboto } from 'next/font/google'

export const roboto = Roboto({
  weight: [
    "400",
    "700"
  ],
  subsets: ['latin']
});

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
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
