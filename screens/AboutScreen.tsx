import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Button, SafeAreaView, Alert } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FalixNodes App</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text>Version: 2.0</Text>
      <Text>Alpha 3</Text>
        <View style={styles.buttonRow}>
        </View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  buttonRow: {
    flex: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 30
  },
  buttonAbout: {
    backgroundColor: 'black'
  }
});