import React,{useState} from 'react';
import nextId from "react-id-generator";
import { StyleSheet, View, FlatList,Text, Button } from 'react-native';
import ItemList from './Components/item-list';
import AddItem from './Components/add-item';


export default function App() {
  const [data,onUpdateData] = useState([])

  const [visible,onUpdateVisible] = useState(false)

  const onDeleteData = (id) => {
      onUpdateData(currentState => {
        return currentState.filter(value => {
          return value.id !== id
        })
      })
  }


  const onAddData = (text) => {
    onUpdateData(currentState => {
      return  [...currentState,{text,id : nextId()}]
    })
    onUpdateVisible(false)
  }

  return (
    <View style = {styled.screen}>
      <Button title = "Add Goal" onPress = {() => onUpdateVisible(true)}/>
      <AddItem 
      onAddData = {(text) => onAddData(text)} 
      visible = {visible}
      onUpdateVisible = {() => onUpdateVisible(false)}/>
      <FlatList
        data = {data}
        renderItem = {({item : {text,id}}) => (
            <ItemList title = {text} id = {id} onDeleteData = {(id) => onDeleteData(id)}/>
         ) 
        }
      />
    </View>
  );
}

const styled = StyleSheet.create({
    screen : {
     padding : 50
    }
})

