import styles from "./footer.module.css";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <h2 className={styles.text}>Renan Mezzacapa-Desenvolvedor Web</h2>

            <div className={styles.links}>
                <a href="https://github.com/R3n4n-code/" className={styles.ancora}>GitHub</a>
                <a href="https://www.linkedin.com/in/renanmezzacapa/" className={styles.ancora}>LinkedIn</a>
                <a href="#" className={styles.ancora}>E-mail</a>
            </div>

            <p className={styles.text}>© 2026 Renan Mezzacapa</p>
        </footer>
    );
}