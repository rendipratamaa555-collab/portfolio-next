import Link from "next/link";

export default function SkillCard({ nama, level, slug }) {
    return (
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-utama dark:text-sky-200">{nama}</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Level: {level}</p>
            {slug && (
                <Link
                    href={`/keahlian/${slug}`}
                    className="mt-3 inline-block text-sm font-semibold text-utama dark:text-sky-200 hover:underline"
                >
                    Lihat detail →
                </Link>
            )}
        </div>
    );
}