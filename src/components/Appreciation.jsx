import { WALL_DONORS } from '../data/data.js';
import { useState } from 'react';

export default function Appreciation() {
  const [hovered, setHovered] = useState(null);
  const badges = [
    { icon:'🥇', title:'First-Time Donor',  desc:'Awarded after your first successful donation' },
    { icon:'🏅', title:'Regular Donor',      desc:'Given after 5 or more lifetime donations' },
    { icon:'🏆', title:'Life Champion',      desc:'Awarded to donors with 10+ donations' },
    { icon:'⭐', title:'Community Hero',     desc:'Recognised for emergency blood responses' },
  ];

  return (
    <section id="appreciation" style={{ padding:'96px 0', background:'#fff' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'start' }} className="appr-grid">
          <div>
            <div style={{ fontSize:12,fontWeight:700,letterSpacing:2,textTransform:'uppercase',color:'#c0392b',marginBottom:12 }}>Donor Recognition</div>
            <h2 style={{ fontFamily:'Poppins',fontSize:'clamp(28px,4vw,38px)',fontWeight:800,color:'#111827',marginBottom:14 }}>Every Donation Deserves Recognition</h2>
            <p style={{ fontSize:16,color:'#6b7280',lineHeight:1.7,marginBottom:40 }}>LifeLink celebrates every donor. From your first donation to your tenth, we make sure your generosity is seen and appreciated by the whole community.</p>
            <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:16 }}>
              {badges.map((b,i)=>(
                <div key={i} style={{ background:'#f9fafb',borderRadius:14,padding:'24px 20px',textAlign:'center',transition:'transform 0.3s,box-shadow 0.3s',boxShadow:'0 2px 8px rgba(0,0,0,0.05)' }}
                  onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-4px)';e.currentTarget.style.boxShadow='0 12px 32px rgba(0,0,0,0.1)';}}
                  onMouseLeave={e=>{e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='0 2px 8px rgba(0,0,0,0.05)';}}>
                  <div style={{ fontSize:36,marginBottom:10 }}>{b.icon}</div>
                  <div style={{ fontWeight:700,fontSize:14,color:'#111827',marginBottom:4 }}>{b.title}</div>
                  <div style={{ fontSize:12,color:'#9ca3af',lineHeight:1.5 }}>{b.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ background:'linear-gradient(135deg,#c0392b,#e74c3c)',borderRadius:20,padding:36,color:'#fff' }}>
              <h3 style={{ fontFamily:'Poppins',fontSize:22,fontWeight:700,marginBottom:6,display:'flex',alignItems:'center',gap:8 }}>⭐ Donor Wall of Fame</h3>
              <p style={{ fontSize:14,color:'rgba(255,255,255,0.8)',marginBottom:28 }}>Celebrating our most dedicated community donors</p>
              <div style={{ display:'flex',flexWrap:'wrap',gap:12 }}>
                {WALL_DONORS.map((d,i)=>(
                  <div key={i} onMouseEnter={()=>setHovered(i)} onMouseLeave={()=>setHovered(null)}
                    style={{ position:'relative',width:50,height:50,borderRadius:'50%',background:'rgba(255,255,255,0.22)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700,fontSize:15,color:'#fff',border:'2px solid rgba(255,255,255,0.4)',cursor:'pointer',transition:'transform 0.2s',transform:hovered===i?'scale(1.2)':'scale(1)' }}>
                    {d.initials}
                    {hovered===i&&(
                      <div style={{ position:'absolute',bottom:'calc(100% + 8px)',left:'50%',transform:'translateX(-50%)',background:'rgba(0,0,0,0.85)',color:'#fff',fontSize:11,padding:'5px 10px',borderRadius:6,whiteSpace:'nowrap',zIndex:10 }}>
                        {d.name} · {d.count} donations
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div style={{ marginTop:28,background:'rgba(255,255,255,0.15)',borderRadius:12,padding:'16px 20px',display:'flex',alignItems:'center',gap:12 }}>
                <span style={{ fontSize:28 }}>🎖️</span>
                <div>
                  <div style={{ fontWeight:700,fontSize:14 }}>Top Donor: Efua A.</div>
                  <div style={{ fontSize:12,color:'rgba(255,255,255,0.8)' }}>15 total donations · Life Champion badge</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.appr-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
