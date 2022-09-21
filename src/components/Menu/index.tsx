import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Entypo, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import { styles } from './styles';

export function Menu() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('home')}
      >
        <Entypo name="home" size={41} color="#ffffff" />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('qrcode')}
      >
        <View style={styles.containerQrcodeIcon}>
          <MaterialCommunityIcons name="qrcode-scan" size={46} color="#25874b" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('developer')}
      >
        <Ionicons name="person-circle" size={43} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
}