import SkillCard from "@/components/SkillCard";
import { keahlian } from "@/data/keahlian";

export const metadata = { title: "Keahlian" };

export default function KeahlianPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-utama dark:text-sky-200">Keahlian Saya</h1>
      <p className="mt-2 mb-6 max-w-xl text-sm text-gray-600 dark:text-gray-400">
        Daftar kompetensi dan keahlian yang telah dan sedang saya pelajari.
        Pilih keahlian untuk membaca keterangannya.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        {keahlian.map((item) => (
          <SkillCard
            key={item.slug}
            nama={item.nama}
            level={item.level}
            slug={item.slug}
          />
        ))}
      </div>
    </main>
  );
}