// import React, { useEffect, useState } from "react";
// import { StyleSheet } from "react-native";
// import Animated, {
//   useAnimatedStyle,
//   useAnimatedSensor,
//   SensorType,
// } from "react-native-reanimated";

// export default function App() {
//   let initialPitch = 0;
//   const [isSensorReady, setSensorReady] = useState(false);
//   const rotation = useAnimatedSensor(SensorType.ROTATION, {
//     adjustToInterfaceOrientation: true,
//   });

//   useEffect(() => {
//     // Wait for the first valid sensor reading before setting isSensorReady to true
//     if (!isSensorReady && rotation.sensor.value.pitch !== 0) {
//       setSensorReady(true);
//     }
//   }, [rotation.sensor.value.pitch, isSensorReady]);

//   if (isSensorReady) {
//     initialPitch = rotation.sensor.value.pitch;
//   }

//   const AnimatedStyles = {
//     motion: useAnimatedStyle(() => {
//       const { pitch, roll } = rotation.sensor.value;
//       console.log(pitch, initialPitch);

//       return {
//         transform: [
//           { rotateX: `${(pitch - initialPitch) * 50}deg` },
//           { rotateY: `${roll * 50}deg` },
//         ],
//       };
//     }),
//   };

//   return (
//     <Animated.View style={styles.container}>
//       <Animated.View style={[styles.box, AnimatedStyles.motion]} />
//     </Animated.View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     height: "100%",
//     transform: [{ perspective: 1000 }],
//   },
//   box: {
//     height: 120,
//     width: 120,
//     backgroundColor: "#b58df1",
//     borderTopColor: "#fcba03",
//     borderBottomColor: "#1c03fc",
//     borderLeftColor: "#03fcba",
//     borderRightColor: "#fc03d3",
//     borderStyle: "solid",
//     borderWidth: 10,
//     borderRadius: 20,
//   },
// });
