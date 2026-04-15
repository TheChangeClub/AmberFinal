"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function AddCigarette() {
  const [formData, setFormData] = useState({ brand_name: '', variant: '', origin: '', blend_type: 'Virginia', is_menthol: false });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/cigarettes', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      alert("Added to Humidor!");
      window.location.href = "/";
    }
  };

  return (
    <main style={{ backgroundColor: '#000', color: '#ffbf00', minHeight: '100vh', padding: '40px', fontFamily: 'serif' }}>
      <Link href="/" style={{ color: '#888', textDecoration: 'none' }}>← Back</Link>
      <h1 style={{ fontSize: '2.5rem', margin: '20px 0' }}>Add New Blend</h1>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '400px' }}>
        <input placeholder="Brand (e.g., Marlboro)" style={inputStyle} onChange={e => setFormData({...formData, brand_name: e.target.value})} required />
        <input placeholder="Variant (e.g., Red)" style={inputStyle} onChange={e => setFormData({...formData, variant: e.target.value})} required />
        <input placeholder="Country" style={inputStyle} onChange={e => setFormData({...formData, origin: e.target.value})} />
        
        <select style={inputStyle} onChange={e => setFormData({...formData, blend_type: e.target.value})}>
          <option value="Virginia">Virginia</option>
          <option value="American Blend">American Blend</option>
          <option value="Burley">Burley</option>
        </select>

        <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input type="checkbox" onChange={e => setFormData({...formData, is_menthol: e.target.checked})} />
          Menthol?
        </label>

        <button type="submit" style={{ backgroundColor: '#ffbf00', color: '#000', padding: '15px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>
          SAVE TO DATABASE
        </button>
      </form>
    </main>
  );
}

const inputStyle = { padding: '12px', backgroundColor: '#111', border: '1px solid #333', color: '#fff' };