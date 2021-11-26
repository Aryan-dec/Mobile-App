import React from 'react';
import { Appearance, StyleSheet, Image, Linking, Button, View, StatusBar, SafeAreaView, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WebView } from 'react-native-webview';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouse } from '@fortawesome/pro-duotone-svg-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RenderHtml from 'react-native-render-html';
import { useHeaderHeight } from '@react-navigation/elements';
StatusBar.setBarStyle('light-content', true);
StatusBar.setBackgroundColor("#0996AE")

if (Platform.OS === 'ios') {
    global.headerArea = false
} else {
    global.headerArea = true
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText: {
        display: "flex",
        justifyContent: 'space-between',
        marginTop: 50,
        position: "absolute",
        bottom: 25,
        width: '100%',
        padding: 0
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});


const MyTheme = {
  dark: true,
    colors: {
        primary: '#2970cc',
        background: '#0f1d2d',
        card: 'rgb(23, 23, 23)',
        text: 'rgb(255, 255, 255)',
        border: 'rgb(32, 32, 32)',
        notification: 'rgb(255, 69, 58)',
    },
};

function DashboardScreen({ navigation }) {
  return (
      <SafeAreaView style={{ flex: 1 }}>
          <WebView
              allowsBackForwardNavigationGestures
              useWebKit={true}
              originWhitelist={['*']}
              allowsInlineMediaPlayback={true}
              source={{
                  uri: 'https://falixnodes.net/blog-raw/'
              }}
          />
      </SafeAreaView>
  );
}

function ClientScreen({ navigation }) {
  return (
      <SafeAreaView style={{ flex: 1 }}>
        <WebView
            allowsBackForwardNavigationGestures
            useWebKit={true}
            originWhitelist={['*']}
            allowsInlineMediaPlayback={true}
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
            useWebKit={true}
            originWhitelist={['*']}
            allowsInlineMediaPlayback={true}
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
                useWebKit={true}
                originWhitelist={['*']}
                allowsInlineMediaPlayback={true}
                source={{
                    uri: 'https://help.falixnodes.net'
                }}
            />
        </SafeAreaView>
    );
}

function aboutScreen({ navigation }) {
    return (
        <View style={{ width: '75%', flex: 1, justifyContent: "center", alignSelf: "center" }}>
            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>FalixNodes App v2.0 Alpha</Text>
            <Text style={{ fontSize: 14, color: 'white' }}>You're currently using an alpha version of the app, therefore it may have bugs.</Text>
            <View style={styles.fixToText}>
                <Button
                    title={'Discord'}
                    backgroundColor={'#2970cc'}
                    onPress={ ()=>{ Linking.openURL('https://discord.gg/FalixNodes')}}
                />
                <Button
                    title={'GitHub'}
                    backgroundColor={'#2970cc'}
                    onPress={ ()=>{ Linking.openURL('https://github.com/FalixNodes-Software/Mobile-App/')}}
                />
                <Button
                    title={'Report Bug'}
                    backgroundColor={'#2970cc'}
                    onPress={ ()=>{ Linking.openURL('https://github.com/FalixNodes-Software/Mobile-App/issues')}}
                />
            </View>
        </View>
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

                if (route.name === 'News') {
                  iconName = focused
                      ? 'ios-newspaper'
                      : 'ios-newspaper-outline';
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

                  if (route.name === 'Beta') {
                      iconName = focused
                          ? 'ios-bug'
                          : 'ios-bug-outline';
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
          <Tab.Screen name="News" component={DashboardScreen} options={{headerShown: headerArea}}/>
          <Tab.Screen name="Client Area" component={ClientScreen} options={{headerShown: headerArea}} />
          <Tab.Screen name="Servers" component={ServersScreen} options={{headerShown: headerArea}} />
            <Tab.Screen name="Help Center" component={HelpScreen} options={{headerShown: headerArea}} />
            <Tab.Screen name="Beta" component={aboutScreen} options={{headerShown: false}} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}