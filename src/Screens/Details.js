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

const Details = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <StatusBar hidden={true} />
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>
              Please fill in the details to continue
            </Text>
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
              placeholder="Full Name"
              setState={setEmail}
            />
            <InputComponent
              icon={
                <MaterialCommunityIcons name="lock" color="#8E8F91" size={20} />
              }
              placeholder="Father Name"
              setState={setPassword}
            />
            <InputComponent
              icon={
                <MaterialCommunityIcons name="lock" color="#8E8F91" size={20} />
              }
              placeholder="Gender"
              setState={setPassword}
            />
            <InputComponent
              icon={
                <MaterialCommunityIcons name="lock" color="#8E8F91" size={20} />
              }
              placeholder="City"
              setState={setPassword}
            />
            <InputComponent
              icon={
                <MaterialCommunityIcons name="lock" color="#8E8F91" size={20} />
              }
              placeholder="Mobile No"
              setState={setPassword}
              keyboardType="phone-pad"
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
  headingContainer: {},
  heading: {
    fontSize: 18,
    // color: "#D92027",
    color: "black",
  },
  inputContainer: {
    paddingHorizontal: 30,
    width: "100%",
    marginTop: 50,
  },
});

export default Details;
