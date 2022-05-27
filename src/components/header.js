import React from "react";
import { View, Text, StyleSheet } from "react-native"
import FontAwesomeIcon5 from 'react-native-vector-icons/FontAwesome5';

const Index = (props) => {
    const {children} = props;
    return (
        <View style={Styles.container}>
            <View>
                <Text style={Styles.text}>Movoo</Text>
            </View>
            <View>
                <FontAwesomeIcon5 name="user-circle" color="#DFF6FF" size={25}/>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: "#051367",
        justifyContent: "space-between",
        alignItems: "center",
        elevation: 20,
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#DFF6FF",
        fontFamily: ""
    }

})

export default Index;