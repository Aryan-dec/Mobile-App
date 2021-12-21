import * as React from 'react';
import { WebView } from 'react-native-webview';
import { useRef, Component, useState } from "react";
import { hideNavigationBar } from 'react-native-navigation-bar-color';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme, createStackNavigator } from '@react-navigation/native';
import { ActivityIndicator, Alert, Button, useColorScheme, Platform, Text, SafeAreaView, View, ScrollView, StyleSheet, StatusBar, Linking } from 'react-native';
import { faInfoCircle, faNewspaper, faUser, faServer, faSlidersH, faLifeRing, faRefresh, faArrowLeft, faArrowRight } from '@fortawesome/pro-thin-svg-icons';
const Tab = createBottomTabNavigator();
StatusBar.setBarStyle('light-content', true);

if (Platform.OS === 'ios') {
  global.OSHeader = false
} else {
  global.OSHeader = true
}

var styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'black'
  },
  webView: {
    display: 'flex',
    minWidth: '100%'
  },
  headerButtons: {
    paddingHorizontal: 25,
    color: 'white'
  },
  textOption: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '85%',
    flexDirection: 'row',
    margin: 10,
  },
  settingButtons: {
    color: '#2970cc',
    width: '100%',
    backgroundColor: 'transparent',
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: -20
  },
  settingButtonsRedIOS: {
    color: 'red',
    width: '100%',
    backgroundColor: 'transparent',
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: -20,
    display: Platform.OS === 'android' ? 'none' : 'flex'
  },
  settingButtonsRedANDR: {
    color: 'red',
    width: '100%',
    backgroundColor: 'transparent',
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: -20,
    display: Platform.OS === 'ios' ? 'none' : 'flex'
  }
});

const ActivityIndicatorElement = () => {
  return (
  <ActivityIndicator
    style={{
    backgroundColor: 'black',
    flex: 1,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center' }}
    size="small"
  />
  );
}

function SettingsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textOption}>
        <Text style={{color: 'white', fontSize: 32, marginBottom: 20, marginTop: Platform.OS === 'ios' ? 25 : 80}}>FalixNodes App</Text>
      </View>
      <View style={styles.textOption}>
        <Text style={{color: 'white'}}>Version</Text>
        <Text style={{color: 'white', opacity: 0.5}}>v2.0 Beta 1</Text>
      </View>
      <View style={styles.textOption}>
        <Text onPress={() =>navigation.navigate('Your Account')} style={styles.settingButtons}>Your Account</Text>
      </View>
      <View style={styles.textOption}>
        <Text onPress={() =>navigation.navigate('Nodes Status')} style={styles.settingButtons}>Nodes Status</Text>
      </View>
      <View style={styles.textOption}>
        <Text onPress={() =>navigation.navigate('App Changelog')} style={styles.settingButtons}>App Changelog</Text>
      </View>
      <View style={styles.textOption}>
        <Text onPress={() => Alert.alert(
        "What's the issue?",
        "Select 'App' if you've found an issue with the app itself. If the issue is related to your account or server on FalixNodes, select 'Account/Server' instead.",
          [,
            {
              text: "Account/Server",
              onPress: () => Linking.openURL('https://discord.com/channels/710503370187735160/829662494930239498')
            },
            {
              text: "App",
              onPress: () => Linking.openURL('https://github.com/FalixNodes-Software/Mobile-App/issues/new')
            },
            {
              text: "Visit Help Center",
              onPress: () => navigation.navigate('Help Center')
            },
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
          ]
        )} style={styles.settingButtonsRedIOS}>Report Issue</Text>
      </View>
      <View style={styles.textOption}>
        <Text style={styles.settingButtonsRedANDR} onPress={() =>navigation.navigate('Report')}>Report Issue</Text>
      </View>
    </SafeAreaView>
  );
}
function ReportScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textOption}>
        <Text style={{color: 'red', fontSize: 32, marginBottom: 20, marginTop: 40}}>Report Issue</Text>
      </View>
      <View style={styles.textOption}>
        <Text style={{color: 'white'}}>Select 'App' if you've found an issue with the app itself. If the issue is related to your account or server on FalixNodes, select 'Account/Server' instead.</Text>
      </View>
      <View style={styles.textOption}>
        <Text onPress={() => Linking.openURL('https://github.com/FalixNodes-Software/Mobile-App/issues/new')} style={styles.settingButtons}>App</Text>
      </View>
      <View style={styles.textOption}>
        <Text onPress={() => Linking.openURL('https://discord.com/channels/710503370187735160/829662494930239498')} style={styles.settingButtons}>Account/Server</Text>
      </View>
      <View style={styles.textOption}>
        <Text onPress={() =>navigation.navigate('Help Center')} style={styles.settingButtons}>Visit Help Center</Text>
      </View>
    </SafeAreaView>
  );
}



function NewsScreen({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{flexDirection:"row"}}>
          <FontAwesomeIcon onPress={() => Alert.alert('FalixNodes App v2 Alpha 4')} style={styles.headerButtons} icon={ faInfoCircle } />
        </View>
      ),
    });
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <WebView
          source={{ uri: 'https://falixnodes.net/blog-app/' }}
          javaScriptEnabled={true}
          style={styles.webView}
          scalesPageToFit={true}
          startInLoadingState={false}
          allowsBackForwardNavigationGestures
          domStorageEnabled={true}
          renderLoading={ActivityIndicatorElement}
          startInLoadingState={true}
        />
      </View>
    </SafeAreaView>
  );
}

function ClientScreen({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{flexDirection:"row"}}>
          <FontAwesomeIcon onPress={reload} style={styles.headerButtons} icon={ faRefresh } />
          <FontAwesomeIcon onPress={goback} style={styles.headerButtons} icon={ faArrowLeft } />
          <FontAwesomeIcon onPress={goforward} style={styles.headerButtons} icon={ faArrowRight } />
        </View>
      ),
    });
  }, [navigation]);

  const clientWebview = useRef(null)
  const goback = () => {clientWebview.current.goBack();};
  const goforward = () => {clientWebview.current.goForward();};
  const reload = () => {clientWebview.current.reload();};
  let jsCode = `
  var g = document.getElementById("top");
  g.insertAdjacentHTML("afterend", "<link rel='stylesheet' href='https://cdn.korbsstudio.com/falix/client-panel.css'>");`;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <WebView
          ref={clientWebview}
          source={{ uri: 'https://client.falixnodes.net' }}
          javaScriptEnabled={true}
          javaScriptEnabledAndroid={true}
          injectedJavaScript={jsCode}
          onMessage={(event) => {}}
          javaScriptEnabled={true}
          style={styles.webView}
          scalesPageToFit={true}
          startInLoadingState={false}
          allowsBackForwardNavigationGestures
          domStorageEnabled={true}
          renderLoading={ActivityIndicatorElement}
          startInLoadingState={true}
        />
      </View>
    </SafeAreaView>
  );
}

function GameScreen({ navigation }) {


  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{flexDirection:"row"}}>
          <FontAwesomeIcon onPress={reload} style={styles.headerButtons} icon={ faRefresh } />
          <FontAwesomeIcon onPress={goback} style={styles.headerButtons} icon={ faArrowLeft } />
          <FontAwesomeIcon onPress={goforward} style={styles.headerButtons} icon={ faArrowRight } />
        </View>
      ),
    });
  }, [navigation]);

  const gameWebview = useRef(null)
  const goback = () => {gameWebview.current.goBack();};
  const goforward = () => {gameWebview.current.goForward();};
  const reload = () => {gameWebview.current.reload();};
  let jsCode = `
  if(location.href.match(/(falixnodes).net/)){} else {setTimeout(() => {location.href = 'https://falixnodes.net/app/domain-restriction.html'}, 500);}
  var gamePanelLogin = document.getElementById("app");
  var gamePanel = document.getElementById("modal-portal");
  gamePanelLogin.insertAdjacentHTML("afterend", "<link rel='stylesheet' href='https://falixnodes.net/assets/css/app/game-panel.css'>");
  gamePanel.insertAdjacentHTML("afterend", "<link rel='stylesheet' href='https://falixnodes.net/assets/css/app/game-panel.css'>");`;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <WebView
          onError={() => Alert.alert("Page failed to load", "The page you're trying to view has failed to load. Either caused by a connection error or the a server-side issue.", [{text: 'OK'}])}
          ref={gameWebview}
          source={{ uri: 'https://panel.falixnodes.net' }}
          javaScriptEnabled={true}
          javaScriptEnabledAndroid={true}
          injectedJavaScript={jsCode}
          onMessage={(event) => {}}
          style={styles.webView}
          scalesPageToFit={true}
          startInLoadingState={false}
          allowsBackForwardNavigationGestures
          domStorageEnabled={true}
          renderLoading={ActivityIndicatorElement}
          startInLoadingState={true}
        />
      </View>
    </SafeAreaView>
  );
}

function HelpScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <WebView
          source={{ uri: 'https://help.falixnodes.net' }}
          javaScriptEnabled={true}
          style={styles.webView}
          scalesPageToFit={true}
          startInLoadingState={false}
          allowsBackForwardNavigationGestures
          domStorageEnabled={true}
          renderLoading={ActivityIndicatorElement}
          startInLoadingState={true}
        />
      </View>
    </SafeAreaView>
  );
}

function StatusScreen({ navigation }) {return (<SafeAreaView style={styles.container}><View style={styles.container}><WebView
  source={{ uri: 'https://wl.hetrixtools.com/r/64ff7310029db59cdd2e69792cca6182/' }}
  javaScriptEnabled={true}
  style={styles.webView}
  scalesPageToFit={true}
  startInLoadingState={false}
  allowsBackForwardNavigationGestures
  domStorageEnabled={true}
  renderLoading={ActivityIndicatorElement}
  startInLoadingState={true}/>
</View></SafeAreaView>);}
function AccountScreen({ navigation })
{let jsCode = `
var g = document.getElementById("top");
g.insertAdjacentHTML("afterend", "<link rel='stylesheet' href='https://cdn.korbsstudio.com/falix/game-panel.css'>");`;
  return (<SafeAreaView style={styles.container}><View style={styles.container}><WebView
  source={{ uri: 'https://client.falixnodes.net/profile/settings' }}
  javaScriptEnabled={true}
  javaScriptEnabledAndroid={true}
  injectedJavaScript={jsCode}
  onMessage={(event) => {}}
  javaScriptEnabled={true}
  style={styles.webView}
  scalesPageToFit={true}
  startInLoadingState={false}
  allowsBackForwardNavigationGestures
  domStorageEnabled={true}
  renderLoading={ActivityIndicatorElement}
  startInLoadingState={true}/>
</View></SafeAreaView>);}
function ChangelogScreen({ navigation }) {return (<SafeAreaView style={styles.container}><View style={styles.container}><WebView
  source={{ uri: 'https://desktop.falixnodes.net/mobile/changelog/' }}
  javaScriptEnabled={true}
  style={styles.webView}
  scalesPageToFit={true}
  startInLoadingState={false}
  allowsBackForwardNavigationGestures
  domStorageEnabled={true}
  renderLoading={ActivityIndicatorElement}
  startInLoadingState={true}/>
</View></SafeAreaView>);}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="News" component={NewsScreen}
      options={{
        tabBarIcon: ({ tintColor }) => <FontAwesomeIcon style={styles.headerButtons} icon={ faNewspaper } />,
        headerShown: OSHeader
      }} />
      <Tab.Screen name="Client Area" component={ClientScreen}
      options={{
        tabBarIcon: ({ tintColor }) => <FontAwesomeIcon style={styles.headerButtons} icon={ faUser } />,
        headerShown: OSHeader
      }} />
      <Tab.Screen name="Game Panel" component={GameScreen}
      options={{
        tabBarIcon: ({ tintColor }) => <FontAwesomeIcon style={styles.headerButtons} icon={ faServer } />,
        headerShown: OSHeader
      }} />
      <Tab.Screen name="Help Center" component={HelpScreen}
      options={{
        tabBarIcon: ({ tintColor }) => <FontAwesomeIcon style={styles.headerButtons} icon={ faLifeRing } />,
        headerShown: OSHeader
      }} />
      <Tab.Screen name="Settings" component={SettingsScreen}
      options={{
        tabBarIcon: ({ tintColor }) => <FontAwesomeIcon style={styles.headerButtons} icon={ faSlidersH } />,
        headerShown: false
      }} />
      
      <Tab.Screen name="Nodes Status" component={StatusScreen}
      options={{
        tabBarButton: () => null,
        headerShown: OSHeader
      }} />
      <Tab.Screen name="Your Account" component={AccountScreen}
      options={{
        tabBarButton: () => null,
        headerShown: OSHeader
      }} />
      <Tab.Screen name="App Changelog" component={ChangelogScreen}
      options={{
        tabBarButton: () => null,
        headerShown: OSHeader
      }} />
      <Tab.Screen name="Report" component={ReportScreen}
      options={{
        tabBarButton: () => null,
        headerShown: false
      }} />
    </Tab.Navigator>
  );
}

export default function App() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <MyTabs />
    </NavigationContainer>
  );
}

