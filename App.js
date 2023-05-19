import { useCallback, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, FlatList, Text, Button } from 'react-native';
import {useFonts} from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import Goal from "./screens/Goal"
import GoalInput from "./screens/GoalInput"
import {styles} from "./Styles"

export default function App() {
  const [enterGoal, setEnterGoal] = useState("")
  const [courseGoal, setCourseGoal] = useState([])
  const [modalVisibility, setModalVisibility] = useState(false)

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
    setCourseGoal([...courseGoal, {text: enterGoal, id: Math.random().toString()}])
    setModalVisibility(false)
  }

  const goalInput = (enterText)=>{
    setEnterGoal(enterText)
  }

  const deleteInput = (id) =>{
    const copy = courseGoal.filter((item) => item.id !== id)
    setCourseGoal(copy)
  }

  return (
    <View className="mt-10 bg-blue-500 flex-1 w-[100%] mx-auto" onLayout={onLayoutRootView}>
      <View className="w-[90%] mx-auto mt-11">
        <Button title="Add New Goal" onPress={() => setModalVisibility(true)} />
      </View>
      {modalVisibility ? <GoalInput setModalVisibility={setModalVisibility} visible={modalVisibility} onClick={onClick} goalInput={goalInput} /> : null}
      <FlatList data={courseGoal} keyExtractor={(item)=>item.id}
       renderItem={({item})=>( 
        <Goal item={item} deleteInput={deleteInput}/>
      )}/>
    </View>
  );
}