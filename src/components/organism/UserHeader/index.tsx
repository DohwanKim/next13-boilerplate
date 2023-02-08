import styles from './index.module.css';
import Index from '@/components/molecule/LangChangeTab';

export default function UserHeader() {
  return (
    <header className={styles.header}>
      <h1>Header</h1>
      <Index />
    </header>
  );
}
