import { useState } from 'react';

export default function Contact({ onToast }) {
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const set = (k,v) => setForm(p=>({...p,[k]:v}));
  const inp = { width:'100%',padding:'12px 14px',border:'1.5px solid #e5e7eb',borderRadius:10,fontSize:14,fontFamily:'inherit',color:'#111827',outline:'none',background:'#fff' };

  const info = [
    { icon:'📞', label:'Phone',         value:'+233 302 000 123' },
    { icon:'✉️',  label:'Email',         value:'support@lifelink.com.gh' },
    { icon:'📍', label:'Address',       value:'PMB CT 418, Cantonments, Accra, Ghana' },
    { icon:'🕐', label:'Support Hours', value:'Mon–Fri: 8am–6pm | Emergency: 24/7' },
  ];

  return (
    <section id="contact" style={{ padding:'96px 0', background:'#f9fafb' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
        <div style={{ textAlign:'center', marginBottom:56 }}>
          <div style={{ fontSize:12,fontWeight:700,letterSpacing:2,textTransform:'uppercase',color:'#c0392b',marginBottom:12 }}>Get In Touch</div>
          <h2 style={{ fontFamily:'Poppins',fontSize:'clamp(28px,4vw,42px)',fontWeight:800,color:'#111827',marginBottom:14 }}>Contact Us</h2>
          <p style={{ fontSize:16,color:'#6b7280',maxWidth:500,margin:'0 auto',lineHeight:1.7 }}>Have a question or need support? Our team is available to help.</p>
        </div>
        <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:56,alignItems:'start' }} className="contact-grid">
          <div style={{ display:'flex',flexDirection:'column',gap:28 }}>
            {info.map((c,i)=>(
              <div key={i} style={{ display:'flex',gap:16,alignItems:'flex-start' }}>
                <div style={{ width:52,height:52,background:'#fde8e8',borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',fontSize:22,flexShrink:0 }}>{c.icon}</div>
                <div>
                  <div style={{ fontSize:12,fontWeight:700,textTransform:'uppercase',letterSpacing:0.5,color:'#9ca3af',marginBottom:4 }}>{c.label}</div>
                  <div style={{ fontSize:16,fontWeight:600,color:'#111827' }}>{c.value}</div>
                </div>
              </div>
            ))}
            <div style={{ background:'linear-gradient(135deg,#c0392b,#e74c3c)',borderRadius:16,padding:24,color:'#fff',marginTop:8 }}>
              <div style={{ fontWeight:700,fontSize:16,marginBottom:8 }}>🚨 Emergency Blood Hotline</div>
              <div style={{ fontSize:24,fontWeight:900,fontFamily:'Poppins' }}>999 / +233 302 000 123</div>
              <div style={{ fontSize:13,color:'rgba(255,255,255,0.8)',marginTop:4 }}>Available 24/7 for critical blood emergencies</div>
            </div>
          </div>

          <div style={{ background:'#fff',borderRadius:16,padding:36,boxShadow:'0 4px 24px rgba(0,0,0,0.08)' }}>
            <h3 style={{ fontFamily:'Poppins',fontWeight:700,fontSize:20,color:'#111827',marginBottom:24 }}>Send a Message</h3>
            <div style={{ marginBottom:16 }}>
              <label style={{ fontSize:13,fontWeight:600,color:'#374151',display:'block',marginBottom:6 }}>Your Name</label>
              <input style={inp} placeholder="Full name" value={form.name} onChange={e=>set('name',e.target.value)}/>
            </div>
            <div style={{ marginBottom:16 }}>
              <label style={{ fontSize:13,fontWeight:600,color:'#374151',display:'block',marginBottom:6 }}>Email Address</label>
              <input type="email" style={inp} placeholder="you@example.com" value={form.email} onChange={e=>set('email',e.target.value)}/>
            </div>
            <div style={{ marginBottom:20 }}>
              <label style={{ fontSize:13,fontWeight:600,color:'#374151',display:'block',marginBottom:6 }}>Message</label>
              <textarea style={{...inp,resize:'vertical',minHeight:120}} placeholder="Write your message here..." value={form.message} onChange={e=>set('message',e.target.value)}/>
            </div>
            <button onClick={()=>{ if(!form.name||!form.email||!form.message){onToast('Please fill all fields.','error');return;} onToast('Message sent! We will get back to you within 24 hours.'); setForm({name:'',email:'',message:''}); }}
              style={{ width:'100%',padding:14,background:'#c0392b',color:'#fff',borderRadius:50,fontWeight:700,fontSize:15,display:'flex',alignItems:'center',justifyContent:'center',gap:8,transition:'all 0.2s' }}
              onMouseEnter={e=>e.currentTarget.style.background='#96281b'}
              onMouseLeave={e=>e.currentTarget.style.background='#c0392b'}>
              📨 Send Message
            </button>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.contact-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
