import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="">Entenda como funciona a técnica pomodoro</a>
      <a href="">
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚 Por
        Elvis Huges - v1.2
      </a>
    </footer>
  );
}
