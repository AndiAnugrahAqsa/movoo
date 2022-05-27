import React from "react";
import Stack from "./stack";

const PrivateRoute = (props) => {
    const {name, key, component} = props;
    console.log("jalan kah??");
    return <Stack.Screen name={name} key={key} component={component}/>
}

export default PrivateRoute;