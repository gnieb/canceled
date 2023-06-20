import React from 'react';
import {Text, View} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home ({navigation}) {
    return (

        <SafeAreaView>
            <Text>Welcome To Canceled</Text>
            <Text>An Introverts Best Friend</Text>
            <Text>A FullStack Application by Grace & Kimberly</Text>
        </SafeAreaView>
    )
}