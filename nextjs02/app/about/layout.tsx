// import type { Metadata } from 'next';
import styles from '@/about/styles.module.css';

// export const metadata: Metadata = {
//   title: 'About 페이지입니다.',
//   description: 'About page description',
// };

function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>About Navbar</nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}

export default AboutLayout;
