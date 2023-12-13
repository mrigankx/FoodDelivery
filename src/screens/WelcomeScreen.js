import {
  StyleSheet,
  View,
  Text,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
// import logo from "../assets/logo.jpg";
import { colors, hr80 } from "../globals/style";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff4242",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 50,
    color: colors.col1,
    textAlign: "center",
    marginVertical: 10,
    fontWeight: '200',
  },
  logoout:{
    width: '80%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 20,
    color: colors.col1,
    textAlign: "center",
    width: '80%',
  },
  btnout: {
    flexDirection: 'row',
  },
  btn: {
    fontSize: 20,
    color: colors.text1,
    textAlign: "center",
    marginVertical: 30,
    marginHorizontal: 10,
    fontWeight: '700',
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.col1,
  }
});

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Foodie</Text>
      <View style={styles.logoout}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
      </View>
      <View style={hr80} />
      <Text style={styles.text}>
        Find the best food around you at lowest price.
      </Text>
      <View style={hr80} />
      <View style={styles.btnout}>
        <TouchableOpacity>
          <Text style={styles.btn}>SignUp</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.btn}>SignIn</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;
