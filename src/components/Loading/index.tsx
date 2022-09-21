import { View, ActivityIndicator } from 'react-native';

import { styles } from './styles';

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#ffffff" />
    </View>
  );
}