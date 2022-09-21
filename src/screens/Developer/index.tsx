import { View, Text, Image } from 'react-native';
import { A } from '@expo/html-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AntDesign } from '@expo/vector-icons';

import { Menu } from '../../components/Menu';

import devImg from '../../assets/leOh.jpg';

import { styles } from './styles';

export function Developer() {
  return (
    <SafeAreaView style={styles.container}>

      <View></View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Desenvolvedor</Text>

        <Image
          source={devImg}
          style={styles.devImg}
        />

        <Text style={styles.nameDev}>Leonardo Santos</Text>

        <View style={styles.iconsContainer}>
          <A href="https://www.instagram.com/leohsantosz/"><AntDesign name="instagram" size={33} color="#fff" /></A>
          <A href="https://github.com/leOhsantos"><AntDesign name="github" size={33} color="#fff" /></A>
          <A href="https://www.linkedin.com/in/leonardo-santos-101a17250/"><AntDesign name="linkedin-square" size={33} color="#fff" /></A>
        </View>
      </View>

      <Menu />

    </SafeAreaView>
  );
}