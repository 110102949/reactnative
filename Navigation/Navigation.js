import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailPage from '../Screens/DetailPage'
import App from '../App';




const screen=()=>
{
    const Stackscreen=createStackNavigator();
    return(
        <NavigationContainer>
        <Stackscreen.Navigator initialRouteName='firstscreen'>
        <Stackscreen.Screen  name="firstscreen"  component={App} options={{headerTitle:'Search'}} ></Stackscreen.Screen>
        <Stackscreen.Screen  name="Detailpage" component={DetailPage} options={{headerTitle:'Details'}} ></Stackscreen.Screen>
        </Stackscreen.Navigator>
        </NavigationContainer>
    );
}

export default screen


