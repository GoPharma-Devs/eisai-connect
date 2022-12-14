import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eisai Connect</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.svg' />
      </Head>

      <main className={styles.main}>
      <Image src='/eisai.svg' alt='Vercel Logo' width={172} height={116} />
       
      </main>

    
    </div>
  );
}
