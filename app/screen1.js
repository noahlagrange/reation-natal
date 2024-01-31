import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function screen1({ navigation }) {
    return (
        <View style={styles.container}>
            <TextInput/>

            <Text style={styles.coco}  onPress={() => navigation.navigate("screen2")}>
                Go to screen2
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    coco: {
      backgroundColor : '#7fff00',
      fontSize: 75,
    },
    font: {
      fontSize: 100,
      textAlign: 'center',
      verticalAlign: 'text-top',
      marginBottom: 50,
    }
  });