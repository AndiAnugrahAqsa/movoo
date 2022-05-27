import React, {useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import screens from "../screens/index";
import PrivateRoute from "./privateRoute"
import Stack from "./stack";

const Index = () => {

    const [authentication, setAuthentication] = useState(false)

    return (
        <NavigationContainer>
          <Stack.Navigator defaultScreenOptions={screens.SplashScreen} screenOptions={{headerShown: false}}>
          {screens.list.map((screen, index)=>(
            <Stack.Screen name={screen.name} key={index} component={!screen.isPrivate ? screen.component : authentication ? screen.component : screens.LoginScreen}/>
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default Index;