import React from 'react';
import {Pressable, Text, View} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home ({navigation}) {
    return (

        <SafeAreaView>
            <Text>Welcome To Canceled</Text>
            <Text>An Introverts Best Friend</Text>
            <Text>A FullStack Application by Grace & Kimberly</Text>
            <Pressable onPress={() => navigation.navigate('Profile')}>
                <Text>Profile</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Calendar')}>
                <Text>Calendar</Text>
            </Pressable>
        </SafeAreaView>
    )
}