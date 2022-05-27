import React, { useEffect, } from "react";
import { View, Text } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import firestore from '@react-native-firebase/firestore';


const Index = () => {
  useEffect(async() => {
    const users = await firestore().collection('favorite_movie').get();
    console.log("this is users", users.docs)
  },[])
  return (
    <View>
      <Text style={{ fontFamily: "Courgette-Regular", color: "blue", fontSize: 30 }}>We can test this screen first, is it running?</Text>
      <FontAwesome5 name="facebook" size={30} />
    </View>
  )
}

export default Index;