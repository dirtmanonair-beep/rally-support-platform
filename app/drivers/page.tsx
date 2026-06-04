'use client';
import { useState } from 'react';
import { mockDrivers } from '../../lib/mockDrivers';
import type { Driver } from '../../lib/supabase';
const labels = {
  ja: { title: '選手一覧', subtitle: '応援したい選手を見つけよう', all: 'すべて', rally: 'ラリー', dirt: 'ダートトライアル', both: '両方', support: '応援する', monthly: '月額支援', onetime: '単発支援', back: 'トップに戻る', instagram: 'Instagram', twitter: 'X', progress: '達成率' },
  en: { title: 'Find Drivers', subtitle: 'Browse and support your favorite driver', all: 'All', rally: 'Rally', dirt: 'Dirt Trial', both: 'Both', support: 'Support', monthly: 'Monthly', onetime: 'One-time', back: 'Back', instagram: 'Instagram', twitter: 'Twitter', progress: 'Progress' },
  ko: { title: '선수 목록', subtitle: '응원하고 싶은 선수를 찾아보세요', all: '전체', rally: '랠리', dirt: '더트 트라이얼', both: '모두', support: '응원하기', monthly: '월정액', onetime: '일회성', back: '홈으로', instagram: 'Instagram', twitter: 'Twitter', progress: '달성률' },
};
const cc: Record<string,string> = { rally:'#E63946','dirt-trial':'#457B9D',both:'#2A9D8F' };
const cl = { ja:{rally:'ラリー','dirt-trial':'ダートトライアル',both:'ラリー＆ダート'}, en:{rally:'Rally','dirt-trial':'Dirt Trial',both:'Rally & Dirt'}, ko:{rally:'랠리','dirt-trial':'더트 트라이얼',both:'랠리&더트'} };
function Card({ d, lang, t }: { d: Driver; lang: 'ja'|'en'|'ko'; t: typeof labels['ja'] }) {
  const [show, setShow] = useState(false);
  const [amt, setAmt] = useState(500);
  const name = lang==='ja'?d.name:lang==='en'?d.name_en:d.name_ko;
  const bio = lang==='ja'?d.bio:lang==='en'?d.bio_en:d.bio_ko;
  const pct = Math.min(Math.round((d.current_support/d.monthly_goal)*100),100);
  const pay = async (type: 'monthly'|'onetime') => {
    const r = await fetch('/api/checkout',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({driverId:d.id,driverName:name,amount:amt,type})});
    const data = await r.json();
    if(data.url) window.location.href=data.url;
  };
  return (
    <div style={{backgroundColor:'#1A1A2E',borderRadius:'16px',overflow:'hidden',border:'1px solid rgba(255,255,255,0.07)',display:'flex',flexDirection:'column'}}>
      <div style={{height:'160px',background:`linear-gradient(135deg,${cc[d.category]}33,#0F0F0F)`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'3.5rem'}}>🏁</div>
      <div style={{padding:'1.5rem',flex:1,display:'flex',flexDirection:'column',gap:'0.75rem'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
          <h2 style={{margin:0,fontSize:'1.2rem',fontWeight:'800'}}>{name}</h2>
          <span style={{backgroundColor:cc[d.category],color:'white',fontSize:'0.7rem',padding:'0.2rem 0.6rem',borderRadius:'999px',fontWeight:'bold'}}>{cl[lang][d.category as keyof typeof cl['ja']]}</span>
        </div>
        <p style={{color:'#A0A0A0',fontSize:'0.85rem',margin:0,lineHeight:'1.6'}}>{bio}</p>
        <div>
          <div style={{display:'flex',justifyContent:'space-between',fontSize:'0.8rem',color:'#A0A0A0',marginBottom:'0.4rem'}}><span>{t.progress}: {pct}%</span><span>¥{d.current_support.toLocaleString()} / ¥{d.monthly_goal.toLocaleString()}</span></div>
          <div style={{height:'6px',backgroundColor:'#333',borderRadius:'999px',overflow:'hidden'}}><div style={{height:'100%',width:`${pct}%`,backgroundColor:'#E63946',borderRadius:'999px'}}/></div>
        </div>
        <div style={{display:'flex',gap:'0.5rem'}}>
          {d.instagram_url&&<a href={d.instagram_url} target="_blank" rel="noopener noreferrer" style={{fontSize:'0.8rem',color:'#A0A0A0',textDecoration:'none',border:'1px solid #333',padding:'0.3rem 0.6rem',borderRadius:'6px'}}>📸 {t.instagram}</a>}
          {d.twitter_url&&<a href={d.twitter_url} target="_blank" rel="noopener noreferrer" style={{fontSize:'0.8rem',color:'#A0A0A0',textDecoration:'none',border:'1px solid #333',padding:'0.3rem 0.6rem',borderRadius:'6px'}}>🐦 {t.twitter}</a>}
        </div>
        {!show?<button onClick={()=>setShow(true)} style={{marginTop:'auto',backgroundColor:'#E63946',color:'white',border:'none',borderRadius:'8px',padding:'0.8rem',fontWeight:'bold',fontSize:'1rem',cursor:'pointer',width:'100%'}}>{t.support} ❤️</button>:(
          <div style={{marginTop:'auto',display:'flex',flexDirection:'column',gap:'0.75rem'}}>
            <div style={{display:'flex',alignItems:'center',gap:'0.5rem'}}><span style={{color:'#A0A0A0'}}>¥</span><input type="number" min={500} step={100} value={amt} onChange={e=>setAmt(Math.max(500,Number(e.target.value)))} style={{flex:1,backgroundColor:'#0F0F0F',border:'1px solid #333',borderRadius:'6px',color:'white',padding:'0.5rem',fontSize:'1rem'}}/></div>
            <div style={{display:'flex',gap:'0.5rem'}}>
              <button onClick={()=>pay('onetime')} style={{flex:1,backgroundColor:'#333',color:'white',border:'1px solid #E63946',borderRadius:'8px',padding:'0.7rem',fontWeight:'bold',cursor:'pointer'}}>{t.onetime}</button>
              <button onClick={()=>pay('monthly')} style={{flex:1,backgroundColor:'#E63946',color:'white',border:'none',borderRadius:'8px',padding:'0.7rem',fontWeight:'bold',cursor:'pointer'}}>{t.monthly} 🔄</button>
            </div>
            <button onClick={()=>setShow(false)} style={{background:'none',border:'none',color:'#666',cursor:'pointer',fontSize:'0.8rem'}}>✕ キャンセル</button>
          </div>
        )}
      </div>
    </div>
  );
}
export default function DriversPage() {
  const [lang, setLang] = useState<'ja'|'en'|'ko'>('ja');
  const [filter, setFilter] = useState<'all'|'rally'|'dirt-trial'|'both'>('all');
  const t = labels[lang];
  const list = filter==='all'?mockDrivers:mockDrivers.filter(d=>d.category===filter);
  return (
    <main style={{backgroundColor:'#0F0F0F',minHeight:'100vh',color:'#EAEAEA',fontFamily:'sans-serif'}}>
      <div style={{position:'fixed',top:'1rem',right:'1rem',zIndex:100,display:'flex',gap:'0.5rem'}}>
        {(['ja','en','ko'] as const).map(l=><button key={l} onClick={()=>setLang(l)} style={{padding:'0.4rem 0.8rem',borderRadius:'6px',border:'none',cursor:'pointer',backgroundColor:lang===l?'#E63946':'#333',color:'white',fontWeight:'bold'}}>{l==='ja'?'🇯🇵 JA':l==='en'?'🇬🇧 EN':'🇰🇷 KO'}</button>)}
      </div>
      <div style={{maxWidth:'1100px',margin:'0 auto',padding:'5rem 2rem 3rem'}}>
        <a href="/" style={{color:'#A0A0A0',textDecoration:'none',fontSize:'0.9rem',marginBottom:'2rem',display:'inline-block'}}>← {t.back}</a>
        <h1 style={{fontSize:'clamp(2rem,6vw,3.5rem)',fontWeight:'900',marginBottom:'0.5rem'}}>{t.title}</h1>
        <p style={{color:'#A0A0A0',marginBottom:'2rem'}}>{t.subtitle}</p>
        <div style={{display:'flex',gap:'0.5rem',marginBottom:'2.5rem',flexWrap:'wrap'}}>
          {(['all','rally','dirt-trial','both'] as const).map(f=><button key={f} onClick={()=>setFilter(f)} style={{padding:'0.5rem 1.2rem',borderRadius:'999px',border:'1px solid',borderColor:filter===f?'#E63946':'#333',backgroundColor:filter===f?'#E63946':'transparent',color:filter===f?'white':'#A0A0A0',cursor:'pointer',fontWeight:'bold'}}>{f==='all'?t.all:f==='rally'?t.rally:f==='dirt-trial'?t.dirt:t.both}</button>)}
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:'2rem'}}>
          {list.map(d=><Card key={d.id} d={d} lang={lang} t={t}/>)}
        </div>
      </div>
    </main>
  );
}
