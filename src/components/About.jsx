import styles from '../scss/components/_about.module.scss'

const About = () => {
  return (
    <section className={styles.about}>
        <h2 className={styles.about__h2}>Acerca de mí</h2>
        <article className={styles.about__article}>
          <img className={styles.about__article__img} src="src/assets/borja.jpg" alt="Borja Cuerva" />
          <div className={styles.about__article__div}>
            <h3 className={styles.about__article__h3}>👋 ¡Hola! Me llamo Borja.</h3>
            <ul>
              <li className={styles.about__article__li}>📖 Comencé mis estudios como desarrollador de aplicaciones multiplataforma. Mi carrera profesional dio un giro de 180º cuando empecé a desarrollar páginas web, que es lo que me encanta actualmente.</li>
              <li className={styles.about__article__li}>🙇🏻 Me encanta investigar por mi cuenta nuevas tecnologías y formas de mejorar profesionalmente.</li>
              <li className={styles.about__article__li}>💼 Actualmente trabajo como desarrollador web en Alebat Education, donde tengo el placer de trabajar codo con codo con los mejores desarrolladores y amigos.</li>
              <li className={styles.about__article__li}>💻 Actualmente estoy aprendiendo Vue 3, Jest y Husky entre otros.</li>
              <li className={styles.about__article__li}>💬 Te animo a escribirme por privado o al correo borjacuerva@gmail.com</li>
            </ul>
          </div>
        </article>
    </section>
  );
};

export default About;
