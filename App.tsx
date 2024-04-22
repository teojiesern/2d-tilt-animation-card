import React, { useEffect } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Animated, {
  SensorType,
  useAnimatedSensor,
  useAnimatedStyle,
} from "react-native-reanimated";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const HEIGHT = 256;
const WIDTH = SCREEN_WIDTH * 0.9;

const CARD_HEIGHT = HEIGHT - 5;
const CARD_WIDTH = WIDTH - 5;

function App() {
  const rotation = useAnimatedSensor(SensorType.ROTATION);

  const animatedStyle = useAnimatedStyle(() => {
    const rotateYvalue = `${rotation.sensor.value.qy * 60}deg`;
    const rotateXValue = `${rotation.sensor.value.qx * 60}deg`;

    return {
      transform: [
        { perspective: 3000 },
        { rotateX: rotateXValue },
        { rotateY: rotateYvalue },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          {
            height: CARD_HEIGHT,
            width: CARD_WIDTH,
            backgroundColor: "black",
            position: "absolute",
            borderRadius: 20,
            zIndex: 300,
          },
          animatedStyle,
        ]}
      >
        <View
          style={{
            position: "absolute",
            bottom: "10%",
            left: "10%",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              height: 50,
              aspectRatio: 1,
              borderRadius: 25,
              backgroundColor: "#272F46",
            }}
          />
          <View
            style={{
              flexDirection: "column",
              marginLeft: 10,
              justifyContent: "space-around",
            }}
          >
            <View
              style={{
                height: 20,
                width: 80,
                borderRadius: 25,
                backgroundColor: "#272F46",
              }}
            />
            <View
              style={{
                height: 20,
                width: 80,
                borderRadius: 25,
                backgroundColor: "#272F46",
              }}
            />
          </View>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default () => {
  return (
    // <GestureHandlerRootView style={{ flex: 1 }}>
    <App />
    // </GestureHandlerRootView>
  );
};
