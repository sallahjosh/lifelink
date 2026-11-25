import { AWARENESS } from '../data/data.js';

export default function Awareness() {
  return (
    <section id="awareness" style={{ padding:'96px 0', background:'#f9fafb' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
        <div style={{ textAlign:'center', marginBottom:56 }}>
          <div style={{ fontSize:12,fontWeight:700,letterSpacing:2,textTransform:'uppercase',color:'#c0392b',marginBottom:12 }}>Know More</div>
          <h2 style={{ fontFamily:'Poppins',fontSize:'clamp(28px,4vw,42px)',fontWeight:800,color:'#111827',marginBottom:14 }}>Blood Donation Awareness</h2>
          <p style={{ fontSize:16,color:'#6b7280',maxWidth:560,margin:'0 auto',lineHeight:1.7 }}>Understanding blood donation helps more people make the life-saving decision to give.</p>
        </div>
        <div style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:28 }} className="awareness-grid">
          {AWARENESS.map((a,i)=>(
            <div key={i} style={{ background:'#fff',borderRadius:16,overflow:'hidden',boxShadow:'0 4px 24px rgba(0,0,0,0.07)',transition:'transform 0.3s,box-shadow 0.3s' }}
              onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-6px)';e.currentTarget.style.boxShadow='0 20px 48px rgba(0,0,0,0.12)';}}
              onMouseLeave={e=>{e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='0 4px 24px rgba(0,0,0,0.07)';}}>
              <div style={{ height:180,background:a.bg,display:'flex',alignItems:'center',justifyContent:'center',fontSize:72 }}>{a.emoji}</div>
              <div style={{ padding:24 }}>
                <div style={{ fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:1,color:'#c0392b',marginBottom:8 }}>{a.tag}</div>
                <h3 style={{ fontWeight:700,fontSize:18,color:'#111827',marginBottom:10,lineHeight:1.4 }}>{a.title}</h3>
                <p style={{ fontSize:14,color:'#6b7280',lineHeight:1.7 }}>{a.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Blood compatibility table */}
        <div style={{ marginTop:56,background:'#fff',borderRadius:20,padding:'36px',boxShadow:'0 4px 24px rgba(0,0,0,0.07)' }}>
          <h3 style={{ fontFamily:'Poppins',fontWeight:700,fontSize:22,color:'#111827',marginBottom:6 }}>🔬 Blood Type Compatibility Quick Guide</h3>
          <p style={{ fontSize:14,color:'#6b7280',marginBottom:28 }}>Know which blood types can donate to and receive from each other.</p>
          <div style={{ overflowX:'auto' }}>
            <table style={{ width:'100%',borderCollapse:'collapse',fontSize:14 }}>
              <thead>
                <tr style={{ background:'#c0392b' }}>
                  {['Blood Type','Can Donate To','Can Receive From','Universal?'].map(h=>(
                    <th key={h} style={{ padding:'12px 16px',color:'#fff',fontWeight:600,textAlign:'left' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['A+', 'A+, AB+', 'A+, A-, O+, O-','No'],
                  ['A-', 'A+, A-, AB+, AB-', 'A-, O-','No'],
                  ['B+', 'B+, AB+', 'B+, B-, O+, O-','No'],
                  ['B-', 'B+, B-, AB+, AB-', 'B-, O-','No'],
                  ['AB+','AB+', 'All blood types','Universal Recipient'],
                  ['AB-','AB+, AB-', 'AB-, A-, B-, O-','No'],
                  ['O+', 'A+, B+, AB+, O+', 'O+, O-','No'],
                  ['O-', 'All blood types', 'O-','Universal Donor'],
                ].map((row,i)=>(
                  <tr key={i} style={{ background: i%2===0?'#fff':'#f9fafb' }}>
                    {row.map((cell,j)=>(
                      <td key={j} style={{ padding:'12px 16px',color: j===0?'#c0392b':j===3&&cell!=='No'?'#27ae60':'#374151', fontWeight: j===0||cell!=='No'?700:400,borderBottom:'1px solid #f3f4f6' }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.awareness-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
