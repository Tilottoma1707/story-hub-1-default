import React, {Component} from 'react';
import {View,StyleSheet,Text} from 'react-native';
import MyHeader from '../components/MyHeader'


export default class ReadStoryScreen extends Component {
    constructor(){
        super()
        this.state={
         TitleOfStory:"",
         AuthorOfStory:"",
         Story:""
        }
    }
    render() {
            return(
                
     <View>
         <MyHeader title = "Write Story" navigation = {this.props.navigation}/>
            <TextInput style ={{width:70,height:50,alignSelf:"center",marginTop:10}}
            placeholder = "Title Of Story"
            maxLength = {8}
            onChangeText = {(text)=>{
                  this.setState({TitleOfStory:text})
            }}/>

<TextInput style ={{width:70,height:50,alignSelf:"center",marginTop:10}}
            placeholder = "Author of The story"
            maxLength = {8}
            onChangeText = {(text)=>{
                  this.setState({AuthorOfStory:text})
            }}/>
            
            <TextInput style ={{width:70,height:50,alignSelf:"center",marginTop:10}}
            placeholder = "Start writing your Story"
            maxLength = {8}
            onChangeText = {(text)=>{
                  this.setState({Story:text})
            }}/>


     </View>           
            )
    }     
        }