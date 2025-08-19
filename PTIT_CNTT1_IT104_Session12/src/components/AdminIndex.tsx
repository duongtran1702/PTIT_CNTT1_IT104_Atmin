import styles from "../styles/AdminLayout.module.css";
import Header from "./Header";
import Menu from "./Menu";
import Main from "./Main";
import Footer from "./Footer";

export default function AdminIndex() {
  return (
    <div className={styles.container}>
      <Header />
      <Menu />
      <Main />
      <Footer />
    </div>
  );
}
