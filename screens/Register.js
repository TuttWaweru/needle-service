import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
  Linking,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES } from "../constants";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";


const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleRegister = async () => {
    // Implement email Registerlogic here
    const user = {
      name: name,
      email: email,
      password: password,
    };

    //send A Post request to the backend API
    axios.post("http://localhost:3000/register", user).then((response) => {
      console.log(response);
      Alert.alert(
        "Registration Succefull", 
      "You have registered Succefully"
      );
      setName("");
      setPassword("");
      setEmail("");
    
    }).catch((error) =>{
      if (error.response) {
        // The request was made and the server responded with a status code
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log("Registration Failed", error);
      Alert.alert("Registration Error", "An error occurred during registration");
    });

  };

  return (
    <ImageBackground
      source={require("../assets/images/background1.png")}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("../assets/images/Need.png")}
            style={styles.headerPhoto}
          />
        </View>
        <ScrollView>
        <TextInput
          style={styles.nameInput}
          value={name}
          placeholder="Enter Name/Company Name"
          onChangeText={(text) => setName(text)}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.emailInput}
          value={email}
          placeholder="Enter Email"
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.passwordInput}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Enter Password"
          secureTextEntry={true}
        />
        <View
          style={{
            margin: 10,
            marginLeft: 60,
            marginRight: 60,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity>
            <Text>Keep me logged in</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        {/*<TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>*/}
        <TouchableOpacity style={styles.signInButton} onPress={handleRegister}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Link to registration screen */}
        <View style={styles.registerContainer}>
          <Text style={styles.registerLink1}>Already have an account?</Text>

          <TouchableOpacity onPress={() => navigation.navigate("Login")} S>
            <Text style={styles.registerLink}> Sign in</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "contain",
  },
  container: {
    flex: 1,
  },
  header: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerPhoto: {
    borderBottomLeftRadius: 240,
    resizeMode: "cover",
    height: 300,
    width: "100%",
  },
  nameInput: {
    fontSize: 16,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 30,
    paddingHorizontal: 10,
    width: 250,
    borderColor: COLORS.gray,
    alignSelf: "center",
  },
  emailInput: {
    fontSize: 16,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,

    paddingHorizontal: 10,
    width: 250,
    borderColor: COLORS.gray,
    alignSelf: "center",
  },
  passwordInput: {
    fontSize: 16,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    width: 250,
    borderColor: COLORS.gray,
    alignSelf: "center",
  },
  signInButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    borderRadius: 5,
    width: 250,
    alignSelf: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: SIZES.medium,
  },
  SocialContainer: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
  },
  socialButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 5,
    alignSelf: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  socialButtonIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginLeft: 10,
  },
  socialButtonText: {
    color: "#40C1D0",
    fontWeight: "bold",
    fontSize: 14,
  },
  forgotPassword: {
    color: COLORS.black,
    fontSize: 12,
    marginTop: 10,
    fontWeight: "bold",
  },
  registerContainer: {
    flexDirection: "row",
  },
  registerLink1: {
    marginLeft: 100,
    fontSize: 12,
    textAlign: "center",
    marginTop: 20,
    fontWeight: "semibold",
  },
  registerLink: {
    color: COLORS.primary,
    fontSize: 12,
    textAlign: "center",
    marginTop: 20,
    fontWeight: "bold",
  },
});

export default Register;
