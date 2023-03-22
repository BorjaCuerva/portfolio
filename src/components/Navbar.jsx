import styles from '../scss/components/_navbar.module.scss'
import RRSS from './RRSS';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <img className={styles.navbar__img} src="src/assets/LogoNavbar.png" alt="Logo Borja Cuerva" />
        <div className={styles.navbar__div}>
        <ul className={styles.navbar__ul}>
          <l1 className={styles.navbar__li}><a className={styles.navbar__a} href="">Primero</a></l1>
          <l1 className={styles.navbar__li}><a className={styles.navbar__a} href="">Primero</a></l1>
          <l1 className={styles.navbar__li}><a className={styles.navbar__a} href="">Primero</a></l1>
          <l1 className={styles.navbar__li}><a className={styles.navbar__a} href="">Primero</a></l1>
        </ul>
        <RRSS />
        </div>
    </nav>
  );
};

export default Navbar;
