import { Image } from "@chakra-ui/react";
import React from "react";
import styles from "./Header.module.css";
interface Props {}
const Header: React.FC<Props> = ({}) => {
  return (
    <div className={styles.header}>
      <Image src="/logo.png" alt="main-logo" />
      <h1>FARB</h1>
    </div>
  );
};

export default Header;
