import "react-native-gesture-handler";
import Routes from "./src/routes";
import { useFonts } from "expo-font";
import { Loading } from "./src/components";
import { Fonts } from "./src/constants";
import GraphQLProvider from "./src/providers/GraphQLProvider";
import ReduxProvider from "./src/providers/ReduxProvider";
const App = () => {
  const [loaded] = useFonts(Fonts);
  if (!loaded) {
    return <Loading />;
  }
  return (
    <GraphQLProvider>
      <ReduxProvider>
        <Routes />
      </ReduxProvider>
    </GraphQLProvider>
  );
};

export default App;
