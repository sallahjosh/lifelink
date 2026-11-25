import { useState } from 'react';
import { DONORS } from '../data/data.js';

function DonorCard({ donor, onContact }) {
  const [hovered, setHovered] = useState(false);
  const colors = ['#c0392b','#8e44ad','#2980b9','#27ae60','#d35400','#16a085'];
  const color = colors[donor.id % colors.length];

  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background:'#fff', borderRadius:16, overflow:'hidden', boxShadow: hovered ? '0 20px 48px rgba(0,0,0,0.14)' : '0 4px 24px rgba(0,0,0,0.08)', transform: hovered ? 'translateY(-6px)' : 'translateY(0)', transition:'all 0.3s' }}>
      {/* Header */}
      <div style={{ background:`linear-gradient(135deg,${color},${color}cc)`, padding:'24px 20px', display:'flex', alignItems:'center', gap:14 }}>
        <div style={{ width:56,height:56,borderRadius:'50%',background:'rgba(255,255,255,0.25)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Poppins',fontWeight:800,fontSize:20,color:'#fff',border:'2px solid rgba(255,255,255,0.4)',flexShrink:0 }}>
          {donor.initials}
        </div>
        <div>
          <div style={{ fontWeight:700,fontSize:16,color:'#fff' }}>{donor.name}</div>
          <div style={{ fontSize:12,color:'rgba(255,255,255,0.8)',marginTop:2 }}>📍 {donor.location}</div>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding:20 }}>
        <div style={{ display:'flex',gap:8,flexWrap:'wrap',marginBottom:16 }}>
          <span style={{ background:'#fde8e8',color:'#c0392b',padding:'4px 12px',borderRadius:50,fontSize:14,fontWeight:800 }}>{donor.blood}</span>
          {donor.verified && <span style={{ background:'#e8f5e9',color:'#2e7d32',padding:'4px 12px',borderRadius:50,fontSize:12,fontWeight:600 }}>✓ Verified</span>}
          <span style={{ background:'#fff3e0',color:'#e65100',padding:'4px 12px',borderRadius:50,fontSize:12,fontWeight:600 }}>🩸 {donor.donations} donations</span>
        </div>

        <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginBottom:16 }}>
          {[['Age', donor.age+' years'],['Gender',donor.gender],['Last Donation',donor.lastDonation],['Status', donor.available ? '● Available' : '● Unavailable']].map(([label,val],i) => (
            <div key={i}>
              <div style={{ fontSize:11,color:'#9ca3af',fontWeight:600,textTransform:'uppercase',letterSpacing:0.5 }}>{label}</div>
              <div style={{ fontSize:14,fontWeight:600,color: label==='Status' ? (donor.available ? '#27ae60' : '#e74c3c') : '#111827',marginTop:2 }}>{val}</div>
            </div>
          ))}
        </div>

        <div style={{ display:'flex',gap:8 }}>
          <button onClick={() => donor.available && onContact(donor)}
            style={{ flex:1,padding:'10px',borderRadius:8,fontSize:13,fontWeight:600,background: donor.available ? '#c0392b' : '#e5e7eb',color: donor.available ? '#fff' : '#9ca3af',cursor: donor.available ? 'pointer' : 'not-allowed',transition:'all 0.2s' }}
            onMouseEnter={e => donor.available && (e.currentTarget.style.background='#96281b')}
            onMouseLeave={e => donor.available && (e.currentTarget.style.background='#c0392b')}>
            ✉ Contact
          </button>
          <button style={{ flex:1,padding:'10px',borderRadius:8,fontSize:13,fontWeight:600,background:'#f3f4f6',color:'#374151',transition:'all 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.background='#e5e7eb'}
            onMouseLeave={e => e.currentTarget.style.background='#f3f4f6'}>
            👁 Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Donors({ filters, onContact }) {
  const filtered = DONORS.filter(d => {
    if (filters.bg && d.blood !== filters.bg) return false;
    if (filters.region && !d.location.includes(filters.region)) return false;
    if (filters.name && !d.name.toLowerCase().includes(filters.name.toLowerCase())) return false;
    return true;
  });

  return (
    <section id="donors" style={{ padding:'96px 0', background:'#f9fafb' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
        <div style={{ display:'flex',justifyContent:'space-between',alignItems:'flex-end',flexWrap:'wrap',gap:16,marginBottom:48 }}>
          <div>
            <div style={{ fontSize:12,fontWeight:700,letterSpacing:2,textTransform:'uppercase',color:'#c0392b',marginBottom:10 }}>Our Community</div>
            <h2 style={{ fontFamily:'Poppins',fontSize:'clamp(26px,3.5vw,38px)',fontWeight:800,color:'#111827',marginBottom:8 }}>Available Donors</h2>
            <p style={{ fontSize:16,color:'#6b7280',maxWidth:520 }}>Verified volunteers ready to help. Contact a donor directly or submit a blood request.</p>
          </div>
          <span style={{ fontSize:14,color:'#6b7280',background:'#fff',padding:'8px 16px',borderRadius:50,border:'1px solid #e5e7eb' }}>{filtered.length} donor{filtered.length!==1?'s':''} found</span>
        </div>

        {filtered.length > 0 ? (
          <div style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24 }} className="donors-grid">
            {filtered.map(d => <DonorCard key={d.id} donor={d} onContact={onContact} />)}
          </div>
        ) : (
          <div style={{ textAlign:'center',padding:'80px 0',color:'#9ca3af' }}>
            <div style={{ fontSize:64,marginBottom:16 }}>🔍</div>
            <div style={{ fontSize:20,fontWeight:600,color:'#374151',marginBottom:8 }}>No donors found</div>
            <p>Try adjusting your search filters above</p>
          </div>
        )}
      </div>
      <style>{`
        @media(max-width:900px){.donors-grid{grid-template-columns:repeat(2,1fr) !important;}}
        @media(max-width:580px){.donors-grid{grid-template-columns:1fr !important;}}
      `}</style>
    </section>
  );
}
