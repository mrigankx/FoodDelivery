import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { titles, colors, btn1 } from "../globals/style";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const LoginScreen = () => {
  const [EmailFocused, setEmailFocused] = useState(false);
  const [PasswordFocused, setPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.head1}>Sign In</Text>
      <View style={styles.inputout}>
        <AntDesign
          name="user"
          size={24}
          color={EmailFocused ? "red" : "black"}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onFocus={() => {
            setEmailFocused(true);
            setPasswordFocused(false);
            setShowPassword(false);
          }}
        />
      </View>
      <View style={styles.inputout}>
        <AntDesign
          name="lock"
          size={24}
          color={PasswordFocused ? "red" : "black"}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={showPassword == false ? true : false}
          onFocus={() => {
            setEmailFocused(false);
            setPasswordFocused(true);
          }}
        />
        <Entypo
          name={showPassword ? "eye" : "eye-with-line"}
          size={24}
          color="black"
          onPress={() => {
            setShowPassword(!showPassword);
          }}
        />
      </View>
      <TouchableOpacity style={btn1}>
        <Text
          style={{
            color: colors.col1,
            fontSize: titles.btntext,
            fontWeight: "bold",
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
      <Text style={styles.forgot}>Forgot Password?</Text>
      <Text style={styles.or}>OR</Text>
      <Text style={styles.gftext}>Sign In with</Text>
      <View style={styles.gf}>
        <TouchableOpacity>
          <View style={styles.gfIcon}>
            <AntDesign name="google" size={24} color="red" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.gfIcon}>
            <AntDesign name="facebook-square" size={24} color="blue" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.gfIcon}>
            <AntDesign name="instagram" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  head1: {
    fontSize: titles.title1,
    fontWeight: "bold",
    color: colors.text1,
    textAlign: "center",
  },
  inputout: {
    flexDirection: "row",
    width: "80%",
    marginVertical: 10,
    backgroundColor: colors.col1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignSelf: "center",
    elevation: 20,
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    width: "80%",
  },
  forgot: {
    color: colors.text2,
    marginTop: 20,
    marginBottom: 10,
  },
  or: {
    color: colors.text1,
    marginVertical: 10,
    fontWeight: "bold",
  },
  gftext: {
    color: colors.text2,
    marginVertical: 10,
    fontSize: 25,
    fontWeight: "bold",
  },
  gf: {
    flexDirection: 'row',

  },
  gfIcon: {
    backgroundColor: "white",
    width: 50,
    height: 50,
    margin: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 20
  }
});
