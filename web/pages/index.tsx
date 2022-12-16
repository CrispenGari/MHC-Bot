import styles from "../styles/Welcome.module.css";
import React from "react";
import { Button, Image } from "@chakra-ui/react";
import { Footer } from "../components";
import { useRouter } from "next/router";

interface Props {}
const Welcome: React.FC<Props> = ({}) => {
  const router = useRouter();
  return (
    <div className={styles.welcome}>
      <div className={styles.welcome__main}>
        <div className={styles.welcome__main__container}>
          <Image src="/logo.png" alt="logo" />
          <p>
            Welcome to the <strong>Medical Health Chat Bot (MHCB)</strong>. This
            is an AI chatbot tool for communicating with a therapist bot in real
            time. If you want a therapist to chat with click Start Chatting
            Button.
          </p>
          <Button
            onClick={() => {
              router.replace("/home");
            }}
          >
            Start Chatting
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Welcome;
