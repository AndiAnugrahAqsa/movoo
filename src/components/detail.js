import React, {useEffect, useState} from "react"
import { View, Text, Pressable, StyleSheet, Image, Dimensions, ScrollView, ImageBackground } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomedModal from "./customedModal"
import getImageUrl from "../functions/getImageUrl";
import movieAction from "../middleware/movieAction";

const Index = ({isShowModal, toggle, movieId}) => {
    const [movie, setMovie] = useState({});
    const [showFavoriteButton, setShowFavoriteButton] = useState(true);

    useEffect(() => {
        console.log("movieId", movieId);
        console.log("isShowModal", isShowModal);
        (async () => {
          setMovie(await movieAction.getMovieById(movieId))
        })()
      }, [movieId]);

      if (!movie.id) {
        return (
            <View>
                <Text>Loading dulu kak</Text>
            </View>
            )
        }

    return (
        <CustomedModal isShowModal={isShowModal} toggle={toggle}>
            <ImageBackground source={{ uri: getImageUrl(movie.poster_path) }} resizeMode="cover">
              <View style={styles.modalContent} onTouchStart={()=>setShowFavoriteButton(!showFavoriteButton)}>
                <ScrollView>
                    <View style={{padding: 35}}>
                        <Image style={styles.image} source={{ uri: getImageUrl(movie.poster_path) }} />
                        <Text style={styles.title}>{movie.title}</Text>
                        <Text style={[styles.textStyle, styles.tagline]}>"{movie.tagline}"</Text>
                        <View style={[styles.underBorder, styles.aboutHeading]}>
                          <Text style={[styles.textStyle, styles.heading2]}>About</Text>
                          <Text style={[styles.textStyle, styles.status]}>{movie.status}</Text>
                        </View>
                        <View style={[styles.flexRow, {justifyContent: "space-between"}]}>
                          <View>
                            <View style={styles.flexRow}>
                              <FontAwesome5 name="money-bill" color="red" size={20} style={styles.asideIcon} />
                              <Text style={[styles.textStyle]}>{movie.budget}</Text>
                            </View>
                            <View style={styles.flexRow}>
                              <FontAwesome5 name="money-bill" color="green" size={20} style={styles.asideIcon}/>
                              <Text style={[styles.textStyle]}>{movie.revenue}</Text>
                            </View>
                            <View style={styles.flexRow}>
                              <MaterialIcons name="star-rate" color="#FFFF3E" size={20} style={styles.asideIcon}/>
                              <Text style={[styles.textStyle]}>{movie.vote_average}</Text>
                            </View>
                            <View style={styles.flexRow}>
                              <MaterialIcons name="person" color="#DFF6FF" size={20} style={styles.asideIcon}/>
                              <Text style={[styles.textStyle]}>{movie.vote_count}</Text>
                            </View>
                            <View style={styles.flexRow}>
                              <MaterialIcons name="event-available" color="#DFF6FF" size={20} style={styles.asideIcon}/>
                              <Text style={[styles.textStyle]}>{movie.release_date}</Text>
                            </View>
                          </View>
                          <View>
                            <Text style={[styles.textStyle]}>Genre: </Text>
                            {movie.genres.map((genre, index)=>(
                              <View style={styles.flexRow}>
                                <MaterialIcons name="fiber-manual-record" color="#ffb34e" size={20} style={styles.asideIcon}/>
                                <Text key={index} style={[styles.textStyle]}>{genre.name}</Text>
                              </View>
                            ))}
                          </View>
                        </View>
                        <Pressable style={styles.flexRow}>
                          <MaterialIcons name="link" color="#49edca" size={30} style={styles.asideIcon}/>
                          <Text style={{color: "#49edca"}}>{movie.homepage}</Text>
                        </Pressable>
                        
                        
                        <Text style={[styles.textStyle, styles.heading2, styles.underBorder]}>Overview</Text>
                        <Text style={[styles.textStyle, styles.underBorder]}>{movie.overview}</Text>
                        <Text style={[styles.textStyle, styles.heading2, styles.underBorder]}>Producer</Text>
                        <View style={styles.producerContainer}>
                        {movie.production_companies.map((producer, index)=>(
                            <View key={index} style={styles.producer}>
                                {producer.logo_path ?
                                  <Image style={styles.logo} source={{ uri: getImageUrl(producer.logo_path) }} /> :
                                  <MaterialIcons name="image" color="#051367" size={25}/>
                                }
                                <Text style={[{textAlign: "center", color: "#0207249f"}]}>{producer.name}</Text>
                            </View>
                        ))}
                        </View>
                    </View>
                </ScrollView>
              </View>
              {showFavoriteButton && 
                <Pressable onPress={()=>console.log("jalan dongharusnya")} style={styles.favoriteButton}>
                    {/* <MaterialIcons name="favorite-border" size={30} /> */}
                    <MaterialIcons name="favorite" color="red" size={30} />
                </Pressable>
                }
            </ImageBackground>
        </CustomedModal>
    )
}

const styles = StyleSheet.create({
    modalContent: {
      backgroundColor: "#0207249f",
      position: "relative",
      height: "100%"
    },
    favoriteButton: {
      backgroundColor: "#ffffff",
      position: "absolute",
      width: 50,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      top: Dimensions.get("window").height - 190,
      right: 10,
      borderRadius: 25
    },
    image: {
      minWidth: 150,
      minHeight: 300,
    },
    title: {
      fontWeight: "bold",
      marginTop: 20,
      fontSize: 22,
      textAlign: "center",
      color: "#ffb34e",
    },
    tagline: {
      fontSize: 18,
      textAlign: "center",
      fontWeight: "600",
      marginBottom: 20
    },
    aboutHeading: {
      flexDirection: "row",
      alignItems: "baseline",
      justifyContent: "space-between"
    },
    status: {
      color: "#49edca"
    },
    heading2: {
      fontWeight: "bold",
      marginBottom: 5,
      fontSize: 18,
      color: "#ffb34e",
      marginTop: 15
    },
    textStyle: {
      color: "#DFF6FF",
    },
    underBorder:{
      paddingBottom: 5,
      borderBottomWidth: 2,
      borderBottomColor: "#DFF6FF5f"
    },
    flexRow: {
      marginVertical: 5,
      flexDirection: "row",
      alignItems: "center"
    }, 
    asideIcon: {
      marginEnd: 5
    },
    producerContainer: {
        alignItems: "center",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    producer: {
        alignItems: "center",
        margin: 10,
        width: "43%",
        backgroundColor: "white",
        padding: 10
    },
    logo: {
        width: 90,
        minHeight: 20,
        resizeMode: "contain"
    },
});

export default Index;

// {
//     "adult": false,
//     "backdrop_path": "/hQ4pYsIbP22TMXOUdSfC2mjWrO0.jpg",
//     "belongs_to_collection": null,
//     "budget": 0,
//     "genres": [
//         {"id": 18, "name": "Drama"},
//         {"id": 35, "name": "Comedy"},
//         {"id": 80, "name": "Crime"}
//     ],
//     "homepage": "",
//     "id": 2,
//     "imdb_id": "tt0094675",
//     "original_language": "fi",
//     "original_title": "Ariel",
//     "overview": "Taisto Kasurinen is a Finnish coal miner whose father has just committed suicide and who is framed for a crime he did not commit. In jail, he starts to dream about leaving the country and starting a new life. He escapes from prison but things don't go as planned...",
//     "popularity": 10.978,
//     "poster_path": "/ojDg0PGvs6R9xYFodRct2kdI6wC.jpg",
//     "production_companies": [{
    // "id": 2303, "logo_path": null,
//     "name": "Villealfa Filmproductions",
//     "origin_country": "FI"}],
//     "production_countries": [{"iso_3166_1": "FI", "name": "Finland"}],
//     "release_date": "1988-10-21",
//     "revenue": 0,
//     "runtime": 73,
//     "spoken_languages": [{"english_name": "Finnish", "iso_639_1": "fi", "name": "suomi"}],
//     "status": "Released",
//     "tagline": "",
//     "title": "Ariel",
//     "video": false,
//     "vote_average": 6.8,
//     "vote_count": 159
// }


// List Color:
// #051367
// #2D31FA
// #5D8BF4
// #DFF6FF