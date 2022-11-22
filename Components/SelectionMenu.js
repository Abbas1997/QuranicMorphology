import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StatusBar, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SelectionMenu = (props) => {

  const[chapter, setChapter] = useState(props.cvno[0].toString())
  const[verse, setVerse] = useState(props.cvno[1].toString())

  useEffect(() =>{
    setChapter(props.cvno[0].toString())
    setVerse(props.cvno[1].toString())
  },[props.cvno])
  
  return (
    <View style={
      {
        flexDirection: "row",
        backgroundColor: 'grey',
        height: 40,
        alignItems: "center"
      }
    }>
      <StatusBar backgroundColor={'grey'} />
      <Text style={
        {
          fontSize: 18,
          color: "white",
          margin: 5,
        }
      }>CHAPTER</Text>
      <TextInput
        keyboardType='number-pad'
        onChangeText={(text) => setChapter(text)}
        value={chapter.toString()}
        style={
          {
            height: 22,
            backgroundColor: 'white',
            borderColor: 'black',
            borderWidth: 1,
            color: 'black',
            fontSize: 18,
            width: 40,
            borderRadius: 5,
            padding: 0,
            margin: 5,
            textAlign: 'center'
          }
        }
      />

      <Text style={
        {
          fontSize: 18,
          color: "white",
          margin: 5,
        }
      }>VERSE</Text>

      <TextInput
        keyboardType='number-pad'
        onChangeText={(text) => setVerse(text)}
        value={verse.toString()}
        style={
          {
            height: 22,
            backgroundColor: 'white',
            borderColor: 'black',
            borderWidth: 1,
            color: 'black',
            fontSize: 18,
            width: 40,
            borderRadius: 5,
            padding: 0,
            margin: 5,
            textAlign: 'center'
          }
        }
      />
      <Pressable 
        onPress={() => {
          props.set_cvno([chapter, verse, 0])
        }}
        android_ripple={{color: 'grey', foreground: true}}
      >
        <Text style={
          {
            marginLeft: 10,
            backgroundColor: 'white',
            borderRadius: 5,
            width: 40,
            textAlign: 'center',
            borderColor: 'black',
            borderWidth: 1
          }
        }>
          <Icon name={"arrow-forward"} color="grey" size={22} />
        </Text>
      </Pressable>

      <Pressable 
      onPress = {() => props.set_cvno([chapter, verse, 1])}
      android_ripple={{color: 'grey', foreground: true}}
      style={
        {
          position: "absolute",
          right: 5,
        }}>
      <Text>
        <Icon name="info" color="white" size={30} />
      </Text>
      </Pressable>  
      

    </View>
  );
};

export default SelectionMenu