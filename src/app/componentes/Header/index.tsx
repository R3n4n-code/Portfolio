import styles from "./header.module.css";
import Link from "next/link";

export function Header() {
    return (

        <header className={styles.header}>

            <h1>Portifólio <span className={styles.iconeCodigo} aria-hidden="true">
          {"</>"}
        </span></h1>
        
            <nav>
                <ul>
                    <li>
                        <Link href="/">Sobre</Link>
                    </li>
                    <li>
                        <Link href="/Projetos">Projetos</Link>
                    </li>
                    <li>
                        <Link href="/Contato">Contato</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
