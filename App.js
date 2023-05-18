import { useCallback, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View, 
  Button, 
  TextInput, 
  StyleSheet, 
  FlatList
 } from 'react-native';
import {useFonts} from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import GoalItems from "./screens/GoalItems"

export default function App() {
  const [enterGoal, setEnterGoal] = useState("")
  const [courseGoal, setCourseGoal] = useState([])

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

  const onClick = () =>{
    setCourseGoal([...courseGoal, enterGoal])
  }

  const goalInput = (enterText)=>{
    setEnterGoal(enterText)
  }

  return (
    <View className="pt-20 w-[90%] mx-auto" onLayout={onLayoutRootView}>
      <View className="w-full flex flex-row justify-between items-center pb-6 border-b border-gray-100">
        <TextInput className="w-[75%]  p-[8px] border border-gray-100"
         style={styles.Thin}
          placeholder="Your Course Goal"
          onChangeText={goalInput} />
        <Button title="Add Goal" onPress={onClick}/>
      </View>
      <FlatList data={courseGoal} keyExtractor={(item, index)=>{return item.index}}
       renderItem={(itemData)=>{
        return <GoalItems itemData={itemData}/>
      }}/>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  Thin: {
    fontFamily: "Thin"
  },
  Medium: {
    fontFamily: "Medium"
  },
  SemiBold: {
    fontFamily: "SemiBold"
  },
  Italic: {
    fontFamily: "Italic"
  }
})