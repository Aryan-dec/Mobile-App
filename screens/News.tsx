import * as React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { BlurView } from 'expo-blur';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function NewsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <WebView
          allowsBackForwardNavigationGestures
          useWebKit={true}
          originWhitelist={['*']}
          allowsInlineMediaPlayback={true}
          source={{
            uri: 'https://falixnodes.net/blog-app/'
          }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  }
});
