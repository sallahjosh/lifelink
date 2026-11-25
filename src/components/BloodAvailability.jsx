import { BLOOD_GROUPS } from '../data/data.js';

export default function BloodAvailability() {
  const levelColor = { high:'#27ae60', med:'#e67e22', low:'#e74c3c' };
  const fillClass = { high:'#27ae60', med:'#f39c12', low:'#c0392b' };

  return (
    <section id="availability" style={{ padding:'96px 0', background:'#fff' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
        <div style={{ textAlign:'center', marginBottom:56 }}>
          <div style={{ fontSize:12,fontWeight:700,letterSpacing:2,textTransform:'uppercase',color:'#c0392b',marginBottom:12 }}>Real-Time Stock</div>
          <h2 style={{ fontFamily:'Poppins',fontSize:'clamp(28px,4vw,42px)',fontWeight:800,color:'#111827',marginBottom:14 }}>Blood Group Availability</h2>
          <p style={{ fontSize:16,color:'#6b7280',maxWidth:560,margin:'0 auto',lineHeight:1.7 }}>Current blood stock levels across LifeLink partner facilities in Ghana.</p>
        </div>

        <div style={{ display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:20 }} className="avail-grid">
          {BLOOD_GROUPS.map(bg => (
            <div key={bg.type} style={{ background:'#fff',borderRadius:16,padding:'28px 20px',textAlign:'center',boxShadow:'0 4px 24px rgba(0,0,0,0.07)',borderTop:`4px solid ${levelColor[bg.level]}`,transition:'transform 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.transform='translateY(-4px)'}
              onMouseLeave={e => e.currentTarget.style.transform='translateY(0)'}>
              <div style={{ fontFamily:'Poppins',fontSize:40,fontWeight:900,color:'#c0392b',marginBottom:8 }}>{bg.type}</div>
              <div style={{ display:'flex',alignItems:'center',justifyContent:'center',gap:6,fontSize:13,fontWeight:600,marginBottom:14,color:levelColor[bg.level] }}>
                <span style={{ width:8,height:8,borderRadius:'50%',background:levelColor[bg.level],display:'inline-block' }}/>
                {bg.level==='high'?'High Stock':bg.level==='med'?'Medium Stock':'Low Stock'}
              </div>
              <div style={{ height:8,background:'#f3f4f6',borderRadius:50,overflow:'hidden',marginBottom:10 }}>
                <div style={{ width:`${bg.pct}%`,height:'100%',background:fillClass[bg.level],borderRadius:50,transition:'width 1s ease' }}/>
              </div>
              <div style={{ fontSize:12,color:'#9ca3af',fontWeight:500 }}>{bg.units} units available</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop:40,background:'linear-gradient(135deg,#fde8e8,#fff5f5)',borderRadius:16,padding:'24px 32px',display:'flex',alignItems:'center',gap:16,flexWrap:'wrap' }}>
          <span style={{ fontSize:28 }}>⚠️</span>
          <div>
            <div style={{ fontWeight:700,fontSize:16,color:'#111827',marginBottom:4 }}>Critical Shortage Alert</div>
            <div style={{ fontSize:14,color:'#6b7280' }}>B- and AB- blood types are critically low. If you are eligible, please consider donating today.</div>
          </div>
          <button onClick={() => document.getElementById('home')?.scrollIntoView({behavior:'smooth'})} style={{ marginLeft:'auto',padding:'10px 24px',background:'#c0392b',color:'#fff',borderRadius:50,fontWeight:600,fontSize:14,transition:'all 0.2s',whiteSpace:'nowrap' }}
            onMouseEnter={e => e.currentTarget.style.background='#96281b'}
            onMouseLeave={e => e.currentTarget.style.background='#c0392b'}>
            Donate Now
          </button>
        </div>
      </div>
      <style>{`
        @media(max-width:900px){.avail-grid{grid-template-columns:repeat(4,1fr) !important;}}
        @media(max-width:600px){.avail-grid{grid-template-columns:repeat(2,1fr) !important;}}
      `}</style>
    </section>
  );
}
