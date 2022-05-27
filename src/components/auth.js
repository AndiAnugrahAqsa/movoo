import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Index = ({children, title, navigation}) => {
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.heading}>{title}</Text>
                <Pressable
                    style={{}}
                    onPress={()=>navigation.goBack()}
                    >
                    <MaterialIcons name="close" size={27} />
                </Pressable>
            </View>
            <View>
                {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    heading: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#000",
        // paddingHorizontal: 15,
    }
})

export default Index;