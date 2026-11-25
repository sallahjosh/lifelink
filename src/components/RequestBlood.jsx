import { useState } from 'react';

export default function RequestBlood({ onSubmit }) {
  const [form, setForm] = useState({ name:'', phone:'', blood:'', hospital:'', urgency:'normal', notes:'', consent:false });
  const set = (k,v) => setForm(p => ({...p,[k]:v}));

  const inp = { width:'100%', padding:'12px 14px', border:'1.5px solid #e5e7eb', borderRadius:10, fontSize:14, fontFamily:'inherit', color:'#111827', outline:'none', background:'#fff' };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.blood || !form.hospital) { onSubmit(null, 'Please fill all required fields.'); return; }
    if (!form.consent) { onSubmit(null, 'Please accept the consent statement.'); return; }
    onSubmit(form);
    setForm({ name:'', phone:'', blood:'', hospital:'', urgency:'normal', notes:'', consent:false });
  };

  return (
    <section id="request" style={{ background:'linear-gradient(135deg,#c0392b,#922b21)', padding:'96px 0' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center' }} className="request-grid">

          {/* Info side */}
          <div>
            <div style={{ fontSize:12,fontWeight:700,letterSpacing:2,textTransform:'uppercase',color:'rgba(255,255,255,0.7)',marginBottom:12 }}>Need Blood?</div>
            <h2 style={{ fontFamily:'Poppins',fontSize:'clamp(28px,4vw,42px)',fontWeight:800,color:'#fff',marginBottom:16 }}>Request Blood for a Patient</h2>
            <p style={{ fontSize:17,color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:36 }}>
              Fill in the form and our system immediately alerts compatible donors and partner hospitals in your area.
            </p>
            <div style={{ display:'flex',flexDirection:'column',gap:18 }}>
              {[
                ['⚡','Instant donor alerts sent to compatible blood types'],
                ['📍','Location-based matching for nearby donors'],
                ['🛡️','All requests verified before donor details are shared'],
                ['🕐','24/7 emergency blood request support'],
              ].map(([icon,text],i) => (
                <div key={i} style={{ display:'flex',alignItems:'center',gap:14,color:'rgba(255,255,255,0.9)',fontSize:15 }}>
                  <div style={{ width:40,height:40,background:'rgba(255,255,255,0.15)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:18,flexShrink:0 }}>{icon}</div>
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Form side */}
          <div style={{ background:'#fff', borderRadius:20, padding:40, boxShadow:'0 24px 64px rgba(0,0,0,0.2)' }}>
            <h3 style={{ fontFamily:'Poppins',fontSize:22,fontWeight:700,color:'#111827',marginBottom:24 }}>🩸 Blood Request Form</h3>
            <form onSubmit={handleSubmit}>
              <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:14,marginBottom:14 }} className="form-row">
                <div>
                  <label style={{ fontSize:13,fontWeight:600,color:'#374151',display:'block',marginBottom:6 }}>Patient / Contact Name *</label>
                  <input style={inp} placeholder="Full name" value={form.name} onChange={e=>set('name',e.target.value)} required />
                </div>
                <div>
                  <label style={{ fontSize:13,fontWeight:600,color:'#374151',display:'block',marginBottom:6 }}>Phone Number *</label>
                  <input style={inp} placeholder="+233 ..." value={form.phone} onChange={e=>set('phone',e.target.value)} required />
                </div>
              </div>
              <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:14,marginBottom:14 }} className="form-row">
                <div>
                  <label style={{ fontSize:13,fontWeight:600,color:'#374151',display:'block',marginBottom:6 }}>Blood Group Required *</label>
                  <select style={inp} value={form.blood} onChange={e=>set('blood',e.target.value)} required>
                    <option value="">Select blood group</option>
                    {['A+','A-','B+','B-','AB+','AB-','O+','O-'].map(t=><option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ fontSize:13,fontWeight:600,color:'#374151',display:'block',marginBottom:6 }}>Hospital / Location *</label>
                  <input style={inp} placeholder="Hospital name or area" value={form.hospital} onChange={e=>set('hospital',e.target.value)} required />
                </div>
              </div>
              <div style={{ marginBottom:14 }}>
                <label style={{ fontSize:13,fontWeight:600,color:'#374151',display:'block',marginBottom:8 }}>Urgency Level</label>
                <div style={{ display:'flex',gap:10 }}>
                  {[['normal','Normal'],['urgent','Urgent'],['critical','Critical']].map(([val,label])=>(
                    <div key={val} onClick={()=>set('urgency',val)}
                      style={{ flex:1,padding:'10px',border:`1.5px solid ${form.urgency===val?'#c0392b':'#e5e7eb'}`,borderRadius:8,textAlign:'center',cursor:'pointer',fontSize:13,fontWeight:600,background:form.urgency===val?'#fde8e8':'#fff',color:form.urgency===val?'#c0392b':'#374151',transition:'all 0.2s' }}>
                      {label}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ marginBottom:14 }}>
                <label style={{ fontSize:13,fontWeight:600,color:'#374151',display:'block',marginBottom:6 }}>Additional Notes</label>
                <textarea style={{...inp,resize:'vertical',minHeight:70}} placeholder="Any extra information..." value={form.notes} onChange={e=>set('notes',e.target.value)}/>
              </div>
              <div style={{ display:'flex',alignItems:'flex-start',gap:10,fontSize:13,color:'#6b7280',marginBottom:20 }}>
                <input type="checkbox" id="req-consent" checked={form.consent} onChange={e=>set('consent',e.target.checked)} style={{ marginTop:3,accentColor:'#c0392b' }}/>
                <label htmlFor="req-consent">I consent to sharing this information with verified LifeLink donors and partner hospitals for the purpose of this blood request.</label>
              </div>
              <button type="submit" style={{ width:'100%',padding:14,background:'#c0392b',color:'#fff',borderRadius:50,fontWeight:700,fontSize:15,display:'flex',alignItems:'center',justifyContent:'center',gap:8,transition:'all 0.2s' }}
                onMouseEnter={e=>e.currentTarget.style.background='#96281b'}
                onMouseLeave={e=>e.currentTarget.style.background='#c0392b'}>
                📨 Submit Blood Request
              </button>
            </form>
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:900px){.request-grid{grid-template-columns:1fr !important;}}
        @media(max-width:600px){.form-row{grid-template-columns:1fr !important;}}
      `}</style>
    </section>
  );
}
