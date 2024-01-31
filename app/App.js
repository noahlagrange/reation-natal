import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Button from './Button';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.font}>Titre</Text>
      <TextInput defaultValue='ecrire ici' style={styles.coco}/>
      <StatusBar style="auto" />
      <Button></Button>
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
  },
  font: {
    fontSize: 100,
    textAlign: 'center',
    verticalAlign: 'text-top',
    marginBottom: 50,
  }
});