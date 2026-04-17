"use client";
import { useState } from "react";

const params = [
  "taste",
  "smoothness",
  "burn_quality",
  "aroma",
  "smoke_body",
  "packaging",
  "overall",
];

export default function CigarettePage() {
  const [ratings, setRatings] = useState(
    Object.fromEntries(params.map((p) => [p, 0.0])),
  );

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-6xl font-black text-[#ffbf00] mb-2 uppercase">
        Gold Flake
      </h1>
      <p className="text-zinc-500 mb-10 uppercase tracking-widest">
        Honeydew • Virginia • India
      </p>

      <div className="bg-[#0a0a0a] border border-zinc-900 p-8 rounded-sm">
        <h3 className="text-[#ffbf00] font-bold uppercase tracking-widest mb-8 text-sm">
          Submit 0.5-Step Review
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
          {params.map((p) => (
            <div
              key={p}
              className="flex justify-between items-center border-b border-zinc-800 pb-2"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                {p.replace("_", " ")}
              </span>
              <input
                type="number"
                step="0.5"
                min="0"
                max="5"
                className="bg-transparent text-[#ffbf00] text-right w-12 outline-none font-mono font-bold"
                value={ratings[p]}
                onChange={(e) =>
                  setRatings({ ...ratings, [p]: parseFloat(e.target.value) })
                }
              />
            </div>
          ))}
        </div>

        <button className="w-full bg-[#ffbf00] text-black font-black py-4 mt-10 uppercase tracking-widest hover:bg-white transition-all">
          POST REVIEW
        </button>
      </div>
    </div>
  );
}
