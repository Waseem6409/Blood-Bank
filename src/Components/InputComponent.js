import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const InputComponent = ({
  hidden,
  setState,
  icon,
  placeholder,
  keyboardType,
}) => {
  return (
    <View style={styles.textInputContainer}>
      {icon}
      <TextInput
        onChangeText={(e) => {
          setState(e);
        }}
        selectionColor="#8E8F91"
        keyboardType={keyboardType}
        placeholder={placeholder}
        style={styles.textInput}
        secureTextEntry={hidden ? true : false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    paddingVertical: 7,
    paddingHorizontal: 7,
  },
  textInput: {
    flex: 1,
    color: "#8E8F91",
    marginLeft: 10,
  },
});

export default InputComponent;
