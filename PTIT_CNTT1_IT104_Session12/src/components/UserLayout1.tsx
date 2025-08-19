import React from "react";
import styles from "../styles/UserLayout.module.css";
import Header1 from "../components/Header1";
import Navbar1 from "../components/Navbar1";
import Menu1 from "../components/Menu1";
import Article1 from "../components/Article1";
import Main1 from "../components/Main1";

const UserLayout1: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header1 />
      <Navbar1 />
      <div className={styles.content}>
        <Menu1 />
        <Main1 />
        <Article1 />
      </div>
    </div>
  );
};

export default UserLayout1;
