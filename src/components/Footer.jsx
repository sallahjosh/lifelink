export default function Footer() {
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior:'smooth' });
  const year = new Date().getFullYear();

  return (
    <footer style={{ background:'#111827', color:'#fff', padding:'72px 0 32px' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap:48, marginBottom:48 }} className="footer-grid">
          <div>
            <div style={{ display:'flex',alignItems:'center',gap:8,fontFamily:'Poppins',fontWeight:800,fontSize:22,marginBottom:14 }}>
              <span style={{ color:'#e74c3c',fontSize:24 }}>♥</span>
              <span style={{ color:'#e74c3c' }}>Life</span><span style={{ color:'#fff' }}>Link</span>
            </div>
            <p style={{ fontSize:14,color:'#9ca3af',lineHeight:1.7,maxWidth:280,marginBottom:20 }}>Connecting blood donors with patients in need across Ghana. Give Blood. Share Hope. Save Lives.</p>
            <div style={{ display:'flex',gap:10 }}>
              {['f','t','in','yt'].map((s,i)=>(
                <a key={i} href="#" style={{ width:36,height:36,background:'#374151',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',color:'#9ca3af',fontSize:13,transition:'all 0.2s',textDecoration:'none' }}
                  onMouseEnter={e=>{e.currentTarget.style.background='#c0392b';e.currentTarget.style.color='#fff';}}
                  onMouseLeave={e=>{e.currentTarget.style.background='#374151';e.currentTarget.style.color='#9ca3af';}}>
                  {s.toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {[
            { title:'Quick Links', items:[['home','Home'],['how-it-works','How It Works'],['donors','Find Donors'],['availability','Blood Availability'],['request','Request Blood']] },
            { title:'Information', items:[['awareness','Awareness'],['appreciation','Recognition'],['hospitals','Hospitals'],['faq','FAQs'],['privacy','Privacy Policy']] },
            { title:'Contact',     items:[['contact','Contact Us']] },
          ].map((col,i)=>(
            <div key={i}>
              <h4 style={{ fontSize:12,fontWeight:700,textTransform:'uppercase',letterSpacing:1,color:'#fff',marginBottom:20 }}>{col.title}</h4>
              <ul style={{ listStyle:'none',display:'flex',flexDirection:'column',gap:10 }}>
                {col.items.map(([id,label])=>(
                  <li key={id}><a onClick={()=>go(id)} href="#" style={{ fontSize:14,color:'#9ca3af',transition:'color 0.2s' }}
                    onMouseEnter={e=>e.target.style.color='#e74c3c'}
                    onMouseLeave={e=>e.target.style.color='#9ca3af'}>{label}</a></li>
                ))}
                {i===2&&(
                  <>
                    <li><a href="tel:+233302000123" style={{ fontSize:14,color:'#9ca3af' }}>📞 +233 302 000 123</a></li>
                    <li><a href="mailto:support@lifelink.com.gh" style={{ fontSize:14,color:'#9ca3af' }}>✉ support@lifelink.com.gh</a></li>
                    <li><span style={{ fontSize:14,color:'#e74c3c',fontWeight:600 }}>🚨 Emergency: 999</span></li>
                  </>
                )}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ borderTop:'1px solid #374151',paddingTop:32,display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:16 }}>
          <p style={{ fontSize:13,color:'#9ca3af' }}>© {year} LifeLink Ghana. All rights reserved. Compliant with Ghana Data Protection Act 2012.</p>
          <p style={{ fontSize:13,color:'#9ca3af' }}>Built with ♥ for Ghana · <em>Demo Version — not for clinical use</em></p>
        </div>
      </div>
      <style>{`@media(max-width:900px){.footer-grid{grid-template-columns:1fr 1fr !important;}} @media(max-width:580px){.footer-grid{grid-template-columns:1fr !important;}}`}</style>
    </footer>
  );
}
