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
  Dimensions,
  Keyboard,
  Image,
  ScrollView,
  ImageBackground,
  RefreshControl,
} from "react-native";
import * as Location from "expo-location";

export default function App() {
  const [currentWeather, setCurrentWeather] = useState(
    require("../assets/images/sunny.png")
  );
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

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

  const getWeatherData = async () => {
    try {
      const data = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=121644eb7e360359ae4457fdf296252f`
      );
      setWeatherData(data.data);
      console.log(data.data);
      setRefreshing(false);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getLocation();
    location ? getWeatherData() : null;
  }, [location]);

  const onRefresh = () => {
    setRefreshing(true);
    getLocation();
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor="#3F51B5"
          title="Download..."
        />
      }
    >
      <ImageBackground
        source={
          weatherData?.list[0]?.weather[0]?.description === "clear sky"
            ? require("../assets/images/sunny.png")
            : weatherData?.list[0]?.weather[0]?.description === "rainy"
            ? require("../assets/images/rainy.png")
            : require("../assets/images/snow.png")
        }
        style={styles.background}
      >
        <View style={styles.container}>
          <Text style={{ fontSize: 50, color: "white" }}>
            {weatherData?.city?.name}
          </Text>
          <Text style={{ fontSize: 40, color: "white" }}>
            {(weatherData?.list[0]?.main?.temp - 273.15).toFixed()}°C
          </Text>
          <Text
            style={{
              textTransform: "capitalize",
              color: "white",
              fontWeight: 700,
              fontSize: 20,
              paddingTop: 10,
            }}
          >
            {weatherData?.list[0]?.weather[0]?.description}
          </Text>
          <View>
            {/* <Text>
              Location:{" "}
              {location
                ? `${location.coords.latitude}, ${location.coords.longitude}`
                : "Unknown"}
            </Text> */}
            {errorMsg && <Text>Error: {errorMsg}</Text>}
            {/* <Button title="Get Location" onPress={getLocation} /> */}
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 80,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
