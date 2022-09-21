import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#67C38D'
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  devImg: {
    width: 250,
    height: 250,
    borderRadius: 200,
    borderColor: '#25874b',
    borderWidth: 4
  },
  title: {
    fontSize: 32,
    fontFamily: 'Roboto_400Regular',
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#fff',
    marginBottom: 16
  },
  nameDev: {
    fontSize: 25,
    fontFamily: 'Roboto_400Regular',
    letterSpacing: 1,
    color: '#fff',
    marginTop: 8
  },
  iconsContainer: {
    width: '66%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 18
  }
});