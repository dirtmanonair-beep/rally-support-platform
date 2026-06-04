import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Rally Support Platform',
  description: 'ラリー・ダートトライアル選手を応援するプラットフォーム',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
