import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

class AnalogClock extends React.Component {
  render() {
    return (
      <View>
        <ImageBackground
          source={require("./assets/clock.png")}
          style={styles.clock}
        >
          <Image
            source={require("./assets/hour-hand.png")}
            style={styles.hourHand}
          />
        </ImageBackground>
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Analog clock</Text>
        <AnalogClock />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  clock: {
    position: "relative",
    width: 300,
    height: 300
  },
  hourHand: {
    position: "absolute",
    top: 90,
    left: 146
  }
});
