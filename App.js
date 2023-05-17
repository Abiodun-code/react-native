import { useCallback, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, FlatList } from 'react-native';
import {useFonts} from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Olaroungbe"
    },
    {
      id: 2,
      name: "Jamiu"
    }
  ])

  const [fontsLoaded] = useFonts({
    "Italic": require("./assets/fonts/Poppins-Italic.ttf"),
    "Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Thin": require("./assets/fonts/Poppins-Thin.ttf"),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  return (
    <View className="w-full flex-1 justify-center bg-white items-center" onLayout={onLayoutRootView}>
      <Text className="pb-4" style={{fontFamily: "Thin"}}>Hello React Native</Text>
      {/* <FlatList/> */}
      <Button title="Click Me" className="w-full text-black"/>
      <StatusBar style="auto" />
    </View>
  );
}