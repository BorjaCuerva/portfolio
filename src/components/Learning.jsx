import styles from '../scss/components/_learning.module.scss'

const Learning = () => {
  return (
    <section className={styles.learning}>
        <h2 className={styles.learning__h2}>Aprendiendo</h2>
        <article className={styles.learning__article}>
          <div className={styles.learning__article__div}>
            <ul className={styles.learning__article__ul}>
              <li className={styles.learning__article__li}><img className={styles.learning__article__img} src="/src/assets/html-5-svgrepo-com.svg" alt="HTML5 Logo" />HTML5</li>
              <li className={styles.learning__article__li}><img className={styles.learning__article__img} src="/src/assets/css-svgrepo-com.svg" alt="CSS3 Logo" />CSS3</li>
              <li className={styles.learning__article__li}><img className={styles.learning__article__img} src="/src/assets/scss2-svgrepo-com.svg" alt="SCSS Logo" />SCSS</li>
              <li className={styles.learning__article__li}><img className={styles.learning__article__img} src="/src/assets/javascript-svgrepo-com.svg" alt="Javascript Logo" />JavaScript</li>
            </ul>
            <ul className={styles.learning__article__ul}>
            <li className={styles.learning__article__li}><img className={styles.learning__article__img} src="/src/assets/git-svgrepo-com.svg" alt="Git Logo" />Git</li>
              <li className={styles.learning__article__li}><img className={styles.learning__article__img} src="/src/assets/vite-svgrepo-com.svg" alt="Vite Logo" />Vite</li>
              <li className={styles.learning__article__li}><img className={styles.learning__article__img} src="/src/assets/eslint-svgrepo-com.svg" alt="Eslint Logo" />Eslint</li>
              <li className={styles.learning__article__li}><img className={styles.learning__article__img} src="/src/assets/vue-svgrepo-com.svg" alt="Vue Logo" />Vue 3</li>
            </ul>
          </div>
        </article>
    </section>
  );
}

export default Learning;
