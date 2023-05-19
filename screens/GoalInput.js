import React from "react"
import {
  View,
  Button,
  TextInput,
  Modal,
  Image
} from "react-native";
import {styles} from "../Styles"

const GoalInput = ({ goalInput, onClick, visible, setModalVisibility }) => {
  return (
    <Modal visible={visible} animationType="slide">
      <View className="w-full bg-blue-500 flex-1 justify-center items-center pb-6">
        <Image source={require("../assets/images/splash.png")} className="w-[200px] h-[100px]"/>
        <TextInput className="w-[90%] bg-gray-100  p-[8px] border rounded-xl border-gray-100"
          style={styles.SemiBold}
          placeholder="Your Course Goal"
          onChangeText={goalInput} />
        <View className="flex flex-row pt-8">
          <View className="w-[40%] mr-3">
            <Button title="Add Goal" color="gray" onPress={onClick} />
          </View>
          <View className="w-[40%]">
            <Button title="Cancel" color="blue" onPress={() =>setModalVisibility(false)} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput