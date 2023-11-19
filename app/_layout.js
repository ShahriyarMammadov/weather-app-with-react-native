import React from "react";
import { Image } from "react-native";
import { Stack } from "expo-router";
import Footer from "./footer";

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
      <Footer />
    </>
  );
};

export default Layout;
