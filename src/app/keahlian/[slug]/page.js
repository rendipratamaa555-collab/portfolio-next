import Link from "next/link";
import { notFound } from "next/navigation";
import { keahlian } from "@/data/keahlian";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = keahlian.find((k) => k.slug === slug);
  if (!item) return { title: "Keahlian tidak ditemukan" };
  return { title: item.nama };
}

export default async function DetailKeahlianPage({ params }) {
  const { slug } = await params;
  const item = keahlian.find((k) => k.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <Link
        href="/keahlian"
        className="text-sm font-semibold text-utama dark:text-sky-200 hover:underline"
      >
        ← Kembali ke daftar keahlian
      </Link>

      <article className="mt-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-sm">
        <p className="text-sm font-semibold text-red-700">
          Tingkat Kemahiran: {item.level}
        </p>
        <h1 className="mt-1 text-4xl font-bold text-utama dark:text-sky-200">{item.nama}</h1>

        <h2 className="mt-6 text-lg font-semibold text-utama dark:text-sky-200">
          Deskripsi dan Pengalaman
        </h2>
        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{item.deskripsi}</p>
      </article>
    </main>
  );
}