// App.js
import React from 'react';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Cart,StartLogin,Register, Home,Chat,OfferScreen,OpenChat,Login, ProductDetails, AccountSetupScreen, SplashScreen,Search,OnboardingScreen,Welcome,OTPScreen,OTPlogin,OTPverify, AllCategoriesScreen, Profile} from './screens';
import { GestureHandlerRootView } from 'react-native-gesture-handler';



const Stack = createNativeStackNavigator();

const MainStack = () => { 
  const [fontsloaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  
  })
  const onLayoutRootView = useCallback(async() => {
    if(fontsloaded){
      await SplashScreen.hideAsync();
    }
  }, [fontsloaded] );
  
  if(!fontsloaded){
    return null;
  } 

  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <Stack.Navigator initialRouteName="Splash" headerMode="none"  screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      
      <Stack.Screen name="Welcome" component={Welcome}/>
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen}/>
      <Stack.Screen name="OTPlogin" component={OTPlogin}/>
      <Stack.Screen name="OTPverify" component={OTPverify}/>
      <Stack.Screen name="OTPScreen" component={OTPScreen}/>
      <Stack.Screen name="AccountSetupScreen" component={AccountSetupScreen}/>
      <Stack.Screen name="Home" component={Home} />
     <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="OpenChat" component={OpenChat} />
      <Stack.Screen name="OfferScreen" component={OfferScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="StartLogin" component={StartLogin} />
      <Stack.Screen name="Register" component={Register} />

      
    </Stack.Navigator>
    </GestureHandlerRootView>
    
   
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default App;
