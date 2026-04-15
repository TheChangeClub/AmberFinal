import { getCigaretteById } from "@/lib/data";

export default async function CigarettePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // CRITICAL: You MUST await params in Next 15/16
  const { id } = await params;
  const cigarette = await getCigaretteById(id);

  if (!cigarette)
    return (
      <main style={{ padding: "40px" }}>
        <h1>Blend Not Found</h1>
      </main>
    );

  return (
    <main style={{ padding: "60px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "4rem", margin: 0, fontWeight: "900" }}>
        {cigarette.brand_name}
      </h1>
      <p style={{ fontSize: "1.5rem", opacity: 0.5 }}>{cigarette.variant}</p>

      <div
        style={{
          marginTop: "60px",
          borderTop: "1px solid #222",
          paddingTop: "40px",
        }}
      >
        <p>
          <strong>Blend:</strong> {cigarette.blend_type}
        </p>
        <p>
          <strong>Origin:</strong> {cigarette.origin}
        </p>
        <p>
          <strong>Menthol:</strong> {cigarette.is_menthol ? "Yes" : "No"}
        </p>
      </div>

      {/* Star Rating Section */}
      <div
        style={{
          marginTop: "40px",
          padding: "30px",
          border: "1px solid #ffbf00",
        }}
      >
        <h3>Submit 0.5-Step Review</h3>
        <input
          type="number"
          step="0.5"
          min="0"
          max="5"
          placeholder="0.0"
          style={{
            padding: "10px",
            background: "none",
            border: "1px solid #ffbf00",
            color: "#ffbf00",
            width: "80px",
          }}
        />
        <button
          style={{
            marginLeft: "10px",
            padding: "10px 20px",
            backgroundColor: "#ffbf00",
            color: "#000",
            border: "none",
            fontWeight: "bold",
          }}
        >
          POST
        </button>
      </div>
    </main>
  );
}
