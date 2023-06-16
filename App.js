import React from 'react';
import Navigation from './Navigation';
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


export default function App () {
    return (
        <>  
        <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <Header/>
        {/* <Navigation /> */}
        <View>
            <Home />
        </View>
        </ScrollView>
        </>
    )
}