import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, Image, Dimensions, Pressable } from "react-native";
import getImageUrl from "../functions/getImageUrl";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import movieAction from "../middleware/movieAction";
import DetailModal from "./detail";
import useShowModal from "../functions/useShowModal";


const Index = ({movies}) => {
    const [genres, setGenres] = useState([]);
    const [movieId, setMovieId] = useState(null);
    const {isShowModal, toggle } = useShowModal();

    useEffect(() => {
        (async()=>{
            setGenres( await movieAction.getGenreList())
        })();
    }, [setGenres]);

    const getGenre = (id) => {
        const genre = genres.find((genre)=>genre.id === id) || {};
        return genre.name
    }

    return (
        <View style={Styles.cardContainer}>
            {movies.map((movie, index) => (
                <Pressable onPress={()=>{setMovieId(movie.id); toggle(); console.log("jalankahh");}}>
                    <View style={Styles.card} key={index}>
                        <Image style={Styles.cardImage} source={{ uri: getImageUrl(movie.poster_path) }} />
                        <View style={Styles.cardContent}>
                            <Text style={Styles.cardTitle}>{movie.title}</Text>
                            <View style={Styles.additionalInfoContainer}>
                                <View style={Styles.additionalInfo}>
                                    <MaterialIcons name="star-rate" color="#FFFF3E" size={20}/>
                                    <Text style={{}}>{movie.vote_average}</Text>
                                </View>
                                <View style={Styles.additionalInfo}>
                                    <MaterialIcons name="event-available" color="#051367" size={20}/>
                                    <Text style={{}}>{movie.release_date}</Text>
                                </View>
                            </View>
                            <View style={Styles.genreContainer}>
                                {movie.genre_ids.map((genreId, index)=> (
                                    <Text style={Styles.genre} key={index}>{getGenre(genreId)}</Text>
                                ))}
                            </View>
                        </View>
                    </View>
                </Pressable>
            ))}
            <DetailModal isShowModal={isShowModal} toggle={toggle} movieId={movieId}/>
            
        </View>
    );
}

const Styles = StyleSheet.create({
    cardContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "stretch"
    },
    card: {
        backgroundColor: "#fff",
        width: Dimensions.get("window").width / 2 - 14,
        overflow: "hidden",
        margin: 7,
        elevation: 7,
        borderRadius: 10,
    },
    cardImage: {
        width: "100%",
        height: 200,
        resizeMode: "stretch"
    },
    cardContent: {
        padding: 6,
    },
    cardTitle: {
        fontWeight: "bold",
        fontSize: 18,
        color: "black",
        fontFamily: "Satisfy-Regular"
    },
    additionalInfoContainer: {
        marginVertical: 5,
        flexDirection:  "row",
        justifyContent: "space-between"
    },
    additionalInfo: {
        flexDirection: "row"
    },
    genreContainer: {
        flexWrap: "wrap",
        flexDirection: "row",
        marginVertical: 5
    },
    genre: {
        backgroundColor: "#ffb34e",
        margin: 2,
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 5,
        color: "white"
    }

})

export default Index;

// {
//     "adult": false,
//     "backdrop_path": "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
//     "genre_ids": [28, 12, 878],
//     "id": 634649,
//     "media_type":
//     "movie",
//     "original_language": "en",
//     "original_title": "Spider-Man: No Way Home",
//     "overview": "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
//     "popularity": 6190.969,
//     "poster_path": "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
//     "release_date": "2021-12-15",
//     "title": "Spider-Man: No Way Home",
//     "video": false,
//     "vote_average": 8.2,
//     "vote_count": 11452
// }