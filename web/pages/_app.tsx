import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components";
import GraphQLProvider from "../providers/GraphQLProvider";
import ChakraUIProvider from "../providers/ChakraUIProvider";
import ReduxProvider from "../providers/ReduxProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GraphQLProvider>
        <ChakraUIProvider>
          <ReduxProvider>
            <Component {...pageProps} />
          </ReduxProvider>
        </ChakraUIProvider>
      </GraphQLProvider>
    </Layout>
  );
}
