// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth, signInWithRedirect, getRedirectResult, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {

//   apiKey: "AIzaSyAXdtNIk9fWBpXgKmtFuZbTSy54RPDAdLg",

//   authDomain: "movoo-66c7d.firebaseapp.com",

//   projectId: "movoo-66c7d",

//   storageBucket: "movoo-66c7d.appspot.com",

//   messagingSenderId: "95006859040",

//   appId: "1:95006859040:web:640e99a09aeab6d8650145",

//   measurementId: "G-W9TWM1N6E5"

// };

// // Initialize Firebase

// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// const auth = getAuth();

// const provider = new GoogleAuthProvider();

// export const signInWithGoogle = () => {
//   signInWithRedirect(auth, provider);
//   getRedirectResult(auth)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access Google APIs.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;

//     // The signed-in user info.
//     const user = result.user;
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });
// }


// import { GoogleSignin } from '@react-native-google-signin/google-signin';

// GoogleSignin.configure({
//   webClientId: '',
// });

import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export async function onGoogleButtonPress() {
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  console.log(idToken);
  console.log(googleCredential);
  console.log(auth().signInWithCredential(googleCredential));
  return auth().signInWithCredential(googleCredential);
}