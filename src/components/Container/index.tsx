import styles from "./styles.module.css";

type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <h1 className={styles.container}>
      <div className={styles.content}>{children}</div>
    </h1>
  );
}
