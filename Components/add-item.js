import React,{useState} from 'react';
import {View,TextInput,Button,StyleSheet,Modal} from 'react-native';

const AddItem = ({onAddData,visible,onUpdateVisible}) => {
    const [userData,onUpdateUserData] = useState('')

    const onUpdateData = () => {
        if(userData) {
            onAddData(userData)
            onUpdateUserData('')
        }
    }

    return (
        <Modal visible = {visible} animationType = "slide">
            <View style = {styled.addStyle}>
                <View style ={{width : '80%'}}>
                    <TextInput 
                    placeholder = "Enter your goal" 
                    style = {styled.inputStyle}
                    onChangeText = {(text) => onUpdateUserData(text)}
                    value = {userData}/>
                </View>
                <View style = {styled.buttonGroup}>
                    <View style = {styled.buttonWidth}>
                        <Button title = "Add" onPress = {onUpdateData}/>
                    </View>
                     <View style = {styled.buttonWidth}>
                        <Button title = "Cancel" onPress = {onUpdateVisible} color = "red"/>
                    </View>
                    
                </View>
            </View>
        </Modal>
    )
}

const styled = StyleSheet.create({
    addStyle : {
        justifyContent : 'center',
        alignItems : 'center',
        flex : 1
    },
    inputStyle : {
        width : '100%',
        borderWidth : 1,
        borderColor : 'black',
        padding : 10,
        marginBottom : 20
    },
    buttonGroup : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        width : '60%'
    },
    buttonWidth : {
        width : '40%'
    }
})


export default AddItem