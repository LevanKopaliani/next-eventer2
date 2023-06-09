import LoginSlider from "./LoginSlider";
import styles from "./layout.module.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function userLayout({ children }) {
  return (
    <main className={styles.container}>
      <LoginSlider />
      {children}
    </main>
  );
}
