import React from "react";
import { MessageType } from "../../types";
import styles from "./Message.module.css";
import { GiVintageRobot } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
interface Props {
  message: MessageType;
}
const Message: React.FC<Props> = ({ message: { message, sender } }) => {
  if (sender === "bot") {
    return (
      <div className={styles.message__bot}>
        <div className={styles.message__bot__main}>
          <p>{message}</p>
          <span>bot</span>
        </div>
        <GiVintageRobot className={styles.message__icon} />
      </div>
    );
  }
  return (
    <div className={styles.message}>
      <BsFillPersonFill className={styles.message__icon} />
      <div className={styles.message__main}>
        <p>{message}</p>
        <span>you</span>
      </div>
    </div>
  );
};

export default Message;
