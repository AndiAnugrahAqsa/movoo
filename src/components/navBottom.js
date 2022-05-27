import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, TouchableHighlight } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Index = ({ navigation }) => {
    const handlePress = (component) => {
        navigation.navigate(component);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.nav} onPress={() => { handlePress("AllMovie") }}>
                <MaterialIcons name="view-list" color="#DFF6FF" size={25} />
                <Text style={styles.navText}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nav} onPress={() => { handlePress("TrendingMovie") }}>
                <MaterialCommunityIcons name="movie-open-star" color="#DFF6FF" size={25} />
                <Text style={styles.navText}>Trending</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nav} onPress={() => { handlePress("FavoriteMovie") }}>
                <MaterialIcons name="favorite" color="#DFF6FF" size={25} />
                <Text style={styles.navText}>My Favorite</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#051367",
        flexDirection: "row",
        height: 50,
    },
    nav: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    navText: {
        color: "#DFF6FF",
        fontWeight: "400"
    }
})

export default Index;