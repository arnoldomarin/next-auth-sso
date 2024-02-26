import Header from '@/components/header';
import { SessionProvider } from 'next-auth/react';
import Recordings from '@/components/recordings';

export default function Home() {
  return (
      <SessionProvider>
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <Recordings />
        </main>
      </SessionProvider>
  )
}