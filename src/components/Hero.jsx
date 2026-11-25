import { useState } from 'react';
import { BLOOD_GROUPS, STATS } from '../data/data.js';

export default function Hero({ onRegister, onRequest }) {
  const [activeGroup, setActiveGroup] = useState(null);
  const levelColor = { high: '#2ecc71', med: '#f39c12', low: '#e74c3c' };
  const levelLabel = { high: 'High', med: 'Medium', low: 'Low' };

  return (
    <section id="home" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a0505 0%, #7b1111 35%, #c0392b 70%, #e74c3c 100%)',
      display: 'flex', alignItems: 'center', paddingTop: 70, position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position:'absolute',top:'-10%',right:'-5%',width:500,height:500,background:'rgba(255,255,255,0.03)',borderRadius:'50%',pointerEvents:'none' }}/>
      <div style={{ position:'absolute',bottom:'-20%',left:'-5%',width:600,height:600,background:'rgba(255,255,255,0.03)',borderRadius:'50%',pointerEvents:'none' }}/>

      <div style={{ maxWidth:1200,margin:'0 auto',padding:'80px 24px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:60,alignItems:'center',position:'relative',zIndex:1,width:'100%' }} className="hero-grid">
        {/* Left */}
        <div>
          <div style={{ display:'inline-flex',alignItems:'center',gap:8,background:'rgba(255,255,255,0.15)',backdropFilter:'blur(10px)',color:'#fff',padding:'8px 16px',borderRadius:50,fontSize:13,fontWeight:600,marginBottom:24 }}>
            <span>🌍</span> Ghana's #1 Blood Donation Platform
          </div>
          <h1 style={{ fontFamily:'Poppins',fontSize:'clamp(36px,5vw,62px)',fontWeight:900,color:'#fff',lineHeight:1.1,marginBottom:20 }}>
            Give Blood.<br/><span style={{ color:'#ffd700' }}>Share Hope.</span><br/>Save Lives.
          </h1>
          <p style={{ fontSize:18,color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:36 }}>
            LifeLink connects voluntary blood donors with patients in need across Ghana. Find donors, check availability, and request blood — all in one place.
          </p>
          <div style={{ display:'flex',gap:16,flexWrap:'wrap',marginBottom:52 }}>
            <button onClick={onRegister} style={{ display:'inline-flex',alignItems:'center',gap:8,background:'#fff',color:'#c0392b',padding:'14px 28px',borderRadius:50,fontWeight:700,fontSize:15,transition:'all 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.transform='translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform='translateY(0)'}>
              ♥ Become a Donor
            </button>
            <button onClick={onRequest} style={{ display:'inline-flex',alignItems:'center',gap:8,background:'transparent',color:'#fff',padding:'14px 28px',borderRadius:50,fontWeight:600,fontSize:15,border:'2px solid rgba(255,255,255,0.6)',transition:'all 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.background='rgba(255,255,255,0.15)'; e.currentTarget.style.transform='translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.transform='translateY(0)'; }}>
              🩸 Request Blood
            </button>
          </div>
          <div style={{ display:'flex',gap:40,flexWrap:'wrap' }}>
            {STATS.map((s,i) => (
              <div key={i} style={{ textAlign:'center' }}>
                <div style={{ fontFamily:'Poppins',fontSize:28,fontWeight:800,color:'#fff' }}>{s.num}</div>
                <div style={{ fontSize:12,color:'rgba(255,255,255,0.7)',fontWeight:500,marginTop:2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right card */}
        <div style={{ background:'rgba(255,255,255,0.1)',backdropFilter:'blur(20px)',borderRadius:24,padding:36,border:'1px solid rgba(255,255,255,0.2)' }}>
          <div style={{ fontFamily:'Poppins',fontWeight:700,fontSize:18,color:'#fff',marginBottom:24,display:'flex',alignItems:'center',gap:8 }}>
            🩸 Live Blood Availability
          </div>
          <div style={{ display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:10,marginBottom:20 }}>
            {BLOOD_GROUPS.map(bg => (
              <div key={bg.type}
                onClick={() => setActiveGroup(activeGroup === bg.type ? null : bg.type)}
                style={{
                  background: activeGroup === bg.type ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.12)',
                  border: `1px solid ${activeGroup === bg.type ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.15)'}`,
                  borderRadius:12,padding:'14px 6px',textAlign:'center',cursor:'pointer',
                  transform: activeGroup === bg.type ? 'scale(1.05)' : 'scale(1)',
                  transition:'all 0.2s',
                }}>
                <div style={{ fontFamily:'Poppins',fontWeight:800,fontSize:20,color:'#fff' }}>{bg.type}</div>
                <div style={{ display:'flex',alignItems:'center',justifyContent:'center',gap:4,marginTop:4 }}>
                  <span style={{ width:7,height:7,borderRadius:'50%',background:levelColor[bg.level],display:'inline-block' }}/>
                  <span style={{ fontSize:10,color:'rgba(255,255,255,0.75)',fontWeight:500 }}>{levelLabel[bg.level]}</span>
                </div>
              </div>
            ))}
          </div>

          {activeGroup && (() => {
            const bg = BLOOD_GROUPS.find(b => b.type === activeGroup);
            return (
              <div style={{ background:'rgba(255,255,255,0.15)',borderRadius:12,padding:'12px 16px',marginBottom:16 }}>
                <div style={{ color:'#fff',fontWeight:700,marginBottom:4 }}>{activeGroup} — Current Stock</div>
                <div style={{ color:'rgba(255,255,255,0.8)',fontSize:13 }}>{bg.units} units available across partner facilities</div>
                <div style={{ marginTop:8,height:6,background:'rgba(255,255,255,0.2)',borderRadius:50,overflow:'hidden' }}>
                  <div style={{ width:`${bg.pct}%`,height:'100%',background:levelColor[bg.level],borderRadius:50,transition:'width 0.6s' }}/>
                </div>
              </div>
            );
          })()}

          <button onClick={onRequest} style={{ width:'100%',padding:'13px',borderRadius:50,background:'#fff',color:'#c0392b',fontWeight:700,fontSize:14,display:'flex',alignItems:'center',justifyContent:'center',gap:8,transition:'all 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.transform='translateY(-1px)'}
            onMouseLeave={e => e.currentTarget.style.transform='translateY(0)'}>
            + Request Blood Now
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
