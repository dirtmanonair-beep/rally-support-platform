
'use client';
import { useState } from 'react';

const content = {
  ja: {
    badge: 'RALLY & DIRT TRIAL',
    title1: 'あなたの応援が、',
    title2: '選手の力になる',
    subtitle: 'Your Support Fuels Their Passion',
    desc: 'ラリー・ダートトライアル選手を、少額から応援できるプラットフォーム',
    cta1: '選手を探す',
    cta2: '支援の仕方を見る',
    stepsTitle: '3ステップで応援できる',
    step1: { title: '選手を探す', desc: '応援したい選手を見つけよう' },
    step2: { title: '支援方法を選ぶ', desc: '単発（¥500〜）または月額支援' },
    step3: { title: '応援開始！', desc: 'Stripeの安全な決済で完了' },
    footer: '© 2025 Rally Support Platform. All rights reserved.'
  },
  en: {
    badge: 'RALLY & DIRT TRIAL',
    title1: 'Your Support',
    title2: 'Fuels Their Passion',
    subtitle: 'あなたの応援が、選手の力になる',
    desc: 'Support rally and dirt trial drivers, starting from just ¥500',
    cta1: 'Find Drivers',
    cta2: 'How to Support',
    stepsTitle: '3 Simple Steps to Support',
    step1: { title: 'Find a Driver', desc: 'Browse and find your favorite driver' },
    step2: { title: 'Choose a Plan', desc: 'One-time (¥500+) or monthly support' },
    step3: { title: 'Start Supporting!', desc: 'Complete payment securely via Stripe' },
    footer: '© 2025 Rally Support Platform. All rights reserved.'
  },
  ko: {
    badge: '랠리 & 더트 트라이얼',
    title1: '당신의 응원이',
    title2: '선수의 힘이 됩니다',
    subtitle: 'Your Support Fuels Their Passion',
    desc: '랠리・더트 트라이얼 선수를 소액부터 응원할 수 있는 플랫폼',
    cta1: '선수 찾기',
    cta2: '응원 방법 보기',
    stepsTitle: '3단계로 응원할 수 있어요',
    step1: { title: '선수 찾기', desc: '응원하고 싶은 선수를 찾아보세요' },
    step2: { title: '응원 방법 선택', desc: '일회성(¥500~) 또는 월정액 응원' },
    step3: { title: '응원 시작!', desc: 'Stripe 안전 결제로 완료' },
    footer: '© 2025 Rally Support Platform. All rights reserved.'
  }
};

export default function Home() {
  const [lang, setLang] = useState<'ja'|'en'|'ko'>('ja');
  const t = content[lang];
  return (
    <main style={{ backgroundColor: '#0F0F0F', minHeight: '100vh', color: '#EAEAEA', fontFamily: 'sans-serif' }}>
      <div style={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: 100, display: 'flex', gap: '0.5rem' }}>
        {(['ja','en','ko'] as const).map(l => (
          <button key={l} onClick={() => setLang(l)} style={{ padding: '0.4rem 0.8rem', borderRadius: '6px', border: 'none', cursor: 'pointer', backgroundColor: lang === l ? '#E63946' : '#333', color: 'white', fontWeight: 'bold' }}>
            {l === 'ja' ? '🇯🇵 JA' : l === 'en' ? '🇬🇧 EN' : '🇰🇷 KO'}
          </button>
        ))}
      </div>
      <section style={{ background: 'linear-gradient(135deg, #0F0F0F 0%, #1A0A0A 50%, #2D0A0A 100%)', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
        <p style={{ color: '#E63946', fontSize: '0.9rem', letterSpacing: '0.3em', marginBottom: '1rem' }}>{t.badge}</p>
        <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: '900', lineHeight: '1.1', marginBottom: '1.5rem' }}>
          {t.title1}<br /><span style={{ color: '#E63946' }}>{t.title2}</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#A0A0A0', marginBottom: '0.5rem' }}>{t.subtitle}</p>
        <p style={{ fontSize: '1rem', color: '#A0A0A0', marginBottom: '3rem' }}>{t.desc}</p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="/drivers" style={{ backgroundColor: '#E63946', color: 'white', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>{t.cta1}</a>
          <a href="/how-to-support" style={{ border: '2px solid #E63946', color: '#E63946', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>{t.cta2}</a>
        </div>
      </section>
      <section style={{ padding: '5rem 2rem', backgroundColor: '#1A1A2E', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>{t.stepsTitle}</h2>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '900px', margin: '0 auto' }}>
          {[{icon:'🔍', step: t.step1},{icon:'❤️', step: t.step2},{icon:'💳', step: t.step3}].map((item, i) => (
            <div key={i} style={{ flex: '1', minWidth: '200px', padding: '2rem', backgroundColor: '#0F0F0F', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{item.icon}</div>
              <h3 style={{ color: '#E63946', marginBottom: '0.5rem' }}>Step {i+1}</h3>
              <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{item.step.title}</p>
              <p style={{ color: '#A0A0A0', fontSize: '0.9rem' }}>{item.step.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <footer style={{ backgroundColor: '#0A0A0A', padding: '2rem', textAlign: 'center', color: '#A0A0A0', fontSize: '0.9rem' }}>
        <p>{t.footer}</p>
      </footer>
    </main>
  )
}
