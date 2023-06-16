import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';

const Tab = createMaterialTopTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: 'powderblue' },
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Home}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="Notifications"
        component={Home}
        options={{ tabBarLabel: 'Updates' }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: 'Profile' }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}




