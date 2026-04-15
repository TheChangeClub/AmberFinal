"use client";
import { useState } from "react";

export default function AddPage() {
  const [formData, setFormData] = useState({
    brand_name: "",
    variant: "",
    origin: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/cigarettes", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    if (res.ok) window.location.href = "/";
  };

  return (
    <main style={{ padding: "60px", maxWidth: "500px" }}>
      <h1>Add to Humidor</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <input
          placeholder="Brand"
          onChange={(e) =>
            setFormData({ ...formData, brand_name: e.target.value })
          }
          style={inputStyle}
        />
        <input
          placeholder="Variant"
          onChange={(e) =>
            setFormData({ ...formData, variant: e.target.value })
          }
          style={inputStyle}
        />
        <button
          type="submit"
          style={{
            padding: "15px",
            background: "#ffbf00",
            color: "#000",
            fontWeight: "bold",
            border: "none",
          }}
        >
          SAVE
        </button>
      </form>
    </main>
  );
}

const inputStyle = {
  padding: "15px",
  background: "#111",
  border: "1px solid #333",
  color: "#fff",
};
