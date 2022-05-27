import React, { useEffect, useState } from "react";
import { View, Text, ScrollView} from "react-native";
import movieAction from "../../middleware/movieAction.js";
import Layout from "../layout";
import Cards from "../../components/cards";

// import { GenreContext } from "../../../App.js";

const Index = ({ navigation, route }) => {
    const [movies, setMovies] = useState([]);

    

    useEffect(() => {
        // console.log("testingg", genres);

        (async () => {
            setMovies(await movieAction.getMovieList("popular"))
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

