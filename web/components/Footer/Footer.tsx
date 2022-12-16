import React from 'react';
import styles from "./Footer.module.css";
interface Props {}
const  Footer: React.FC<Props> = ({}) => {
    return (
       <p className={styles.footer}>
        Copyright © 2022 Crispen AI Tools Inc. All rights reserved
       </p>
    );
};

export default  Footer;