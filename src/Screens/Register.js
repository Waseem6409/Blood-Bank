import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from "react-native";
import InputComponent from "../Components/InputComponent";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <StatusBar hidden={true} />
          <View style={styles.logoContainer}>
            <Image
              source={require("../../assets/pngegg.png")}
              resizeMode="contain"
              style={styles.logo}
            />
          </View>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Register</Text>
          </View>
          <View style={styles.inputContainer}>
            <InputComponent
              icon={
                <MaterialCommunityIcons
                  name="email"
                  color="#8E8F91"
                  size={20}
                />
              }
              placeholder="Email"
              setState={setEmail}
              keyboardType="email-address"
            />
            <InputComponent
              icon={
                <MaterialCommunityIcons name="lock" color="#8E8F91" size={20} />
              }
              placeholder="Password"
              setState={setPassword}
              hidden={true}
            />
            <InputComponent
              icon={
                <MaterialCommunityIcons name="lock" color="#8E8F91" size={20} />
              }
              placeholder="Confirm Password"
              setState={setConfirmPassword}
              hidden={true}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 120,
    height: 120,
  },
  headingContainer: {
    marginTop: 20,
  },
  heading: {
    fontSize: 25,
    // color: "#D92027",
    color: "black",
  },
  inputContainer: {
    paddingHorizontal: 30,
    width: "100%",
    marginTop: 20,
  },
});

export default Register;
