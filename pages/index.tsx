import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Selamat Datang di Restoran Atas Awan</h1>
      <p className="text-lg mb-6">
        Temukan berbagai menu makanan dan minuman spesial!
      </p>
      <Link href="/menu">
        <button className="px-6 py-2 bg-blue-500 text-white rounded">
          Lihat Menu
        </button>
      </Link>
    </div>
  );
}