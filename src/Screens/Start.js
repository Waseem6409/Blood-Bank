import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";

const Start = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/pngegg.png")}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    backgroundColor: "transparent",
  },
  image: {
    width: 150,
    height: 150,
  },
  buttonsContainer: {
    marginTop: 100,
  },
  loginButton: {
    width: 200,
    height: 60,
    backgroundColor: "white",
    borderColor: "#D92027",
    borderWidth: 3,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    color: "#D92027",
    fontSize: 20,
  },
  registerButton: {
    width: 200,
    height: 60,
    backgroundColor: "#D92027",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  registerText: {
    color: "white",
    fontSize: 20,
  },
});

export default Start;
