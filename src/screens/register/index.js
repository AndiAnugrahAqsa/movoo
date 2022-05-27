import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Auth from "../../components/auth"
// import { signInWithGoogle } from "../../functions/firebase";
import { GoogleSignin } from '@react-native-google-signin/google-signin'

const Index = ({navigation}) => {
    const [userRegister, setUserRegister] = useState({ email: "", password: "", confirmPassword: "" })

    const handleRegisterWithEmailPassword = () => {
        console.log(userRegister);
        auth()
            .createUserWithEmailAndPassword(userRegister.email, userRegister.password)
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }

    const handleLoginWithGmail = async () => {
        GoogleSignin.configure({ webClientId: "95006859040-1sohcmsnirt2rms35mgktt0q95e5vs7i.apps.googleusercontent.com", offlineAccess: true });
        console.log("Jalan say");
        // onGoogleButtonPress()
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        console.log("userInfo", userInfo);
        if (!userInfo.idToken) {
            await GoogleSignin.signOut();
            return;
        }
        const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);
        console.log(await auth().signInWithCredential(googleCredential));
    }

    return (
        <Auth title="Register" navigation={navigation}>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.heading1}>Register with your email</Text>
                    <Text style={styles.label}>Email :</Text>
                    <TextInput style={styles.textInput} placeholder="" onChangeText={(value) => setUserRegister({ ...userRegister, email: value })} />
                    <Text style={styles.label}>Password :</Text>
                    <TextInput style={styles.textInput} placeholder="" onChangeText={(value) => setUserRegister({ ...userRegister, password: value })} />
                    <Text style={styles.label}>Confirm password :</Text>
                    <TextInput style={[styles.textInput, {marginBottom: 0}]} placeholder="" onChangeText={(value) => setUserRegister({...userRegister, confirmPassword: value})} />
                    {userRegister.password !== userRegister.confirmPassword &&
                        <Text style={styles.errorText}>Make sure the confirm password is same with the password</Text>
                    }
                    <TouchableOpacity style={styles.loginButton} onPress={handleRegisterWithEmailPassword}>
                        <Text style={styles.registerText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Auth>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        height: "90%",
        marginHorizontal: 45,
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
    errorText: {
        color: "red"
    },
    loginButton: {
        backgroundColor: "#051367",
        padding: 10,
        borderRadius: 5,
        width: 100,
        marginTop: 50,
        alignSelf: "center"
    },
    registerText: {
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
        marginBottom: 50
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