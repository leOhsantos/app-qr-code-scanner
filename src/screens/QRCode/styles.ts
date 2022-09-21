import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#67C38D'
  },
  qrcode: {
    width: 500,
    height: 400,
  },
  scanBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: 220,
    height: 40,
    backgroundColor: '#25874b',
    borderRadius: 20,
    marginTop: 20
  },
  textButton: {
    color: '#ffffff',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  linkQrcode: {
    fontSize: 18,
    color: '#ffffff',
    alignSelf: 'center',
    marginTop: 10
  }
});