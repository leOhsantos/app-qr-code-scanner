import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#67C38D'
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  mouseImg: {
    width: 300,
    height: 300
  },
  title: {
    fontSize: 30,
    fontFamily: 'Roboto_400Regular',
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#fff',
    marginBottom: 16
  },
  text: {
    fontSize: 17,
    fontFamily: 'Roboto_400Regular',
    letterSpacing: 1,
    color: '#fff',
    marginTop: 16
  }
});