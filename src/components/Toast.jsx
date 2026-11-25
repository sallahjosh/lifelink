import { useEffect } from 'react';

export default function Toast({ msg, type = 'success', onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 4000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <div style={{
        position: 'fixed', bottom: 28, right: 28, zIndex: 3000,
        background: type === 'error' ? '#c0392b' : '#111827',
        color: '#fff', padding: '14px 22px', borderRadius: 12,
        fontSize: 14, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 10,
        boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
        animation: 'toastIn 0.3s ease',
        maxWidth: 360,
      }}>
        <span style={{ fontSize: 18 }}>{type === 'error' ? '❌' : '✅'}</span>
        {msg}
        <button onClick={onClose} style={{ marginLeft: 8, background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', fontSize: 16 }}>✕</button>
      </div>
      <style>{`@keyframes toastIn { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }`}</style>
    </>
  );
}
