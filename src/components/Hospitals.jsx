import { HOSPITALS } from '../data/data.js';

export default function Hospitals() {
  return (
    <section id="hospitals" style={{ padding:'96px 0', background:'#f9fafb' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
        <div style={{ textAlign:'center', marginBottom:56 }}>
          <div style={{ fontSize:12,fontWeight:700,letterSpacing:2,textTransform:'uppercase',color:'#c0392b',marginBottom:12 }}>Partner Network</div>
          <h2 style={{ fontFamily:'Poppins',fontSize:'clamp(28px,4vw,42px)',fontWeight:800,color:'#111827',marginBottom:14 }}>Hospital Referrals</h2>
          <p style={{ fontSize:16,color:'#6b7280',maxWidth:560,margin:'0 auto',lineHeight:1.7 }}>Connect with authorised hospitals and blood banks across Ghana. All listed facilities are verified LifeLink partners.</p>
        </div>
        <div style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24 }} className="hospitals-grid">
          {HOSPITALS.map(h=>(
            <div key={h.id} style={{ background:'#fff',borderRadius:16,padding:28,boxShadow:'0 4px 24px rgba(0,0,0,0.07)',transition:'transform 0.3s,box-shadow 0.3s' }}
              onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-4px)';e.currentTarget.style.boxShadow='0 16px 40px rgba(0,0,0,0.12)';}}
              onMouseLeave={e=>{e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='0 4px 24px rgba(0,0,0,0.07)';}}>
              <div style={{ width:52,height:52,background:'#fde8e8',borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',fontSize:24,marginBottom:16 }}>🏥</div>
              <h3 style={{ fontWeight:700,fontSize:16,color:'#111827',marginBottom:4 }}>{h.name}</h3>
              <div style={{ fontSize:13,color:'#9ca3af',display:'flex',alignItems:'center',gap:4,marginBottom:14 }}>📍 {h.location}</div>
              <div style={{ display:'flex',flexDirection:'column',gap:8,marginBottom:16 }}>
                <div style={{ display:'flex',alignItems:'center',gap:8,fontSize:13,color:'#374151' }}>📞 {h.phone}</div>
                <div style={{ display:'flex',alignItems:'center',gap:8,fontSize:13,color:'#374151' }}>🕐 Hours: {h.hours}</div>
                <div style={{ display:'flex',alignItems:'center',gap:8,fontSize:13,color:'#374151' }}>🩸 Blood Bank: {h.bloodBank?'Yes':'No'}</div>
              </div>
              <div style={{ display:'flex',justifyContent:'space-between',alignItems:'center' }}>
                <span style={{ display:'inline-flex',alignItems:'center',gap:6,padding:'4px 12px',borderRadius:50,fontSize:12,fontWeight:600,background:h.status==='open'?'#e8f5e9':'#fde8e8',color:h.status==='open'?'#2e7d32':'#c0392b' }}>
                  <span style={{ width:7,height:7,borderRadius:'50%',background:h.status==='open'?'#27ae60':'#e74c3c',display:'inline-block' }}/>
                  {h.status==='open'?'Open Now':'Closed'}
                </span>
                <button style={{ fontSize:13,fontWeight:600,color:'#c0392b',background:'transparent',padding:'4px 8px' }}>Get Directions →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:900px){.hospitals-grid{grid-template-columns:repeat(2,1fr) !important;}}
        @media(max-width:580px){.hospitals-grid{grid-template-columns:1fr !important;}}
      `}</style>
    </section>
  );
}
