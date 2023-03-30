import styles from '../scss/components/_navbar.module.scss';
import RRSS from './RRSS';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <h1 className={styles.navbar__h1}>Borja Cuerva</h1>
        <img className={styles.navbar__img} src="src/assets/LogoNavbar.png" alt="Logo Borja Cuerva" />
        <div className={styles.navbar__div}>
        <ul className={styles.navbar__ul}>
          <li className={styles.navbar__li}><a className={styles.navbar__a} href="#">Acerca de mí</a></li>
          <li className={styles.navbar__li}><a className={styles.navbar__a} href="#">Experiencia</a></li>
          <li className={styles.navbar__li}><a className={styles.navbar__a} href="#">Aprendiendo</a></li>
          <li className={styles.navbar__li}><a className={styles.navbar__a} href="#">Contacto</a></li>
        </ul>
        <RRSS />
        </div>
    </nav>
  );
};

export default Navbar;
