'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
function SuccessContent() {
  const params = useSearchParams();
  const driver = params.get('driver') || '';
  const amount = params.get('amount') || '';
  return (
    <main style={{ backgroundColor: '#0F0F0F', minHeight: '100vh', color: '#EAEAEA', fontFamily: 'sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
      <div>
        <div style={{ fontSize: '5rem', marginBottom: '1.5rem' }}>🎉</div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '1rem' }}>応援ありがとうございます！</h1>
        {driver && <p style={{ fontSize: '1.2rem', color: '#A0A0A0', marginBottom: '0.5rem' }}><span style={{ color: '#E63946', fontWeight: 'bold' }}>{driver}</span> 選手への{amount ? ` ¥${Number(amount).toLocaleString()}` : ''}の応援が完了しました。</p>}
        <p style={{ color: '#A0A0A0', marginBottom: '3rem' }}>あなたの応援が選手の力になります！</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/drivers" style={{ backgroundColor: '#E63946', color: 'white', padding: '0.8rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>他の選手を応援する</a>
          <a href="/" style={{ border: '2px solid #E63946', color: '#E63946', padding: '0.8rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>トップに戻る</a>
        </div>
      </div>
    </main>
  );
}
export default function SupportSuccess() {
  return <Suspense fallback={<div style={{ backgroundColor: '#0F0F0F', minHeight: '100vh' }} />}><SuccessContent /></Suspense>;
}
