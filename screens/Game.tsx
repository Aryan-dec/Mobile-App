import * as React from 'react';
import { useRef } from "react";
import { StyleSheet, Button, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { BlurView } from 'expo-blur';

export default function GamePanelScreen({ navigation }) {
  const webViewRef = useRef(null)
  const goback = () => {webViewRef.current.goBack();};
  const goforward = () => {webViewRef.current.goForward();};
  const reload = () => {webViewRef.current.reload();};
  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.os}> Game Panel
          <FontAwesome.Button style={styles.button} name="arrow-left" backgroundColor="#3b5998" onPress={goback}></FontAwesome.Button>
          <FontAwesome.Button style={styles.button} name="arrow-right" backgroundColor="#3b5998" onPress={goback}></FontAwesome.Button>
          <FontAwesome.Button style={styles.button} name="refresh" backgroundColor="#3b5998" onPress={goback}></FontAwesome.Button>
        </Text>
        <WebView
          natvieID="clientWebview"
          ref={webViewRef}
          allowsBackForwardNavigationGestures
          useWebKit={true}
          originWhitelist={['*']}
          allowsInlineMediaPlayback={true}
          source={{
            uri: 'https://panel.falixnodes.net/'
          }}
        />
      </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  os: {
    display: Platform.OS === 'ios' ? 'none' : 'flex'
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 50 : 0
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button: {
    backgroundColor: 'black',
    borderLeftWidth: 5,
    borderRightWidth: 12,
  }
});
