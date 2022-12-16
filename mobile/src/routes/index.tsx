import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Landing } from "../screens";
import { AppParamsList } from "../params";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator<AppParamsList>();
const Routes = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Landing"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
