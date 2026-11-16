import FormKontak from "@/components/FormKontak";

export const metadata = {
  title: "Kontak",
  description: "Hubungi Rendi Pratama melalui form kontak, email, atau GitHub.",
};

export default function Kontak() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary md:text-4xl">
          Hubungi Saya
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Punya pertanyaan atau ingin bekerja sama? Isi form berikut.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {/* Formulir Kontak (Mengambil 2 Kolom) */}
        <div className="rounded-xl border border-gray-100 bg-white dark:bg-gray-800 p-6 shadow-sm md:col-span-2">
          <FormKontak />
        </div>

        {/* Kotak Temukan Saya di */}
        <div className="rounded-xl border border-gray-100 bg-white dark:bg-gray-800 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-primary">Temukan Saya di</h2>
          <div className="mt-4 space-y-2">
            <a
              href="https://github.com/rendipratamaa555-collab"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-semibold text-red-600 hover:underline"
            >
              GitHub &rarr;
            </a>
            <a
              href="mailto:renditugasindustry@gmail.com"
              className="block font-semibold text-red-600 hover:underline"
            >
              renditugasindustry@gmail.com
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}