import styles from "./contato.module.css";

export default function Contato() {
  return (
    <main className={styles.contato}>


      <section className={styles.introducao}>
        <h1>
          Contato
        </h1>

        <p>
          Estou aberto a oportunidades, novos desafios e projetos
          que me ajudem a crescer como desenvolvedor.
        </p>
      </section>

      <section
        className={styles.linksContato}
        aria-label="Meus contatos"
      >
        <a
          href="mailto:renanrusefqw@gmail.com"
          className={styles.cardContato}
        >
          <div className={styles.icone} aria-hidden="true">
            ✉
          </div>

          <div className={styles.informacoes}>
            <h2>E-mail</h2>
            <p>Entre em contato comigo</p>
          </div>

          <span className={styles.seta} aria-hidden="true">
            ↗
          </span>
        </a>

        <a
          href="https://github.com/R3n4n-code"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cardContato}
        >
          <div className={styles.icone} aria-hidden="true">
            GH
          </div>

          <div className={styles.informacoes}>
            <h2>GitHub</h2>
            <p>Conheça meus projetos</p>
          </div>

          <span className={styles.seta} aria-hidden="true">
            ↗
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/renanmezzacapa/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cardContato}
        >
          <div className={styles.icone} aria-hidden="true">
            in
          </div>

          <div className={styles.informacoes}>
            <h2>LinkedIn</h2>
            <p>Vamos nos conectar</p>
          </div>

          <span className={styles.seta} aria-hidden="true">
            ↗
          </span>
        </a>
      </section>

      <footer className={styles.disponibilidade}>
        <span className={styles.status} />
        <p>Aberto a novas oportunidades</p>
      </footer>
    </main>
  );
}