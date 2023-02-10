import styles from './index.module.css';
import LangChangeTab from '@/components/molecule/LangChangeTab';
import Link from 'next/link';
import Image from 'next/image';
import logoImage from '@/assets/img/logo.png';

export default function UserHeader() {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <h1 className={styles.logo}>
          <Link href={'/'}>
            <Image src={logoImage} alt="Logo Image" />
          </Link>
        </h1>
        <LangChangeTab />
      </div>
    </header>
  );
}
