"use client";

import { useEffect } from "react";

export default function TombolTema() {
  // Dijalankan sekali setelah tombol tampil di browser: pakai tema yang tersimpan
  useEffect(() => {
    if (localStorage.getItem("tema") === "gelap") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  function gantiTema() {
    const gelap = document.documentElement.classList.toggle("dark");
    localStorage.setItem("tema", gelap ? "gelap" : "terang");
  }

  return (
    <button
      type="button"
      onClick={gantiTema}
      className="rounded-lg border border-white px-3 py-1 text-sm font-semibold text-white hover:border-aksen hover:bg-aksen"
    >
      Mode Gelap
    </button>
  );
}