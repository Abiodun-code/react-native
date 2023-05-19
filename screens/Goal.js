import React from "react"
import { View, Text, Pressable } from "react-native"
import {styles} from "../Styles"

const Goal = ({item, deleteInput}) =>{
  return(  
    <View className="w-[90%] mx-auto my-3 bg-white items-center" >
      <Pressable andriod_ripple={{ color: "red" }} onPress={deleteInput.bind(this, item.id)}>
        <Text className="text-lg py-4 font-[300] text-blue-500" style={styles.Medium} >{item.text}</Text>
      </Pressable>
    </View >
    
  )
}

export default Goal

