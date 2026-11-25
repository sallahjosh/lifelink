export default function HowItWorks() {
  const steps = [
    { icon: '👤', num: 1, title: 'Register',    desc: 'Create your donor or recipient profile in minutes with your personal and medical details.' },
    { icon: '🩺', num: 2, title: 'Fit Check',   desc: 'Complete a one-minute eligibility check to confirm you are ready and safe to donate.' },
    { icon: '🔍', num: 3, title: 'Get Matched', desc: 'Our system matches blood requests with compatible donors in your area instantly.' },
    { icon: '🏥', num: 4, title: 'Save a Life', desc: 'Donate at a partner facility and receive recognition on our community donor wall.' },
  ];
  return (
    <section id="how-it-works" style={{ padding: '96px 0', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#c0392b', marginBottom: 12 }}>Simple Process</div>
          <h2 style={{ fontFamily: 'Poppins', fontSize: 'clamp(28px,4vw,42px)', fontWeight: 800, color: '#111827', marginBottom: 16 }}>How LifeLink Works</h2>
          <p style={{ fontSize: 17, color: '#6b7280', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>From registration to donation, every step is clear, safe, and rewarding.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32, position: 'relative' }} className="steps-grid">
          <div style={{ position: 'absolute', top: 40, left: '12.5%', right: '12.5%', height: 2, background: 'linear-gradient(to right,#c0392b,#e74c3c)', zIndex: 0 }} className="steps-line" />
          {steps.map(s => (
            <div key={s.num} style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <div style={{ position: 'relative', display: 'inline-block', marginBottom: 20 }}>
                <div style={{ width: 80, height: 80, background: 'linear-gradient(135deg,#c0392b,#e74c3c)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, margin: '0 auto', boxShadow: '0 8px 24px rgba(192,57,43,0.3)' }}>{s.icon}</div>
                <div style={{ position: 'absolute', top: -6, right: -6, width: 24, height: 24, background: '#111827', color: '#fff', borderRadius: '50%', fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.num}</div>
              </div>
              <h3 style={{ fontWeight: 700, fontSize: 17, color: '#111827', marginBottom: 8 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:768px){
          .steps-grid{grid-template-columns:1fr 1fr !important;}
          .steps-line{display:none !important;}
        }
        @media(max-width:480px){
          .steps-grid{grid-template-columns:1fr !important;}
        }
      `}</style>
    </section>
  );
}
