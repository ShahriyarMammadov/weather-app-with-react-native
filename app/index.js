import axios from "axios";
import { Link, Stack } from "expo-router";
import React, { useEffect, useState } from "react";
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
import * as Location from "expo-location";

export default function App() {
  const [currentWeather, setCurrentWeather] = useState(
    require("../assets/images/sunny.png")
  );

  const [location, setLocation] = useState(null);

  const [errorMsg, setErrorMsg] = useState(null);

  const getLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  console.log(location);

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const data = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=121644eb7e360359ae4457fdf296252f`
        );
        // setWeatherData(data.data);
        console.log(data);
      } catch (error) {
        alert(error);
      }
    };
    getWeatherData();
    // location ? getWeatherData() : null;
  }, []);

  return (
    <ScrollView>
      <ImageBackground
        source={{
          uri: "../assets/images/sunny.png",
        }}
        style={styles.background}
      >
        <View style={styles.container}>
          <Text style={{}}>London</Text>
          <View>
            <Text>
              Location:{" "}
              {location
                ? `${location.coords.latitude}, ${location.coords.longitude}`
                : "Unknown"}
            </Text>
            {errorMsg && <Text>Error: {errorMsg}</Text>}
            <Button title="Get Location" onPress={getLocation} />
          </View>
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
