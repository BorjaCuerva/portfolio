import RRSS from './RRSS';
import styles from '../scss/components/_contact.module.scss'

const Contact = () => {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.footer__h2}>Contacto</h2>
      <a className={styles.footer__a} href="mailto:borjacuerva@gmail.com">borjacuerva@gmail.com</a>
      <RRSS />
    </footer>
  );
};

export default Contact;
