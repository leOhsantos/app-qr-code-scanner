import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Menu } from '../../components/Menu';

import mouse from '../../assets/mouse.png';

import { styles } from './styles';

export function Home() {
  return (
    <SafeAreaView style={styles.container}>

      <View></View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Leptospirose</Text>

        <Image
          source={mouse}
          style={styles.mouseImg}
        />

        <Text style={styles.text}>Caso você queira conhecer melhor essa doença, acesse o scanner e escaneie o QR Code do cartaz referente a Leptospirose.</Text>
      </View>

      <Menu />

    </SafeAreaView>
  );
}