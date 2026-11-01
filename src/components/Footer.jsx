import { connection } from "next/server";

export default async function Footer() {
  await connection();
  const tahun = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-utama p-6 text-center text-latar">
      <p>
        &copy; {tahun} Rendi Pratama. Dibuat dengan Next.js di Kelas Industri
        UBIG.
      </p>
    </footer>
  );
}