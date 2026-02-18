"use client";

import { useEffect, useState } from "react";

export default function Intro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-slate-900 text-white flex items-center justify-center z-[9999]">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-semibold tracking-tight">
          Welcome
        </h1>
        <p className="text-slate-300 text-lg">
          Dasaradh D — Data Analyst & ML Enthusiast
        </p>
      </div>
    </div>
  );
}
