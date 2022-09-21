import { View, Text, TouchableOpacity } from 'react-native';
import { A } from '@expo/html-elements';
import { Entypo } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BarCodeScanner } from 'expo-barcode-scanner';

import { Menu } from '../../components/Menu';

import { styles } from './styles';

interface Props {
  data: string;
}

export function QRCode() {
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState<string>('');

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      await BarCodeScanner.requestPermissionsAsync();
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ data }: Props) => {
    setText(data)
    setScanned(true);
  }

  return (
    <SafeAreaView style={styles.container}>

      <View></View>

      <View>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.qrcode}
        />

        <A href={text} style={styles.linkQrcode}>{text ? <Text><Entypo name="link" size={20} color="#ffffff" /> Acessar link</Text> : ''}</A>

        {
          scanned &&
          <TouchableOpacity
            style={styles.scanBtn}
            onPress={() => {
              setScanned(false);
              setText('');
            }}>
            <Text style={styles.textButton}>
              Escanear novamente
            </Text>
          </TouchableOpacity>
        }
      </View>

      <Menu />

    </SafeAreaView>
  );
}