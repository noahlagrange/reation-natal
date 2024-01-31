import { View } from "react-native";
import { StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';

export default function screen2({navigation}) {
    return (
        <View style={styles.container}>
           <TextInput style={styles.input}/>
            <Text style={styles.coco} onPress={() => navigation.navigate("screen1")}>
                Go to screen1
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
    },
    input :{
        alignItems: 'center',
      justifyContent: 'center',
      margin: 25,
    },
  });