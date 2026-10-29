import styles from "./projeto.module.css";


export default function Projetos() {
  return (
    <main className={styles.projetoMain}>
      <section>
        <h1>Projetos</h1>

        <p>
          Projetos desenvolvidos por mim utilizando tecnologias como React,
          Next.js, TypeScript e outras ferramentas do desenvolvimento web.
        </p>
      </section>

      <section className={styles.divisoria}>
        <article>
          <h2>Projeto Micro-Frontend</h2>

          <p className={styles.Paragrafodiv}>
             <span>(React, Webpack, Webpack Module
            Federation e HTML Webpack Plugin.)</span>
          </p>

          <h3>Sobre o projeto</h3>

          <p>
            Este projeto foi desenvolvido com o intuito de explorar a
            arquitetura de Micro Frontends e entender como diferentes
            aplicações podem ser integradas em uma única aplicação utilizando
            React e Webpack Module Federation.
          </p>

          <h3>Objetivo</h3>

          <p>
            O objetivo foi desenvolver uma aplicação dividida em diferentes
            Micro Frontends, permitindo que cada parte da aplicação pudesse
            ser desenvolvida e executada de forma independente, enquanto o
            projeto principal ficaria responsável por integrá-las.
          </p>

          <div className={styles.linkContainer}>
            <button className={styles.bnt}>
            <a href="https://github.com/R3n4n-code/Micro-frontends" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            </button>
            <button className={styles.bnt2}>
            <a href="https://micro-frontends-five.vercel.app" target="_blank" rel="noopener noreferrer">
              Ver projeto
            </a>
            </button>
          </div>
        </article>
      </section>
      <section className={styles.divisoria}>
        <article>
          <h2>Projeto GuardLivro</h2>

          <p className={styles.Paragrafodiv}>
             <span>(React, TypeScript, Supabase, Jest, ESLint e Prettier.)</span>
          </p>

          <h3>Sobre o projeto</h3>

          <p>
            Projeto desenvolvido com o objetivo de criar uma aplicação web para
            gerenciamento de livros, utilizando React e TypeScript para o
            desenvolvimento do front-end, Supabase como back-end e Jest para
            testes unitários. O projeto também segue boas práticas de
            desenvolvimento, utilizando ESLint e Prettier para garantir a
            qualidade do código.
          </p>

          <h3>O que faz</h3>

          <p>
            O GuardLivro permite que os usuários adicionem, editem e removam
            livros de sua coleção, além de salvar informações detalhadas sobre
            cada livro, como título, autor e status de leitura. A
            aplicação também permite que os usuários filtrem e pesquisem livros
            com base em diferentes critérios.
          </p>

          <div className={styles.linkContainer}>
           <button className={styles.bnt}>
            <a href="https://github.com/R3n4n-code/GuardLivro" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            </button>
            <button className={styles.bnt2}>
            <a href="https://guard-livro.vercel.app/" target="_blank" rel="noopener noreferrer">
              Ver projeto
            </a>
            </button>
          </div>
        </article>
      </section>

      <section className={styles.divisoria}>
        <article>
          <h2>Projeto Next-Step</h2>

          <p className={styles.Paragrafodiv}>
             <span>(Next.js, UseReduce, TypeScript ,Eslint.)</span>
          </p>

          <h3>Sobre o projeto</h3>

          <p>
            Projeto criado para para o gerenciamento de tarefas 
            pensado para tarefas simples do dia a dia 
          </p>

          <h3>Objetivo</h3>

          <p>
            O objetivo principal foi aplicar o hook <code>useReducer</code> para o gerenciamento de estado da aplicação. 
  Assim que conheci essa ferramenta, decidi criar este projeto para consolidar meu aprendizado na prática.
          </p>

          <div className={styles.linkContainer}>
            <button className={styles.bnt}>
            <a href="https://github.com/R3n4n-code/Next-Step" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            </button>
            <button className={styles.bnt2}>
            <a href="https://next-step-one-jade.vercel.app/" target="_blank" rel="noopener noreferrer">
              Ver projeto
            </a>
            </button>
          </div>
        </article>
      </section>
    </main>
  );
}

