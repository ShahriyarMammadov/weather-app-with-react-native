import { Link, Stack } from "expo-router";
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
  ScrollView,
  ImageBackground,
} from "react-native";

export default function App() {
  return (
    <ScrollView>
      <ImageBackground
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBr35nsGltX_wIDUpo4TCQCXGHsnU1P9qUQ&usqp=CAU",
        }}
        style={styles.background}
      >
        <View style={styles.container}>
          <Text style={{}}>London</Text>
        </View>
      </ImageBackground>
    </ScrollView>
    // <View style={styles.container}>
    //   <Image
    //   source={{
    //     uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBr35nsGltX_wIDUpo4TCQCXGHsnU1P9qUQ&usqp=CAU",
    //   }}
    //   style={{ width: "100%", height: 1500, resizeMode: "cover" }}
    // />
    //   <Text>Name: test</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "stretch",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 180,
  },
});
