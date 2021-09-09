import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Text, NativeBaseProvider, Image } from "native-base";
import profile from "./assets/pic.jpg";
import email from "./assets/email (1).png";
import phone from "./assets/phone-call.png";
import date from "./assets/date-of-birth.png";
import location from "./assets/pin.png";
import {
  useFonts,
  PaytoneOne_400Regular,
} from "@expo-google-fonts/paytone-one";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
export default function ProfileS() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            source={profile}
            style={{
              width: 300,
              height: 300,
              borderRadius: 150,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <Text style={styles.heading}>John Doe, 22</Text>
          <Text style={styles.heading}>A University Student</Text>
        </View>

        <View style={styles.profile}>
          <View style={styles.info}>
            <Image
              source={email}
              style={{ width: 50, height: 50, marginRight: 50 }}
            />
            <Text style={styles.paragraph}>
              Email Address{"\n"}johndoe@gmail.com
            </Text>
          </View>
          <View style={styles.info}>
            <Image
              source={phone}
              style={{ width: 50, height: 50, marginRight: 50 }}
            />
            <Text style={styles.paragraph}>Phone Number{"\n"}0412356700</Text>
          </View>

          <View style={styles.info}>
            <Image
              source={date}
              style={{ width: 50, height: 50, marginRight: 50 }}
            />
            <Text style={styles.paragraph}>Date of Birth{"\n"}04/08/2002</Text>
          </View>

          <View style={styles.info}>
            <Image
              source={location}
              style={{ width: 50, height: 50, marginRight: 50 }}
            />
            <Text style={styles.paragraph}>Postcode{"\n"}4067</Text>
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  logo: {
    paddingTop: 20,
    justifyContent: "center",
    backgroundColor: "#60BEEB",
    width: window.width,
    paddingBottom: 20,
  },
  container: {
    textAlign: "center",
  },
  heading: {
    fontFamily: "PaytoneOne_400Regular",
    color: "#FFFFFF",
    paddingTop: 25,
    fontSize: 20,
  },
  paragraph: {
    fontSize: 17,
  },
  profile: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "left",
  },
  info: {
    fontFamily: "Roboto_400Regular",
    flexDirection: "row",
    textAlign: "left",
    padding: 30,
    width: 700,
    marginTop: 30,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#89CFF0",
  },
});