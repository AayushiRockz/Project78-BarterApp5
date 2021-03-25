import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity,  Alert, StyleSheet} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import AppHeader from '../components/AppHeader';
import MyHeader from '../components/MyHeader';


export default class SettingsScreen extends Component{
    render(){
    return(
    <View>
        <Text>Setting</Text>
    </View>
    )
    }
}
