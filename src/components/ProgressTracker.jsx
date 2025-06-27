import React, { useEffect, useState } from "react";

const steps = [
  "Scaffolding",
  "Pages",
  "Styling",
  "Admin",
  "Firebase",
  "Testing",
  "Packaging",
  "Done!"
];

export default function ProgressTracker({ currentStep }) {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setElapsed((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const progress = Math.min((currentStep / (steps.length - 1)) * 100, 100);
  const minutes = Math.floor(elapsed / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (elapsed % 60).toString().padStart(2, "0");

  return (
    <div className="w-full max-w-xl mx-auto my-10 bg-white p-6 rounded-2xl shadow-lg">
      <div className="mb-3 text-xs text-gray-500 flex justify-between">
        <span>Progress</span>
        <span className="font-mono">
          {minutes}:{seconds}
        </span>
      </div>
      <div className="relative h-6 bg-amber-100 rounded-xl overflow-hidden mb-4">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-400 to-amber-400 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
        <div
          className="absolute w-full text-center text-xs font-bold text-emerald-900"
          style={{ lineHeight: "1.5rem" }}
        >
          {Math.round(progress)}% Complete
        </div>
      </div>
      <ul className="flex flex-wrap gap-2 justify-center">
        {steps.map((step, idx) => (
          <li
            key={step}
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              idx < currentStep
                ? "bg-emerald-400 text-white"
                : idx === currentStep
                ? "bg-amber-400 text-emerald-900 animate-pulse"
                : "bg-gray-100 text-gray-400"
            }`}
          >
            {step}
          </li>
        ))}
      </ul>
    </div>
  );
}
