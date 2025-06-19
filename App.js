import { StyleSheet, View } from 'react-native';
import Navigation from './components/Navigation';
import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';

export default function App() {


  return (
    <View style={styles.box}>
      <Navigation />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    height: '100%',
    paddingBottom: 45
  }
})
