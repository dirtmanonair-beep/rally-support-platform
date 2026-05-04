
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations();
  return (
    <main style={{ backgroundColor: '#0F0F0F', minHeight: '100vh', color: '#EAEAEA', fontFamily: 'sans-serif' }}>
      <section style={{ background: 'linear-gradient(135deg, #0F0F0F 0%, #1A0A0A 50%, #2D0A0A 100%)', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
        <p style={{ color: '#E63946', fontSize: '0.9rem', letterSpacing: '0.3em', marginBottom: '1rem' }}>{t('hero.badge')}</p>
        <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: '900', lineHeight: '1.1', marginBottom: '1.5rem' }}>
          {t('hero.title1')}<br />
          <span style={{ color: '#E63946' }}>{t('hero.title2')}</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#A0A0A0', marginBottom: '0.5rem' }}>{t('hero.subtitle')}</p>
        <p style={{ fontSize: '1rem', color: '#A0A0A0', marginBottom: '3rem' }}>{t('hero.description')}</p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="/drivers" style={{ backgroundColor: '#E63946', color: 'white', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>{t('hero.cta1')}</a>
          <a href="/how-to-support" style={{ border: '2px solid #E63946', color: '#E63946', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>{t('hero.cta2')}</a>
        </div>
      </section>
      <section style={{ padding: '5rem 2rem', backgroundColor: '#1A1A2E', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>{t('steps.title')}</h2>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ flex: '1', minWidth: '200px', padding: '2rem', backgroundColor: '#0F0F0F', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
            <h3 style={{ color: '#E63946', marginBottom: '0.5rem' }}>Step 1</h3>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{t('steps.step1.title')}</p>
            <p style={{ color: '#A0A0A0', fontSize: '0.9rem' }}>{t('steps.step1.desc')}</p>
          </div>
          <div style={{ flex: '1', minWidth: '200px', padding: '2rem', backgroundColor: '#0F0F0F', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>❤️</div>
            <h3 style={{ color: '#E63946', marginBottom: '0.5rem' }}>Step 2</h3>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{t('steps.step2.title')}</p>
            <p style={{ color: '#A0A0A0', fontSize: '0.9rem' }}>{t('steps.step2.desc')}</p>
          </div>
          <div style={{ flex: '1', minWidth: '200px', padding: '2rem', backgroundColor: '#0F0F0F', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💳</div>
            <h3 style={{ color: '#E63946', marginBottom: '0.5rem' }}>Step 3</h3>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{t('steps.step3.title')}</p>
            <p style={{ color: '#A0A0A0', fontSize: '0.9rem' }}>{t('steps.step3.desc')}</p>
          </div>
        </div>
      </section>
      <footer style={{ backgroundColor: '#0A0A0A', padding: '2rem', textAlign: 'center', color: '#A0A0A0', fontSize: '0.9rem' }}>
        <p>{t('footer')}</p>
      </footer>
    </main>
  )
}
