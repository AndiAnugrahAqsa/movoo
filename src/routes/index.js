import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from "../screens/all-movie"
import FavoriteScreen from "../screens/favorite-movie"
import Login from "../screens/login"
import Register from "../screens/register"

function Index() {
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();
    const HomeStack = () => (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Favorite" component={FavoriteScreen}/>
            <Stack.Screen name="Login" component={Login} options={{}}/>
            <Stack.Screen name="Register" component={Register} options={{}}/>
        </Stack.Navigator>
    )
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route})=>({
                    tabBarIcon: ({ focused, color, size })=> <FontAwesome5 name="facebook" size={30} color={color} />,
                    tabBarActiveTintColor: 'tomato',
                    // tabBarBackground: '051367',
                    tabBarBadgeStyle: {backgroundColor: "#051367"},
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false,
                    tabBarHideOnKeyboard: true
                    
                })}
            >
                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Trending" component={HomeScreen} />
                <Tab.Screen name="Favorite" component={HomeScreen} />
                {/* <Tab.Screen name="Login" component={Login} options={{}}/> */}
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Index;