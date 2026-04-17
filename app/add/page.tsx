"use client";
export default function AddPage() {
  return (
    <div className="max-w-md">
      <h1 className="text-[#ffbf00] text-4xl font-black mb-10 uppercase italic">
        Add to Humidor
      </h1>
      <form className="flex flex-col gap-4">
        <input
          placeholder="BRAND"
          className="bg-zinc-900 border border-zinc-800 p-4 text-white uppercase font-bold tracking-widest"
        />
        <input
          placeholder="VARIANT"
          className="bg-zinc-900 border border-zinc-800 p-4 text-white uppercase font-bold tracking-widest"
        />
        <button className="bg-[#ffbf00] text-black font-black py-4 uppercase tracking-widest mt-4">
          SAVE TO COLLECTION
        </button>
      </form>
    </div>
  );
}
