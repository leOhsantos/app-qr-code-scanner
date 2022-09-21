import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/Home';
import { QRCode } from '../screens/QRCode';
import { Developer } from '../screens/Developer';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="home"
                component={Home}
            />

            <Screen
                name="qrcode"
                component={QRCode}
            />

            <Screen
                name="developer"
                component={Developer}
            />
        </Navigator>
    );
}