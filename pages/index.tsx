import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Restoran Menu</h1>
      <p>Halaman Utama</p>
      <Link href="/menu">Lihat Menu</Link>
    </div>
  );
}