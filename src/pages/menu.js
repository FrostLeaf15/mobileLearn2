import styles from '../styles/menu.module.css';
import Link from 'next/link';
import Image from 'next/image';
import thermometerPic from '../image/thermometer.png';
import distancePic from '../image/distance.png';
import heavyPic from '../image/scales.png';
import timePic from '../image/time.png';

function Menu() {
  return (
    <div className={styles.container}>
      <h1 className={styles.judul}>Menu Konversi</h1>
      <div className={styles.gridContainer}>
        <Link href="/pageSuhu">
            <div className={styles.gridItem}>
              <Image src={thermometerPic} alt="Suhu" className={styles.img} />
              <p>Suhu</p>
            </div>
        </Link>
        <Link href="/page2">
            <div className={styles.gridItem}>
              <Image src={distancePic} alt="Jarak" className={styles.img} />
              <p>Jarak</p>
            </div>
        </Link>
        <Link href="/page3">
            <div className={styles.gridItem}>
              <Image src={heavyPic} alt="Massa" className={styles.img} />
              <p>Massa</p>
            </div>
        </Link>
        <Link href="/page4">
            <div className={styles.gridItem}>
              <Image src={timePic} alt="Waktu" className={styles.img} />
              <p>Waktu</p>
            </div>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
