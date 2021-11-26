import React from 'react';
import { Appearance, StyleSheet, Image, Button, View, StatusBar, SafeAreaView, Text, Alert } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WebView } from 'react-native-webview';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouse } from '@fortawesome/pro-duotone-svg-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useHeaderHeight } from '@react-navigation/elements';
StatusBar.setBarStyle('light-content', true);
StatusBar.setBackgroundColor("#0996AE")

const MyTheme = {
  dark: false,
    colors: {
        primary: '#2970cc',
        background: 'black',
        card: 'rgb(23, 23, 23)',
        text: 'rgb(255, 255, 255)',
        border: 'rgb(32, 32, 32)',
        notification: 'rgb(255, 69, 58)',
    },
};

const styles = StyleSheet.create({
    icon: {
        color: '#2970cc',
    }
});

function DashboardScreen({ navigation }) {
  return (
      <SafeAreaView>
          <FontAwesomeIcon style={ styles.icon } icon={ faHouse } />
      </SafeAreaView>
  );
}

function ClientScreen({ navigation }) {
  return (
      <SafeAreaView style={{ flex: 1 }}>
        <WebView
            allowsBackForwardNavigationGestures
            source={{
              uri: 'https://client.falixnodes.net'
            }}
        />
      </SafeAreaView>
  );
}

function ServersScreen({ navigation }) {
  return (
      <SafeAreaView style={{ flex: 1 }}>
        <WebView
            allowsBackForwardNavigationGestures
            source={{
              uri: 'https://panel.falixnodes.net'
            }}
        />
      </SafeAreaView>
  );
}

function HelpScreen({ navigation }) {
  return (
      <SafeAreaView style={{ flex: 1 }}>
        <WebView
            allowsBackForwardNavigationGestures
            source={{
              uri: 'https://help.falixnodes.net'
            }}
        />
      </SafeAreaView>
  );
}
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
      <NavigationContainer theme={MyTheme}>
        <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = focused
                      ? 'ios-home'
                      : 'ios-home-outline';
                } else if (route.name === 'Settings') {
                  iconName = focused ? 'ios-list-box' : 'ios-list';
                }

                if (route.name === 'Client Area') {
                  iconName = focused
                      ? 'ios-albums'
                      : 'ios-albums-outline';
                } else if (route.name === 'Settings') {
                  iconName = focused ? 'ios-list-box' : 'ios-list';
                }

                if (route.name === 'Servers') {
                  iconName = focused
                      ? 'ios-list'
                      : 'ios-list-outline';
                } else if (route.name === 'Settings') {
                  iconName = focused ? 'ios-list-box' : 'ios-list';
                }

                if (route.name === 'Help Center') {
                  iconName = focused
                      ? 'ios-help-circle'
                      : 'ios-help-circle-outline';
                } else if (route.name === 'Settings') {
                  iconName = focused ? 'ios-list-box' : 'ios-list';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: '#2970cc',
              tabBarInactiveTintColor: 'gray',
            })}
        >
          <Tab.Screen name="Home" component={DashboardScreen} options={{headerShown: false}}/>
          <Tab.Screen name="Client Area" component={ClientScreen} options={{headerShown: false}} />
          <Tab.Screen name="Servers" component={ServersScreen} options={{headerShown: false}} />
          <Tab.Screen name="Help Center" component={HelpScreen} options={{headerShown: false}} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}