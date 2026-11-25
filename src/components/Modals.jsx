import { useState } from 'react';

const inp = { width:'100%', padding:'11px 14px', border:'1.5px solid #e5e7eb', borderRadius:10, fontSize:14, fontFamily:'inherit', color:'#111827', outline:'none', background:'#fff', marginBottom:14 };
const overlay = { position:'fixed', inset:0, background:'rgba(0,0,0,0.6)', zIndex:2000, display:'flex', alignItems:'center', justifyContent:'center', padding:24, backdropFilter:'blur(4px)' };
const modal = { background:'#fff', borderRadius:20, padding:40, maxWidth:500, width:'100%', maxHeight:'90vh', overflowY:'auto', position:'relative', animation:'modalIn 0.3s ease' };

export function LoginModal({ onClose, onSwitch }) {
  const [email, setEmail] = useState('');
  const [pass,  setPass]  = useState('');
  return (
    <div style={overlay} onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={modal}>
        <button onClick={onClose} style={{ position:'absolute', top:16, right:16, width:36, height:36, borderRadius:'50%', background:'#f3f4f6', border:'none', cursor:'pointer', fontSize:18, display:'flex', alignItems:'center', justifyContent:'center' }}>✕</button>
        <div style={{ fontSize:36, marginBottom:12 }}>👤</div>
        <h2 style={{ fontFamily:'Poppins', fontWeight:800, fontSize:24, color:'#111827', marginBottom:6 }}>Welcome Back</h2>
        <p style={{ fontSize:14, color:'#6b7280', marginBottom:24 }}>Log in to your LifeLink account</p>
        <label style={{ fontSize:13, fontWeight:600, color:'#374151', display:'block', marginBottom:6 }}>Email Address</label>
        <input type="email" style={inp} placeholder="you@example.com" value={email} onChange={e=>setEmail(e.target.value)} />
        <label style={{ fontSize:13, fontWeight:600, color:'#374151', display:'block', marginBottom:6 }}>Password</label>
        <input type="password" style={inp} placeholder="Enter your password" value={pass} onChange={e=>setPass(e.target.value)} />
        <button onClick={()=>{ alert('Demo mode: authentication not connected to a backend.'); onClose(); }}
          style={{ width:'100%', padding:13, background:'#c0392b', color:'#fff', borderRadius:50, fontWeight:700, fontSize:15, marginBottom:16, cursor:'pointer', border:'none' }}
          onMouseEnter={e=>e.currentTarget.style.background='#96281b'}
          onMouseLeave={e=>e.currentTarget.style.background='#c0392b'}>
          Log In
        </button>
        <p style={{ textAlign:'center', fontSize:14, color:'#6b7280' }}>
          No account?{' '}
          <a href="#" onClick={e=>{ e.preventDefault(); onSwitch(); }} style={{ color:'#c0392b', fontWeight:600 }}>Register as a Donor</a>
        </p>
      </div>
      <style>{`@keyframes modalIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }`}</style>
    </div>
  );
}

export function RegisterModal({ onClose, onSubmit }) {
  const [tab, setTab] = useState('donor');
  const [form, setForm] = useState({ name:'', email:'', phone:'', blood:'', region:'', age:'', gender:'', password:'', consent:false });
  const set = (k,v) => setForm(p=>({...p,[k]:v}));

  const handle = () => {
    if (!form.name||!form.email||!form.phone||!form.blood||!form.password) { alert('Please fill all required fields.'); return; }
    if (!form.consent) { alert('Please accept the consent statement to proceed.'); return; }
    onSubmit(form, tab);
    onClose();
  };

  return (
    <div style={overlay} onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={modal}>
        <button onClick={onClose} style={{ position:'absolute', top:16, right:16, width:36, height:36, borderRadius:'50%', background:'#f3f4f6', border:'none', cursor:'pointer', fontSize:18 }}>✕</button>
        <div style={{ fontSize:36, marginBottom:12 }}>♥</div>
        <h2 style={{ fontFamily:'Poppins', fontWeight:800, fontSize:24, color:'#111827', marginBottom:6 }}>Join LifeLink</h2>
        <p style={{ fontSize:14, color:'#6b7280', marginBottom:20 }}>Create your account and start saving lives</p>

        <div style={{ display:'flex', border:'1.5px solid #e5e7eb', borderRadius:10, overflow:'hidden', marginBottom:24 }}>
          {[['donor','🩸 Donor'],['recipient','👤 Recipient']].map(([val,label])=>(
            <div key={val} onClick={()=>setTab(val)}
              style={{ flex:1, padding:'10px', textAlign:'center', fontSize:14, fontWeight:600, cursor:'pointer', background:tab===val?'#c0392b':'#fff', color:tab===val?'#fff':'#6b7280', transition:'all 0.2s' }}>
              {label}
            </div>
          ))}
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
          <div>
            <label style={{ fontSize:13, fontWeight:600, color:'#374151', display:'block', marginBottom:5 }}>Full Name *</label>
            <input style={inp} placeholder="Full name" value={form.name} onChange={e=>set('name',e.target.value)} />
          </div>
          <div>
            <label style={{ fontSize:13, fontWeight:600, color:'#374151', display:'block', marginBottom:5 }}>Age</label>
            <input type="number" style={inp} placeholder="Age" value={form.age} onChange={e=>set('age',e.target.value)} />
          </div>
        </div>

        <label style={{ fontSize:13, fontWeight:600, color:'#374151', display:'block', marginBottom:5 }}>Email Address *</label>
        <input type="email" style={inp} placeholder="you@example.com" value={form.email} onChange={e=>set('email',e.target.value)} />

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
          <div>
            <label style={{ fontSize:13, fontWeight:600, color:'#374151', display:'block', marginBottom:5 }}>Phone *</label>
            <input style={inp} placeholder="+233 ..." value={form.phone} onChange={e=>set('phone',e.target.value)} />
          </div>
          <div>
            <label style={{ fontSize:13, fontWeight:600, color:'#374151', display:'block', marginBottom:5 }}>Blood Group *</label>
            <select style={inp} value={form.blood} onChange={e=>set('blood',e.target.value)}>
              <option value="">Select</option>
              {['A+','A-','B+','B-','AB+','AB-','O+','O-'].map(t=><option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
          <div>
            <label style={{ fontSize:13, fontWeight:600, color:'#374151', display:'block', marginBottom:5 }}>Region</label>
            <select style={inp} value={form.region} onChange={e=>set('region',e.target.value)}>
              <option value="">Select Region</option>
              {['Greater Accra','Ashanti','Northern','Central','Volta','Western','Eastern','Brong-Ahafo'].map(r=><option key={r} value={r}>{r}</option>)}
            </select>
          </div>
          <div>
            <label style={{ fontSize:13, fontWeight:600, color:'#374151', display:'block', marginBottom:5 }}>Gender</label>
            <select style={inp} value={form.gender} onChange={e=>set('gender',e.target.value)}>
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <label style={{ fontSize:13, fontWeight:600, color:'#374151', display:'block', marginBottom:5 }}>Password *</label>
        <input type="password" style={inp} placeholder="Create a password" value={form.password} onChange={e=>set('password',e.target.value)} />

        <div style={{ display:'flex', alignItems:'flex-start', gap:10, fontSize:13, color:'#6b7280', marginBottom:20, marginTop:4 }}>
          <input type="checkbox" id="reg-consent" checked={form.consent} onChange={e=>set('consent',e.target.checked)} style={{ marginTop:3, accentColor:'#c0392b' }}/>
          <label htmlFor="reg-consent">I consent to LifeLink collecting and using my personal and medical information in accordance with the Ghana Data Protection Act 2012.</label>
        </div>

        <button onClick={handle} style={{ width:'100%', padding:13, background:'#c0392b', color:'#fff', borderRadius:50, fontWeight:700, fontSize:15, cursor:'pointer', border:'none' }}
          onMouseEnter={e=>e.currentTarget.style.background='#96281b'}
          onMouseLeave={e=>e.currentTarget.style.background='#c0392b'}>
          Create Account
        </button>
      </div>
    </div>
  );
}

export function ContactDonorModal({ donor, onClose }) {
  const [name, setName]   = useState('');
  const [phone, setPhone] = useState('');
  const [msg,   setMsg]   = useState('');
  return (
    <div style={overlay} onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={modal}>
        <button onClick={onClose} style={{ position:'absolute', top:16, right:16, width:36, height:36, borderRadius:'50%', background:'#f3f4f6', border:'none', cursor:'pointer', fontSize:18 }}>✕</button>
        <h2 style={{ fontFamily:'Poppins', fontWeight:800, fontSize:22, color:'#111827', marginBottom:6 }}>Contact Donor</h2>
        <p style={{ fontSize:14, color:'#6b7280', marginBottom:20 }}>Send a blood request message to {donor.name}</p>

        <div style={{ background:'#fde8e8', borderRadius:12, padding:'14px 16px', marginBottom:24, display:'flex', alignItems:'center', gap:14 }}>
          <div style={{ width:48, height:48, borderRadius:'50%', background:'#c0392b', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:800, fontSize:16, flexShrink:0 }}>{donor.initials}</div>
          <div>
            <div style={{ fontWeight:700, fontSize:15, color:'#111827' }}>{donor.name}</div>
            <div style={{ fontSize:13, color:'#9ca3af' }}>{donor.blood} · {donor.location}</div>
          </div>
        </div>

        <label style={{ fontSize:13, fontWeight:600, color:'#374151', display:'block', marginBottom:5 }}>Your Name</label>
        <input style={inp} placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} />
        <label style={{ fontSize:13, fontWeight:600, color:'#374151', display:'block', marginBottom:5 }}>Phone Number</label>
        <input style={inp} placeholder="+233 ..." value={phone} onChange={e=>setPhone(e.target.value)} />
        <label style={{ fontSize:13, fontWeight:600, color:'#374151', display:'block', marginBottom:5 }}>Message</label>
        <textarea style={{...inp, resize:'vertical', minHeight:100}} placeholder="Describe the emergency and blood needed..." value={msg} onChange={e=>setMsg(e.target.value)}/>

        <button onClick={()=>{ alert(`Request sent to ${donor.name}. They will contact you shortly.`); onClose(); }}
          style={{ width:'100%', padding:13, background:'#c0392b', color:'#fff', borderRadius:50, fontWeight:700, fontSize:15, cursor:'pointer', border:'none', marginTop:4 }}
          onMouseEnter={e=>e.currentTarget.style.background='#96281b'}
          onMouseLeave={e=>e.currentTarget.style.background='#c0392b'}>
          📨 Send Request
        </button>
      </div>
    </div>
  );
}
