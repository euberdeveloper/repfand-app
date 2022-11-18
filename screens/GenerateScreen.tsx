import { StyleSheet, View, Text } from 'react-native';

export const GenerateScreen = () => {
    return (
        <View style={styles.container}>
            <Text>ciao</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
});
