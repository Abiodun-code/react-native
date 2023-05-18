import React from "react"
import {View, Text, StyleSheet} from "react-native"

const GoalInput = (Prop) =>{
  return(
    <View className="my-3 bg-blue-200 py-4 items-center">
      <Text className="text-lg font-[300]" style={styles.Medium} >{Prop.itemData.item}</Text>
    </View>
  )
}

export default GoalInput

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