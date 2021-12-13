import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import { BlurView } from 'expo-blur';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import AboutScreen from '../screens/AboutScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import NewsScreen from "../screens/News";
import ClientScreen from "../screens/Client";
import GamePanelScreen from "../screens/Game";
import HelpScreen from "../screens/Help";
import WebView from 'react-native-webview';
import { useRef } from "react";

if (Platform.OS === 'ios') {
    global.headerArea = false
} else {
    global.headerArea = false
}

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();
function RootNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    
    <BottomTab.Navigator
      initialRouteName="News"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="News"
        component={NewsScreen}
        options={({ navigation }: RootTabScreenProps<'News'>) => ({
          title: 'News',
          tabBarIcon: ({ color }) => <FontAwesome5 name="newspaper" size={24} color="white" />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('About')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={20}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Client Area"
        component={ClientScreen}
        options={{
          title: 'Client Area',
            headerShown: headerArea,
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Game Panel"
        component={GamePanelScreen}
        options={{
          title: 'Game Panel',
            headerShown: headerArea,
          tabBarIcon: ({ color }) => <TabBarIcon name="sliders" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Help Center"
        component={HelpScreen}
        options={{
          title: 'Help Center',
            headerShown: headerArea,
          tabBarIcon: ({ color }) => <TabBarIcon name="question-circle" color={color} />,
        }}
      />
    </BottomTab.Navigator>

  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}