import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import {Text, 
    Pressable, 
    StyleSheet, 
    ScrollView,
    StatusBar,
    useColorScheme,
    View,} from 'react-native';
import {
          Colors,
          DebugInstructions,
          Header,
          LearnMoreLinks,
          ReloadInstructions,
        } from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator();

export default function App () {
    return (
        <NavigationContainer>  
        <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <Header/>
        <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
        </Tab.Navigator>
        
        </ScrollView>
        </NavigationContainer>
    )
}