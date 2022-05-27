import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Pressable} from "react-native";
import movieAction from "../../middleware/movieAction.js";
import Layout from "../layout";
import Cards from "../../components/cards";
import DetailModal from "../../components/detail.js";


const Index = ({ navigation }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        (async () => {
            setMovies(await movieAction.getMovieList("now_playing"))
        })()
    }, []);

    if (movies == "") {
        return (
            <View>
                <Text>Loading dulu kak</Text>
            </View>
        )
    }
    return (
        <Layout navigation={navigation}>
            <ScrollView>
                <Pressable onPress={()=> navigation.navigate("Login")}><Text>Ke Login yuk</Text></Pressable>
                <Cards movies={movies}/>
            </ScrollView>
            
        </Layout>
    )
}


export default Index;



// List Color:
// #051367
// #2D31FA
// #5D8BF4
// #DFF6FF

