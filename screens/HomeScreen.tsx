import { Button, View, TouchableHighlight } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import screenStyle from '../styles/screen';

const Btn = ({ title, onPress }: { title: string, onPress: () => void }) => {
    return (
        <TouchableHighlight
            style={{
                height: 40,
                width: 160,
                borderRadius: 10,
                // backgroundColor: "yellow",
                marginLeft: 10,
                marginRight: 10,
                marginTop: 50
            }}>
            <Button title={title} onPress={onPress} />
        </TouchableHighlight>
    );
}

export const HomeScreen = ({ navigation }: NativeStackScreenProps<any>) => {
    return (
        <View style={screenStyle.container}>
            <Btn title="Generate" onPress={() => { navigation.navigate('Generate') }} />
            <Btn title="Redeem" onPress={() => { navigation.navigate('Redeem') }} />
        </View>
    );
};
