import * as React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { KeyboardAwareScrollView } from "@codler/react-native-keyboard-aware-scroll-view";

const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
