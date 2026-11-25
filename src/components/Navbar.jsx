import { useState, useEffect } from 'react';

export default function Navbar({ onLogin, onRegister }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (id) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };

  const links = [
    { label: 'Home',             id: 'home'         },
    { label: 'How It Works',     id: 'how-it-works' },
    { label: 'Find Donors',      id: 'donors'       },
    { label: 'Blood Availability',id: 'availability'},
    { label: 'Hospitals',        id: 'hospitals'    },
    { label: 'Contact',          id: 'contact'      },
  ];

  return (
    <>
      <nav style={{
        position:'fixed',top:0,left:0,right:0,zIndex:1000,
        background: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.95)',
        backdropFilter:'blur(12px)',
        borderBottom:'1px solid #f3f4f6',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
        transition:'all 0.3s',
      }}>
        <div style={{ maxWidth:1200,margin:'0 auto',padding:'0 24px',height:70,display:'flex',alignItems:'center',justifyContent:'space-between' }}>
          {/* Logo */}
          <div onClick={() => go('home')} style={{ display:'flex',alignItems:'center',gap:8,cursor:'pointer',fontFamily:'Poppins',fontWeight:800,fontSize:22 }}>
            <span style={{ color:'#c0392b',fontSize:26 }}>♥</span>
            <span style={{ color:'#c0392b' }}>Life</span><span style={{ color:'#111827' }}>Link</span>
          </div>

          {/* Desktop links */}
          <div style={{ display:'flex',alignItems:'center',gap:28 }} className="nav-desktop-links">
            {links.map(l => (
              <a key={l.id} onClick={() => go(l.id)} href="#" style={{ fontSize:14,fontWeight:500,color:'#374151',transition:'color 0.2s' }}
                onMouseEnter={e => e.target.style.color='#c0392b'}
                onMouseLeave={e => e.target.style.color='#374151'}>
                {l.label}
              </a>
            ))}
          </div>

          {/* Search + actions */}
          <div style={{ display:'flex',alignItems:'center',gap:10 }}>
            <div style={{ display:'flex',alignItems:'center',background:'#f3f4f6',borderRadius:50,padding:'8px 14px',gap:6 }}>
              <span style={{ color:'#9ca3af',fontSize:13 }}>🔍</span>
              <input
                value={search} onChange={e => setSearch(e.target.value)}
                onKeyDown={e => e.key==='Enter' && go('donors')}
                placeholder="Search donors..."
                style={{ border:'none',background:'transparent',outline:'none',fontSize:13,width:130,color:'#111827' }}
              />
            </div>
            <button onClick={onLogin} style={{ padding:'9px 18px',borderRadius:50,border:'2px solid #c0392b',background:'transparent',color:'#c0392b',fontWeight:600,fontSize:13,transition:'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background='#c0392b'; e.currentTarget.style.color='#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='#c0392b'; }}>
              Log In
            </button>
            <button onClick={onRegister} style={{ padding:'9px 18px',borderRadius:50,background:'#c0392b',color:'#fff',fontWeight:600,fontSize:13,transition:'all 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background='#96281b'}
              onMouseLeave={e => e.currentTarget.style.background='#c0392b'}>
              ♥ Become a Donor
            </button>
            {/* Hamburger */}
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ display:'none',flexDirection:'column',gap:5,background:'transparent',padding:4 }} className="hamburger">
              <span style={{ width:22,height:2,background:'#374151',borderRadius:2,display:'block' }}/>
              <span style={{ width:22,height:2,background:'#374151',borderRadius:2,display:'block' }}/>
              <span style={{ width:22,height:2,background:'#374151',borderRadius:2,display:'block' }}/>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ position:'fixed',top:70,left:0,right:0,background:'#fff',borderBottom:'1px solid #f3f4f6',padding:'16px 24px',zIndex:999,display:'flex',flexDirection:'column',gap:12 }}>
          {links.map(l => (
            <a key={l.id} onClick={() => go(l.id)} href="#" style={{ fontSize:15,fontWeight:500,color:'#374151',padding:'8px 0',borderBottom:'1px solid #f3f4f6' }}>{l.label}</a>
          ))}
          <button onClick={() => { setMenuOpen(false); onRegister(); }} style={{ marginTop:8,padding:'12px',borderRadius:50,background:'#c0392b',color:'#fff',fontWeight:700,fontSize:14 }}>
            ♥ Become a Donor
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop-links { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
