import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button , ScrollView, FlatList } from 'react-native';

import ContatoItem from'./components/ContatoItem';
import ContatoInput from'./components/ContatoInput';


export default function App() {

const[contatos, setContatos] = useState([]);
const[contadorContatos, setContadorContatos] = useState(10);

  const adicionarContato = (nome, numero) => {
  setContatos((contatos) => {
    setContadorContatos(contadorContatos + 2);
    return [...contatos, {key: contadorContatos.toString(), nome: 'Nome: ' + nome, numero: 'Numero: ' + numero}];
  });
  }

  const removerContato = (keyASerRemovida) => {
    setContatos(contatos => {
      return contatos.filter((contato) => {
        return contato.key !== keyASerRemovida
      })
    }); 
  }

  return (
    <View style={estilos.telaPrincipalView}>
      <ContatoInput onAdicionarContato={adicionarContato}/>
        <FlatList
        data={contatos}
        renderItem={
          (contato) => (
            <ContatoItem
              chave={contato.item.key} 
              nome={contato.item.nome}
              numero={contato.item.numero}
              onDelete={removerContato}  
            />
          )
        }
        />
    </View>
  );
}

const estilos = StyleSheet.create({
  
  itemNaListaView: {
    padding: 12,
    backgroundColor: '#CCC',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8
  },
})