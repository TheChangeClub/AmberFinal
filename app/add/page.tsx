"use client";
import { useRouter } from "next/navigation";

export default function AddPage() {
  const router = useRouter();

  async function handleSave(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    // This hits the Postgres DB via the API we fixed
    const res = await fetch("/api/review", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.ok) {
      router.push("/");
      router.refresh();
    }
  }

  return (
    <div className="max-w-lg mx-auto pt-20">
      <h1 className="text-[#FFB800] text-5xl font-black mb-2 uppercase italic tracking-tighter">
        Add to Humidor
      </h1>
      <p className="text-zinc-500 mb-10 uppercase text-[10px] tracking-[0.3em]">
        New Entry / Catalog
      </p>

      <form onSubmit={handleSave} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] text-zinc-600 uppercase font-bold tracking-widest ml-1">
            Brand
          </label>
          <input
            name="brand"
            placeholder="e.g. Marlboro"
            required
            className="bg-zinc-900/50 border border-zinc-800 p-4 text-white focus:border-[#FFB800] outline-none transition-all"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[10px] text-zinc-600 uppercase font-bold tracking-widest ml-1">
            Variant
          </label>
          <input
            name="variant"
            placeholder="e.g. Red"
            required
            className="bg-zinc-900/50 border border-zinc-800 p-4 text-white focus:border-[#FFB800] outline-none transition-all"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] text-zinc-600 uppercase font-bold tracking-widest ml-1">
              Blend
            </label>
            <input
              name="blend"
              placeholder="e.g. Virginia"
              className="bg-zinc-900/50 border border-zinc-800 p-4 text-white focus:border-[#FFB800] outline-none transition-all"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] text-zinc-600 uppercase font-bold tracking-widest ml-1">
              Origin
            </label>
            <input
              name="origin"
              placeholder="e.g. USA"
              className="bg-zinc-900/50 border border-zinc-800 p-4 text-white focus:border-[#FFB800] outline-none transition-all"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#FFB800] text-black font-black py-5 uppercase tracking-widest mt-6 hover:bg-white transition-all duration-300"
        >
          SAVE TO COLLECTION
        </button>
      </form>
    </div>
  );
}
