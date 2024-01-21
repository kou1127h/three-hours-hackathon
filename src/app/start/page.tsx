import Link from 'next/link';

export default function Start() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-2xl">3時間ひとりハッカソン</h1>
      </div>

      <Link href={'/'}>はじめる</Link>
    </main>
  );
}
