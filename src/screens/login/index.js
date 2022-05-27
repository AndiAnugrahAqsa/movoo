import React from "react";
import { View, Text, Pressable, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native"
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Auth from "../../components/auth"
// import { signInWithGoogle } from "../../functions/firebase";
import { GoogleSignin } from '@react-native-google-signin/google-signin'

const Index = ({navigation}) => {

    const handleLoginWithEmailPassword = () => {

    }

    const handleLoginWithGmail = async() => {
        GoogleSignin.configure({webClientId: "95006859040-1sohcmsnirt2rms35mgktt0q95e5vs7i.apps.googleusercontent.com",offlineAccess: true});
        console.log("Jalan say");
        // onGoogleButtonPress()
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        console.log("userInfo", userInfo);
        if(!userInfo.idToken) {
            await GoogleSignin.signOut();
            return;
        }
        const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);
        console.log(await auth().signInWithCredential(googleCredential));
    }

    return (
        <Auth title="Login" navigation={navigation}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.emailLoginContainer}>
                        <Text style={styles.heading1}>Login with email</Text>
                        <Text style={styles.label}>Email :</Text>
                        <TextInput style={styles.textInput} placeholder=""/>
                        <Text style={styles.label}>Password :</Text>
                        <TextInput style={styles.textInput} placeholder=""/>
                        <TouchableOpacity style={styles.loginButton} onPress={handleLoginWithEmailPassword}>
                            <Text style={styles.loginText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{alignItems: "center"}}>
                        <Text>or sign in with :</Text>
                        <View style={styles.loginProvider}>
                            <FontAwesome5.Button style={styles.loginProviderButton} name="google" color="white" backgroundColor="red" onPress={handleLoginWithGmail}>
                                <Text style={{color: "white", fontWeight: "bold", fontSize: 16}}>Gmail</Text>
                            </FontAwesome5.Button>
                        </View>
                        <View style={{flexDirection: "row", marginTop: 60}}>
                            <Text style={{fontSize: 16}}>
                                Haven't had an account?
                            </Text>
                            <Pressable onPress={()=> navigation.navigate("Register")}><Text style={{color: "red", fontSize: 16}}> Register here</Text></Pressable>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </Auth>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "90%",
        marginTop: 40,
        alignItems: "center",
        justifyContent: "center"
    },
    textInput: {
        borderColor: "#051367",
        borderBottomWidth: 3,
        minWidth: 300,
        height: 40,
        marginBottom: 25
    },
    label: {
        fontWeight: "bold",
        fontSize: 16,
    },
    loginButton: {
        backgroundColor: "#051367",
        padding: 10,
        borderRadius: 5,
        width: 100,
        marginTop: 20,
        marginBottom: 50,
        alignSelf: "center"
    },
    loginText: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#DFF6FF",
        textAlign: "center",
        
    },
    heading1: {
        fontWeight: "bold",
        fontSize: 24,
        color: "#051367",
        textAlign: "center",
        marginBottom: 40
    },
    loginProvider: {
        marginTop: 20,
    },
    loginProviderButton: {
        width: 100,
        padding: 10
    }
})

export default Index;

// List Color:
// #051367
// #2D31FA
// #5D8BF4
// #DFF6FF