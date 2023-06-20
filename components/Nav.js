import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Calendar from './Calendar';
import Profile from './Profile';

const Stack = createNativeStackNavigator();

export default function Nav () {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{title: 'HOME'}}/>
                <Stack.Screen name="Profile" component={Profile} options={{title: "PROFILE"}} />
                <Stack.Screen name="Calendar" component={Calendar} options={{title:'CALENDAR'}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}