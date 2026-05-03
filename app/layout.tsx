export const metadata = {
  title: 'Rally Support Platform',
  description: 'ラリー・ダートトライアル選手を応援するプラットフォーム',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
