import { getCigaretteById } from '@/lib/data';

export default async function CigaretteDetail({ params }: { params: { id: string } }) {
  const cigarette = await getCigaretteById(params.id);

  if (!cigarette) return <div style={{color: 'white'}}>Blend not found</div>;

  return (
    <main style={{ backgroundColor: '#000', color: '#ffbf00', minHeight: '100vh', padding: '40px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '0' }}>{cigarette.brand_name}</h1>
        <h2 style={{ fontSize: '1.5rem', color: '#888' }}>{cigarette.variant}</h2>
        <hr style={{ borderColor: '#333', margin: '30px 0' }} />

        <h3>Rate this Blend</h3>
        <p style={{ color: '#666' }}>Increments of 0.5 stars allowed.</p>

        {/* This is a simple version - you can expand this into a full form later */}
        <div style={{ display: 'grid', gap: '15px', marginTop: '20px' }}>
          {['Taste', 'Smoothness', 'Aroma', 'Burn'].map((label) => (
            <div key={label} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #222', padding: '10px 0' }}>
              <span>{label}</span>
              <input type="number" step="0.5" min="0" max="5" defaultValue="0" style={{ background: 'none', border: '1px solid #ffbf00', color: '#ffbf00', width: '50px', textAlign: 'center' }} />
            </div>
          ))}
          <button style={{ backgroundColor: '#ffbf00', color: '#000', padding: '15px', fontWeight: 'bold', border: 'none', marginTop: '20px' }}>
            SUBMIT REVIEW
          </button>
        </div>
      </div>
    </main>
  );
}