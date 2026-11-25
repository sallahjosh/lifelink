export default function Privacy() {
  const items = [
    { icon:'🔒', title:'Secure Authentication',    desc:'All accounts are protected with secure login. Role-based access ensures only authorised users see sensitive data.' },
    { icon:'🛡️', title:'Medical Data Privacy',      desc:'Donor and recipient medical histories are only accessible to authorised healthcare professionals for legitimate purposes.' },
    { icon:'📄', title:'Explicit Consent',          desc:'We collect and share your information only with your explicit consent. You can withdraw consent at any time.' },
    { icon:'✏️', title:'Your Data Rights',          desc:'You can update, correct, or request deletion of your personal information at any time through your account settings.' },
  ];
  return (
    <section id="privacy" style={{ padding:'96px 0', background:'#fff' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
        <div style={{ display:'flex',gap:64,alignItems:'center' }} className="privacy-inner">
          <div style={{ flex:1 }}>
            <div style={{ fontSize:12,fontWeight:700,letterSpacing:2,textTransform:'uppercase',color:'#c0392b',marginBottom:12 }}>Your Rights</div>
            <h2 style={{ fontFamily:'Poppins',fontSize:'clamp(28px,4vw,38px)',fontWeight:800,color:'#111827',marginBottom:14 }}>Privacy & Data Protection</h2>
            <p style={{ fontSize:16,color:'#6b7280',lineHeight:1.7,marginBottom:32 }}>LifeLink is committed to protecting your personal and medical information in full compliance with the <strong>Ghana Data Protection Act 2012</strong>.</p>
            <div style={{ display:'flex',flexDirection:'column',gap:20 }}>
              {items.map((p,i)=>(
                <div key={i} style={{ display:'flex',gap:16,alignItems:'flex-start' }}>
                  <div style={{ width:48,height:48,background:'#fde8e8',borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',fontSize:22,flexShrink:0 }}>{p.icon}</div>
                  <div>
                    <div style={{ fontWeight:700,fontSize:15,color:'#111827',marginBottom:4 }}>{p.title}</div>
                    <div style={{ fontSize:14,color:'#6b7280',lineHeight:1.6 }}>{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ flex:1 }}>
            <div style={{ background:'linear-gradient(135deg,#111827,#1f2937)',borderRadius:20,padding:40,color:'#fff' }}>
              <div style={{ fontSize:40,marginBottom:16 }}>🔐</div>
              <h3 style={{ fontFamily:'Poppins',fontWeight:700,fontSize:22,marginBottom:16 }}>Data Protection Promise</h3>
              {['Your blood type and medical data is encrypted at rest and in transit.','Only verified healthcare professionals can access medical histories.','You receive an email notification whenever your data is accessed.','You can download or delete your data at any time.','We never sell your data to third parties.','Strict role-based access controls are enforced at all levels.'].map((item,i)=>(
                <div key={i} style={{ display:'flex',gap:12,alignItems:'flex-start',marginBottom:14,fontSize:14,color:'rgba(255,255,255,0.85)' }}>
                  <span style={{ color:'#2ecc71',flexShrink:0,fontSize:16 }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.privacy-inner{flex-direction:column !important;}}`}</style>
    </section>
  );
}
