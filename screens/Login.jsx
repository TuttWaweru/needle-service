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
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES } from "../constants";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    // Implement email sign-in logic here
  };

  const handleForgotPassword = () => {
    // Implement navigation to the "Reset Password" screen
    navigation.navigate("ResetPassword");
  };

  const handleGmailLogin = async () => {
    // Implement Gmail login logic here using OAuth
    // You can use expo-auth-session and expo-app-auth for this
    const redirectUrl = AuthSession.getRedirectUrl();
    const result = await AuthSession.startAsync({
      authUrl: `YOUR_GMAIL_OAUTH_URL&redirect_uri=${encodeURIComponent(
        redirectUrl
      )}`,
    });

    // Handle the result (contains the access token, etc.)
    console.log(result);
  };

  const handleFacebookLogin = async () => {
    // Implement Facebook login logic here using OAuth
    // You can use expo-auth-session and expo-app-auth for this
    const redirectUrl = AuthSession.getRedirectUrl();
    const result = await AuthSession.startAsync({
      authUrl: `YOUR_FACEBOOK_OAUTH_URL&redirect_uri=${encodeURIComponent(
        redirectUrl
      )}`,
    });

    // Handle the result (contains the access token, etc.)
    console.log(result);
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

        <TextInput
          style={styles.emailInput}
          value={email}
          placeholder="Enter Email"
          onChangeText= {(text)=> setEmail(text)}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.passwordInput}
          value={password}
          onChangeText= {(text)=> setPassword(text)}
          placeholder="Enter Password"
          secureTextEntry= {true}
        />
         <View style={{margin:10,marginLeft:60, marginRight:60, flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
       <TouchableOpacity onPress={handleForgotPassword}>
          <Text >Keep me logged in</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text >Forgot Password?</Text>
        </TouchableOpacity>

        
        </View>
        {/*<TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>*/}
        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => navigation.navigate("AccountSetupScreen")}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      

        <View style={styles.SocialContainer}>
          {/*<TouchableOpacity style={styles.socialButtonContainer} onPress={handleGmailLogin}>*/}
          <TouchableOpacity
            style={styles.socialButtonContainer}
            onPress={() => navigation.navigate("AccountSetupScreen")}
          >
            <Image
              source={require("../assets/images/google_logo.png")}
              style={styles.socialButtonIcon}
            />
            <Text style={styles.socialButtonText}>Gmail</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialButtonContainer}
            onPress={handleFacebookLogin}
          >
            <Image
              source={require("../assets/images/facebook_logo.png")}
              style={styles.socialButtonIcon}
            />
            <Text style={styles.socialButtonText}>Facebook</Text>
          </TouchableOpacity>
        </View>

        {/* Link to registration screen */}
        <View style={styles.registerContainer}>
          <Text style={styles.registerLink1}>Don't have an account?</Text>

          <TouchableOpacity onPress={() => navigation.navigate("Register")} S>
            <Text style={styles.registerLink}> Register</Text>
          </TouchableOpacity>
        </View>
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

  emailInput: {
    fontSize:16,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    marginTop: 30,
    paddingHorizontal: 10,
    width: 250,
    borderColor: COLORS.gray,
    alignSelf: "center",
  },
  passwordInput: {
    fontSize:16,
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

export default Login;
