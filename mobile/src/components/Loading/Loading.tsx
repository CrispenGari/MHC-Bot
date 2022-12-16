import { View, Text, Image, StatusBar } from "react-native";
import React from "react";
import { COLORS } from "../../constants";

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.main,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar barStyle={"light-content"} />
      <Image
        source={{
          uri: Image.resolveAssetSource(require("../../../assets/logo.png"))
            .uri,
        }}
        style={{
          width: 100,
          height: 100,
        }}
      />
      <Text
        style={{
          color: "white",
          letterSpacing: 3,
          fontSize: 20,
          marginTop: 30,
        }}
      >
        Medical Health Chat Bot
      </Text>
    </View>
  );
};

export default Loading;
