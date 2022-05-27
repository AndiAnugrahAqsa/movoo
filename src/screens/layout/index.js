import React from "react";
import Header from "../../components/header";
import NavBottom from "../../components/navBottom";
import { View, Dimensions, StatusBar } from "react-native"

const Index = ({ children, navigation }) => {
    const windowHeight = Dimensions.get('window').height;
    console.log(typeof (windowHeight));
    return (
        <View style={{height: windowHeight, display: "flex", flex: 1, position: "relative"}}>
            <StatusBar
                animated={true}
                backgroundColor="#040c3d"
            />
            <Header />
            <View style={{ height: windowHeight-124 }}>{children}</View>
            <NavBottom navigation={navigation}/>
        </View >
    )
}

export default Index;