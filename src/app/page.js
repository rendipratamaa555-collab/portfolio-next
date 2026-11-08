import Link from "next/link";
import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";
import ProyekCard from "@/components/ProyekCard";
import { proyek } from "@/data/proyek";
import { keahlian } from "@/data/keahlian";

const proyekTerbaru = proyek.slice(-3);

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 space-y-6">
      <Hero
        nama="Rendi Pratama"
        tagline="Siswa SMK calon Junior Web Developer di Kelas Industri UBIG."
      />

      {/* Keahlian */}
      <section id="keahlian" className="scroll-mt-6">
        <h2 className="mb-4 text-2xl font-bold text-utama dark:text-sky-200">Keahlian</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {keahlian.map((item) => (
            <SkillCard key={item.slug} nama={item.nama} level={item.level} />
          ))}
        </div>
        <Link
          href="/keahlian"
          className="mt-6 inline-block rounded-lg bg-utama px-5 py-2 text-sm font-semibold text-white">
            Lihat semua keahlian
          </Link>
      </section>

      {/* Proyek Terbaru */}
      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-utama dark:text-sky-200">Proyek Terbaru</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {proyekTerbaru.map((item) => (
            <ProyekCard key={item.slug} proyek={item} />
          ))}
        </div>
        <Link
          href="/proyek"
          className="mt-6 inline-block rounded-lg bg-utama px-5 py-2 font-semibold text-white"
        >
          Lihat semua proyek
        </Link>
      </section>
    </main>
  );
}