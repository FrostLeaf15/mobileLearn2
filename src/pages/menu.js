import styles from '../styles/menu.module.css';
import Link from 'next/link';
import Image from 'next/image';
import imgPic from '../image/image.jpg';

function Menu() {
  return (
    <div className={styles.container}>
      <h1 className={styles.judul}>Menu Konversi</h1>
      <div className={styles.gridContainer}>
        <Link href="/page1">
            <div className={styles.gridItem}>
              <Image src={imgPic} alt="Image1" className={styles.img} />
              <p>Suhu</p>
            </div>
        </Link>
        <Link href="/page2">
            <div className={styles.gridItem}>
              <Image src={imgPic} alt="Image2" className={styles.img} />
              <p>Jarak</p>
            </div>
        </Link>
        <Link href="/page3">
            <div className={styles.gridItem}>
              <Image src={imgPic} alt="Image3" className={styles.img} />
              <p>Massa</p>
            </div>
        </Link>
        <Link href="/page4">
            <div className={styles.gridItem}>
              <Image src={imgPic} alt="Image4" className={styles.img} />
              <p>Waktu</p>
            </div>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
