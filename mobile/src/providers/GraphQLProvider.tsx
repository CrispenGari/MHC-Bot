import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { uri } from "../constants";
export const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});

interface Props {
  children: React.ReactNode;
}
const GraphQLProvider: React.FunctionComponent<Props> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default GraphQLProvider;
