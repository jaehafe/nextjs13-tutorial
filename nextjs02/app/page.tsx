import Link from 'next/link';
import React from 'react';

function page() {
  return (
    <main>
      <h1>hello world</h1>
      <Link href="/about">Go to About Page</Link>
    </main>
  );
}

export default page;
