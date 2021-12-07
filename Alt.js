import React from 'react';
import { Appearance, StyleSheet, Image, Linking, Button, View, StatusBar, SafeAreaView, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { WebView } from 'react-native-webview';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useHeaderHeight } from '@react-navigation/elements';
StatusBar.setBarStyle('light-content', true);

export default function App() {
    return (
        <SafeAreaView>
            <Text>Hello</Text>
        </SafeAreaView>
    );
}