import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [bg, setBg] = useState('');
  const [region, setRegion] = useState('');
  const [name, setName] = useState('');

  const regions = ['Greater Accra','Ashanti','Northern','Central','Volta','Western','Eastern','Brong-Ahafo'];
  const bloodGroups = ['A+','A-','B+','B-','AB+','AB-','O+','O-'];

  const handleSearch = () => {
    onSearch({ bg, region, name });
    document.getElementById('donors')?.scrollIntoView({ behavior: 'smooth' });
  };

  const inp = { padding:'11px 14px', border:'1.5px solid #e5e7eb', borderRadius:10, fontSize:14, color:'#111827', outline:'none', width:'100%', fontFamily:'inherit', background:'#fff' };

  return (
    <section style={{ background: '#f9fafb', padding: '40px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', padding: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'Poppins', fontWeight: 700, fontSize: 20, color: '#111827', marginBottom: 24 }}>
            🔍 Find a Blood Donor
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr auto', gap: 16, alignItems: 'end' }} className="search-form">
            <div>
              <label style={{ fontSize: 13, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>Blood Group</label>
              <select value={bg} onChange={e => setBg(e.target.value)} style={inp}>
                <option value="">All Blood Groups</option>
                {bloodGroups.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label style={{ fontSize: 13, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>Region</label>
              <select value={region} onChange={e => setRegion(e.target.value)} style={inp}>
                <option value="">All Regions</option>
                {regions.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>
            <div>
              <label style={{ fontSize: 13, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>Donor Name</label>
              <input value={name} onChange={e => setName(e.target.value)} placeholder="Search by name..." style={inp}
                onKeyDown={e => e.key === 'Enter' && handleSearch()} />
            </div>
            <button onClick={handleSearch} style={{ padding:'12px 28px', background:'#c0392b', color:'#fff', borderRadius:10, fontWeight:700, fontSize:14, whiteSpace:'nowrap', transition:'all 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background='#96281b'}
              onMouseLeave={e => e.currentTarget.style.background='#c0392b'}>
              🔍 Search
            </button>
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:768px){ .search-form{grid-template-columns:1fr !important;} }
      `}</style>
    </section>
  );
}
