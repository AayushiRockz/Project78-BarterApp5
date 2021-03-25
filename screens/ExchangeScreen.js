import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import db from '../config';
import firebase from 'firebase'; 
import { KeyboardAvoidingView } from 'react-native';
import MyHeader from '../components/MyHeader';
import AppHeader from '../components/AppHeader';


export default class ExchangeScreen extends React.Component{
    constructor(){
        super();
        this.state={
            userName :  firebase.auth().currentUser.email,
            itemName:'',
            description:''
        }
    }

    
  
  
    createUniqueId(){
        return Math.random().toString(36).substring(7);
      }
    addItem=(itemName, description)=>{
        var userName = this.state.userName
        var randomRequestId = this.createUniqueId()
        db.collection("requested_things").add({
            "user_name": userName,
            "item_name":itemName,
              "request_id"  : randomRequestId,
            "description":description
        })
        this.setState({
            itemName:'',
            description:''
        })

        return Alert.alert(
            'Item ready to exchange',
            '',
            [
                {text:'OK', onPress:()=>{
                    this.props.navigation.navigate('HomeScreen')
                }}
            ]
        );
    }

    render(){
        return(
            
            <View style={styles.container}>
                <AppHeader/>
               <Text
               style={{backgroundColor:'#DC5874',
                        color:'#fff',
                        fontFamily:'serif',
                        fontSize:30,
                        shadowColor:'#771021' ,
                        shadowOffset:{width:2,height:10} ,   
                       shadowOpacity:6,
                       shadowRadius:30,
                       padding:20
                      
                
                       }}
               >Exchange</Text>
               
                <TextInput placeholder="Item"
                style={styles.inputs}
                 onChangeText={(text)=>{
                     this.setState({
                         itemName:text
                     })
                 }}
                 value={this.state.itemName} 
                />

              
                <TextInput
                style={styles.inputs}
                placeholder="Description" 
                 onChangeText={(text)=>{
                    this.setState({
                        description:text
                    })
                }}
                value={this.state.description} 
                />

                <TouchableOpacity
                style={styles.button}
                onPress={()=>{
                    this.addItem(this.state.itemName, this.state.description)
                }}>
                <Text>Add Item</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'pink',
        justifyContent:'space-evenly',
        alignContent:'center',
        alignItems:'center',
        
    },

    inputs:{
        width:'50%',
        height:'10%',
        borderWidth:2,
        borderRadius:40,
        color:'white',
        backgroundColor:'black',
        padding:10,
        shadowColor:'#771021' ,
        shadowOffset:{width:2,height:10} ,   
       shadowOpacity:6,
       shadowRadius:30,
       borderRadius:30,

    },
    button:{
        backgroundColor:'#DC5874',
        borderWidth:2,
        borderRadius:50,
        width:'40%',
        height:'10%',
        alignItems:'center',
        padding:10,
        shadowColor:'#771021' ,
        shadowOffset:{width:2,height:10} ,   
       shadowOpacity:6,
       shadowRadius:30,
       borderRadius:30,
    }
})