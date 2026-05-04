export default function Home() {
  return (
    <main style={{ backgroundColor: '#0F0F0F', minHeight: '100vh', color: '#EAEAEA', fontFamily: 'sans-serif' }}>
      
      {/* ヒーローセクション */}
      <section style={{ background: 'linear-gradient(135deg, #0F0F0F 0%, #1A0A0A 50%, #2D0A0A 100%)', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
        <p style={{ color: '#E63946', fontSize: '0.9rem', letterSpacing: '0.3em', marginBottom: '1rem' }}>RALLY & DIRT TRIAL</p>
        <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: '900', lineHeight: '1.1', marginBottom: '1.5rem' }}>
          あなたの応援が、<br />
          <span style={{ color: '#E63946' }}>選手の力になる</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#A0A0A0', marginBottom: '0.5rem' }}>Your Support Fuels Their Passion</p>
        <p style={{ fontSize: '1rem', color: '#A0A0A0', marginBottom: '3rem' }}>ラリー・ダートトライアル選手を、少額から応援できるプラットフォーム</p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="/drivers" style={{ backgroundColor: '#E63946', color: 'white', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>選手を探す</a>
          <a href="/how-to-support" style={{ border: '2px solid #E63946', color: '#E63946', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>支援の仕方を見る</a>
        </div>
      </section>

      {/* 3ステップセクション */}
      <section style={{ padding: '5rem 2rem', backgroundColor: '#1A1A2E', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>3ステップで応援できる</h2>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ flex: '1', minWidth: '200px', padding: '2rem', backgroundColor: '#0F0F0F', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
            <h3 style={{ color: '#E63946', marginBottom: '0.5rem' }}>Step 1</h3>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>選手を探す</p>
            <p style={{ color: '#A0A0A0', fontSize: '0.9rem' }}>応援したい選手を見つけよう</p>
          </div>
          <div style={{ flex: '1', minWidth: '200px', padding: '2rem', backgroundColor: '#0F0F0F', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>❤️</div>
            <h3 style={{ color: '#E63946', marginBottom: '0.5rem' }}>Step 2</h3>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>支援方法を選ぶ</p>
            <p style={{ color: '#A0A0A0', fontSize: '0.9rem' }}>単発（¥500〜）または月額支援</p>
          </div>
          <div style={{ flex: '1', minWidth: '200px', padding: '2rem', backgroundColor: '#0F0F0F', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💳</div>
            <h3 style={{ color: '#E63946', marginBottom: '0.5rem' }}>Step 3</h3>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>応援開始！</p>
            <p style={{ color: '#A0A0A0', fontSize: '0.9rem' }}>Stripeの安全な決済で完了</p>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer style={{ backgroundColor: '#0A0A0A', padding: '2rem', textAlign: 'center', color: '#A0A0A0', fontSize: '0.9rem' }}>
        <p>© 2025 Rally Support Platform. All rights reserved.</p>
      </footer>

    </main>
  )
}
