import AllMovie from "./all-movie"
import FavoriteMovie from "./favorite-movie"
import Profile from "./profile"
import Splash from "./splash"
import TrendingMovie from "./trending-moive"
import Login from "./login"


const screens = {
    list: [
        {
            name: "AllMovie",
            component: AllMovie,
        },
        {
            name: "FavoriteMovie",
            component: FavoriteMovie,
            isPrivate: true
        },
        {
            name: "Profile",
            component: Profile,
            isPrivate: true
        },
        {
            name: "TrendingMovie",
            component: TrendingMovie,
        },
        {
            name: "Login",
            component: Login
        },
        {
            name: "Splash",
            component: Splash
        },
    ],
    SplashScreen: Splash,
    LoginScreen: Login
}



export default screens;