import Image from "next/image";
import Link from "next/link";

export default function Hero({ nama, tagline }) {
    return (
        <section className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <Image
                src="/image.jpg"
                alt={`Foto profile ${nama}`}
                width={180}
                height={180}
                loading="eager"
                className="rounded-full border-4 border-aksen object-cover aspect-square"
            />
            <div>
                <h1 className="text-3xl font-bold text-utama dark:text-sky-200 md:text-5xl">Halo, saya {nama}!</h1>
                <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">{tagline}</p>

                <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
                    <Link
                        href="/tentang"
                        className="rounded-lg bg-utama px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
                    >
                        Tentang saya
                    </Link>
                    <a
                        href="#keahlian"
                        className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50"
                    >
                        Lihat keahlian
                    </a>
                </div>
            </div>
        </section>
    );
}