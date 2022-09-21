import { StyleSheet, StatusBar } from 'react-native';
import {
  useFonts,
  Roboto_400Regular
} from '@expo-google-fonts/roboto';
import { Routes } from './src/routes';
import { View } from 'react-native';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular
  })

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#25874b"
        translucent
      />

      {fontsLoaded ? <Routes /> : <Loading />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});