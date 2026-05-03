export default function Home() {
  return (
    <main style={{
      backgroundColor: '#0F0F0F',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#EAEAEA',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ fontSize: '3rem', color: '#E63946' }}>
        RALLY SUPPORT
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#A0A0A0' }}>
        あなたの応援が、選手の力になる
      </p>
      <p style={{ fontSize: '1rem', color: '#A0A0A0' }}>
        ラリー・ダートトライアル選手を応援するプラットフォーム
      </p>
    </main>
  )
}
