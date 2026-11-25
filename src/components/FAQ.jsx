import { useState } from 'react';
import { FAQS } from '../data/data.js';

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" style={{ padding:'96px 0', background:'#fff' }}>
      <div style={{ maxWidth:800, margin:'0 auto', padding:'0 24px' }}>
        <div style={{ textAlign:'center', marginBottom:56 }}>
          <div style={{ fontSize:12,fontWeight:700,letterSpacing:2,textTransform:'uppercase',color:'#c0392b',marginBottom:12 }}>FAQs</div>
          <h2 style={{ fontFamily:'Poppins',fontSize:'clamp(28px,4vw,42px)',fontWeight:800,color:'#111827',marginBottom:14 }}>Frequently Asked Questions</h2>
          <p style={{ fontSize:16,color:'#6b7280',lineHeight:1.7 }}>Everything you need to know about donating and requesting blood on LifeLink.</p>
        </div>
        <div style={{ display:'flex',flexDirection:'column',gap:12 }}>
          {FAQS.map((faq,i)=>(
            <div key={i} style={{ background:'#fff',borderRadius:12,overflow:'hidden',boxShadow:'0 2px 10px rgba(0,0,0,0.06)',border:'1px solid #f3f4f6' }}>
              <div onClick={()=>setOpen(open===i?null:i)}
                style={{ padding:'20px 24px',display:'flex',justifyContent:'space-between',alignItems:'center',cursor:'pointer',fontWeight:600,fontSize:16,color:'#111827',background:open===i?'#fde8e8':'#fff',transition:'background 0.2s' }}>
                {faq.q}
                <span style={{ color:'#c0392b',fontSize:18,transition:'transform 0.3s',transform:open===i?'rotate(180deg)':'rotate(0)',flexShrink:0,marginLeft:12 }}>⌄</span>
              </div>
              <div style={{ maxHeight:open===i?300:0,overflow:'hidden',transition:'max-height 0.4s ease',padding:open===i?'0 24px 20px':0,fontSize:15,color:'#6b7280',lineHeight:1.7 }}>
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
