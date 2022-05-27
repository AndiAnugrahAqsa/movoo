import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Index = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Movoo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#051367",
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        fontSize: 80,
        color: "#DFF6FF",
        fontFamily: "Raleway-VariableFont_wght"
    }
})

export default Index;