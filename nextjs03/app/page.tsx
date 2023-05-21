import React from 'react';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <p>
        <Link href="/users">Users</Link>
      </p>
    </main>
  );
}

export default Home;