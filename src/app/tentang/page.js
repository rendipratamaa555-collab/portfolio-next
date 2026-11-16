import Kartu from "@/components/Kartu";

export const metadata = {
  title: "Tentang",
  description: "Cerita, hobi, cita-cita, dan jadwal belajar Agung Cahyo.",
};

const hobi = [
  "Bersepeda",
  "Diy",
  "Jalan-jalan",
];

const rencana = [
  "Menuntaskan Kelas Industri UBIG sampai Semester 4",
  "Magang di perusahaan teknologi",
  "Bekerja sebagai Web Developer",
];

const jadwal = [
  { hari: "Senin", waktu: "19.00 - 20.00", kegiatan: "Membaca ulang modul" },
  { hari: "Rabu", waktu: "19.00 - 21.00", kegiatan: "Mengerjakan tugas praktik" },
  { hari: "Minggu", waktu: "19.30 - 20.30", kegiatan: "Merekam video dan menulis laporan" },
];

export default function Tentang() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold text-primary md:text-4xl">
        Tentang Saya
      </h1>

      {/* Kartu Perkenalan (Sebelumnya judulnya 'Tentang Saya') */}
      <Kartu judul="Perkenalan">
        <p className="text-gray-600 dark:text-gray-400">
          Saya tinggal di Malang dan senang mencoba hal baru di dunia teknologi. Saya ingin bisa membuat website yang bermanfaat untuk sekolah dan UMKM di sekitar rumah.
        </p>
      </Kartu>

      {/* Hobi dan Cita-cita */}
      <div className="grid gap-6 md:grid-cols-2">
        <Kartu judul="Hobi">
          <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
            {hobi.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Kartu>

        <Kartu judul="Cita-cita">
          <p className="mb-2 text-gray-600 dark:text-gray-400">
            Menjadi <span className="font-semibold text-gray-900">Full Stack Web Developer</span>. Langkah yang saya rencanakan:
          </p>
          <ol className="list-decimal pl-5 space-y-1 text-gray-600 dark:text-gray-400">
            {rencana.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </Kartu>
      </div>

      {/* Jadwal Belajar */}
      <Kartu judul="Jadwal Belajar">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-utama text-white">
                <th className="py-2.5 px-4 font-semibold">Hari</th>
                <th className="py-2.5 px-4 font-semibold">Waktu</th>
                <th className="py-2.5 px-4 font-semibold">Kegiatan</th>
              </tr>
            </thead>
            <tbody>
              {jadwal.map((item, index) => (
                <tr key={index} className="border-b border-gray-100 text-gray-600 dark:text-gray-400">
                  <td className="py-2.5 px-4">{item.hari}</td>
                  <td className="py-2.5 px-4">{item.waktu}</td>
                  <td className="py-2.5 px-4">{item.kegiatan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Kartu>
    </main>
  );
}