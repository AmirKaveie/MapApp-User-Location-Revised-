import React from "react";
import { StyleSheet, View } from "react-native";
import MapViewComponent from "./MapView";

export default function App() {
  return (
    <View style={styles.container}>
      <MapViewComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});