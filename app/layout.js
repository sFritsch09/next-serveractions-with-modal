

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
  modal
}) {
  return (
    <html lang="en">
      <body>{children}
      {modal}</body>
    </html>
  )
}
