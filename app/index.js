// import { Link, Stack } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBr35nsGltX_wIDUpo4TCQCXGHsnU1P9qUQ&usqp=CAU",
        }}
        style={{ width: "100%", height: "100%", resizeMode: "cover" }}
      />
      <Text>Name: test</Text>
    </View>
  );
}

const styles = {
  container: {},
};
