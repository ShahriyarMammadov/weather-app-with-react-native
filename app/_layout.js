import React from "react";
import { Image } from "react-native";
import { Stack } from "expo-router";
import Footer from "./footer";
import { StatusBar } from "expo-status-bar";

const Layout = () => {
  return (
    <>
      <Stack
        screenOptions={{
          title: "",
          // headerStyle: {
          //   backgroundColor: "s",
          // },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTransparent: true,
          // headerBackground: () => (
          //   <Image
          //     source={{
          //       uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBr35nsGltX_wIDUpo4TCQCXGHsnU1P9qUQ&usqp=CAU",
          //     }}
          //     style={{ width: "100%", height: "100%", resizeMode: "cover" }}
          //   />
          // ),
        }}
      />
      <StatusBar barStyle="light-content" backgroundColor="red" />
      <Footer />
    </>
  );
};

export default Layout;
