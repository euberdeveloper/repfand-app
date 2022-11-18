import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { ElegantButton } from '../components/ElegantButton';
import screenStyle from '../styles/screen';

export const HomeScreen = ({ navigation }: NativeStackScreenProps<any>) => {
    return (
        <View style={screenStyle.container}>
            <ElegantButton title="Generate" onPress={() => { navigation.navigate('Generate') }} />
            <ElegantButton title="Redeem" onPress={() => { navigation.navigate('Redeem') }} />
        </View>
    );
};
