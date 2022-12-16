import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/core";
// App Param Lists
export type AppParamsList = {
  Landing: undefined;
  Home: undefined;
};

export type AppNavProps<T extends keyof AppParamsList> = {
  navigation: StackNavigationProp<AppParamsList, T>;
  route: RouteProp<AppParamsList, T>;
};
