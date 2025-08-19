import React from "react";
import styles from "../styles/UserLayout.module.css";
import Cart1 from "./Cart1";

const Main1: React.FC = () => {
  // Tạo mảng 12 phần tử
  const carts = Array.from({ length: 12 });

  return (
    <main className={styles.main}>
      {carts.map((_, index) => (
        <Cart1 key={index} />
      ))}
    </main>
  );
};

export default Main1;
