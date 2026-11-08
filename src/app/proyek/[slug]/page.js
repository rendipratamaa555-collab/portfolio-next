import Image from "next/image";
import Link from "next/link";
import { proyek } from "@/data/proyek";
import { notFound } from "next/navigation";
import Kartu from "@/components/Kartu";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = proyek.find((p) => p.slug === slug);

  if (!item) {
    return { title: "Proyek tidak ditemukan" };
  }
  return { title: item.judul, description: item.deskripsi };
}

export default async function DetailProyek({ params }) {
  const { slug } = await params;
  const item = proyek.find((p) => p.slug === slug);
  if (!item) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <nav aria-label="Breadcrumb" className="text-sm text-gray-600 dark:text-gray-400">
        <Link href="/" className="hover:underline">Beranda</Link>
        {" / "}
        <Link href="/proyek" className="hover:underline">Proyek</Link>
        {" / "}
        <span className="font-semibold text-utama dark:text-sky-200">{item.judul}</span>
      </nav>
      <h1 className="mt-4 text-3xl font-bold text-utama dark:text-sky-200 md:text-4xl">{item.judul}</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">{item.kategori} &middot; Dibuat di {item.minggu}</p>
      <Image
        src={item.gambar}
        alt={`Tangkapan layar ${item.judul}`}
        width={640}
        height={420}
        loading="eager"
        className="mt-6 h-auto w-full rounded-xl border border-gray-200 dark:border-gray-700"
      />

      <div className="mt-6 space-y-6">
        <Kartu judul="Deskripsi Proyek">
          <p className="text-gray-600 dark:text-gray-400">{item.deskripsi}</p>
        </Kartu>

        <Kartu judul="Yang Saya Pelajari">
          <ul className="list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-400">
            {item.fitur.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </Kartu>
      </div>
    </main>
  );
}