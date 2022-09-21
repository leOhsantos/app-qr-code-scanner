import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Entypo, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import { styles } from './styles';

export function Menu() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Entypo onPress={() => navigation.navigate('home')} name="home" size={41} color="#ffffff" />
      <View style={styles.containerQrcodeIcon}>
        <MaterialCommunityIcons onPress={() => navigation.navigate('qrcode')} name="qrcode-scan" size={46} color="#25874b" />
      </View>
      <Ionicons onPress={() => navigation.navigate('developer')} name="person-circle" size={43} color="#ffffff" />
    </View>
  );
}