import styles from '../styles/menu.module.css';
import Link from 'next/link';

function Menu() {
  return (
    <div className={styles.container}>
      <h1>Judul Menu</h1>
      <div className={styles.gridContainer}>
        <Link href="/page1">
            <div className={styles.gridItem}>
              <img src="/image1.jpg" alt="Image 1" />
              <p>Teks untuk Gambar 1</p>
            </div>
        </Link>
        <Link href="/page2">
            <div className={styles.gridItem}>
              <img src="/image2.jpg" alt="Image 2" />
              <p>Teks untuk Gambar 2</p>
            </div>
        </Link>
        <Link href="/page3">
            <div className={styles.gridItem}>
              <img src="/image3.jpg" alt="Image 3" />
              <p>Teks untuk Gambar 3</p>
            </div>
        </Link>
        <Link href="/page4">
            <div className={styles.gridItem}>
              <img src="/image4.jpg" alt="Image 4" />
              <p>Teks untuk Gambar 4</p>
            </div>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
