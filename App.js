import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-web';
import Conta from './Componente/conta';

export default function App() {
  const [conv, setConv] = useState(0);
  const [num, setNum] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.titulo}> Calculadora de alimentos para a festa do espetacular  </Text>
        <Text style={styles.texto}> Digite o número de convidados </Text>
        <TextInput
          style={styles.input}
          value={num}
          keyboardType="numeric"
          onChangeText={(value)=>setNum(value)}
        />
      </View>
      <TouchableOpacity 
        style={styles.botao}
        onPress={()=>setConv(num)}>
          <Text style={styles.textoBotao}> Calcular </Text>
      </TouchableOpacity>
      <Conta conv={conv}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: "url('https://wallpapercave.com/wp/wp4227565.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row:{
    width: '100%',
    marginTop: 10,
    textAlign: 'center'
  },
  input:{
    width: '80%',
    alignSelf: 'center',
    borderWidth: 1,
    fontSize: 30,
    borderRadius: 6,
    backgroundColor: 'gray',
    color: '#fff',
    marginTop: 10,
    marginBottom: 10
  },
  texto:{
    fontSize: 40,
    color: '#fff'
  },
  titulo:{
    fontSize: 50,
    marginBottom: 100,
    color: '#fff'
  },
  botao:{
    width: '50%',
    alignSelf: 'center',
    borderWidth: 1,
    fontSize: 30,
    borderRadius: 6,
    backgroundColor: 'gray',
    marginBottom: 10,
    textAlign: 'center'
  },
  textoBotao:{
    color: 'gray',
    fontSize: 30
  }
});