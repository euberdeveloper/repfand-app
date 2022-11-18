import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export const ElegantButton = ({ title, onPress }: { title: string, onPress: () => void }) => {
    return (
        <TouchableOpacity
            style={style.container}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <Text style={style.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    container: {
        height: 50,
        width: 250,
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 24,
        marginBottom: 24,
        backgroundColor: '#2196f3',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        textTransform: 'uppercase'
    }
});
