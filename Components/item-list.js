import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

const ItemList = ({title,id,onDeleteData}) => {
    return (
        <TouchableOpacity onPress = {() => onDeleteData(id)}>
             <View style = {styled.addStyle}>
                 <Text style ={{color : 'white'}}>{title}</Text>
             </View>
        </TouchableOpacity>
    )
}

const styled = StyleSheet.create({
    addStyle : {
        marginVertical : 10,
        padding : 15,
        borderColor : 'black',
        borderWidth : 1,
        backgroundColor : 'grey',   
    }
})

export default ItemList