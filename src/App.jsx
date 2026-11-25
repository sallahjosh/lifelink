import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import SearchBar from './components/SearchBar.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Donors from './components/Donors.jsx';
import BloodAvailability from './components/BloodAvailability.jsx';
import RequestBlood from './components/RequestBlood.jsx';
import Awareness from './components/Awareness.jsx';
import Appreciation from './components/Appreciation.jsx';
import Hospitals from './components/Hospitals.jsx';
import FAQ from './components/FAQ.jsx';
import Privacy from './components/Privacy.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Toast from './components/Toast.jsx';
import { LoginModal, RegisterModal, ContactDonorModal } from './components/Modals.jsx';

export default function App() {
  const [showLogin,    setShowLogin]    = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [contactDonor, setContactDonor] = useState(null);
  const [toast,        setToast]        = useState(null);
  const [filters,      setFilters]      = useState({ bg:'', region:'', name:'' });

  const showToast = (msg, type = 'success') => setToast({ msg, type });

  const handleRequestSubmit = (form, errMsg) => {
    if (!form) { showToast(errMsg || 'Please fill all required fields.', 'error'); return; }
    showToast('Blood request submitted! Matching donors are being alerted. 🩸');
  };

  const handleRegister = (form, role) => {
    showToast(`Welcome to LifeLink, ${form.name}! Your ${role} account is under review. ✓`);
  };

  const scrollToRequest = () => document.getElementById('request')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navbar
        onLogin={() => setShowLogin(true)}
        onRegister={() => setShowRegister(true)}
      />

      <Hero
        onRegister={() => setShowRegister(true)}
        onRequest={scrollToRequest}
      />

      <SearchBar onSearch={setFilters} />

      <HowItWorks />

      <Donors filters={filters} onContact={setContactDonor} />

      <BloodAvailability />

      <RequestBlood onSubmit={handleRequestSubmit} />

      <Awareness />

      <Appreciation />

      <Hospitals />

      <FAQ />

      <Privacy />

      <Contact onToast={showToast} />

      {/* CTA Banner */}
      <section style={{ background:'linear-gradient(135deg,#111827,#1f2937)', padding:'80px 0', textAlign:'center' }}>
        <div style={{ maxWidth:700, margin:'0 auto', padding:'0 24px' }}>
          <div style={{ fontSize:48, marginBottom:16 }}>🩸</div>
          <h2 style={{ fontFamily:'Poppins', fontSize:'clamp(28px,4vw,46px)', fontWeight:900, color:'#fff', marginBottom:14 }}>
            A Link Between Giving and Living.
          </h2>
          <p style={{ fontSize:18, color:'#9ca3af', marginBottom:40, lineHeight:1.7 }}>
            Join thousands of Ghanaians who have already registered on LifeLink. Your blood could save a life today.
          </p>
          <div style={{ display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap' }}>
            <button onClick={() => setShowRegister(true)}
              style={{ padding:'15px 36px', background:'#c0392b', color:'#fff', borderRadius:50, fontWeight:700, fontSize:16, border:'none', cursor:'pointer', transition:'all 0.2s' }}
              onMouseEnter={e=>e.currentTarget.style.background='#96281b'}
              onMouseLeave={e=>e.currentTarget.style.background='#c0392b'}>
              ♥ Become a Donor
            </button>
            <button onClick={scrollToRequest}
              style={{ padding:'15px 36px', background:'transparent', color:'#9ca3af', borderRadius:50, fontWeight:600, fontSize:16, border:'2px solid #374151', cursor:'pointer', transition:'all 0.2s' }}
              onMouseEnter={e=>{ e.currentTarget.style.borderColor='#c0392b'; e.currentTarget.style.color='#c0392b'; }}
              onMouseLeave={e=>{ e.currentTarget.style.borderColor='#374151'; e.currentTarget.style.color='#9ca3af'; }}>
              🩸 Request Blood
            </button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Modals */}
      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onSwitch={() => { setShowLogin(false); setShowRegister(true); }}
        />
      )}
      {showRegister && (
        <RegisterModal
          onClose={() => setShowRegister(false)}
          onSubmit={handleRegister}
        />
      )}
      {contactDonor && (
        <ContactDonorModal
          donor={contactDonor}
          onClose={() => setContactDonor(null)}
        />
      )}

      {/* Toast */}
      {toast && (
        <Toast msg={toast.msg} type={toast.type} onClose={() => setToast(null)} />
      )}
    </div>
  );
}
