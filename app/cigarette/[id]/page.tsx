export const dynamic = 'force-dynamic';
import { getCigaretteById } from '@/lib/data'; // Make sure this exists

export default async function CigarettePage({ params }: { params: { id: string } }) {
  // OLD MOCK WAY (Delete this):
  // const cigarette = humidorData.find(c => c.id === params.id);

  // NEW DATABASE WAY:
  const cigarette = await getCigaretteById(params.id);

  if (!cigarette) {
    return (
      <main style={{ backgroundColor: '#000', color: '#ffbf00', height: '100vh', padding: '20px' }}>
        <h1>Blend not found</h1>
        <p>Searching for ID: {params.id}</p>
      </main>
    );
  }

  return (
    <main>
      <h1>{cigarette.brand_name} {cigarette.variant}</h1>
      <p>Origin: {cigarette.origin}</p>
      {/* ... the rest of your UI */}
    </main>
  );
}