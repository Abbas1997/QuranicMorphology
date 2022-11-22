import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import converter from './transliterator';
import tag_colors from './colors';
import getDescription from './getDescription';

let sajdah = [
  '(7:206:1:1)',
  '(13:15:1:1)',
  '(16:50:1:1)',
  '(17:109:1:1)',
  '(22:18:1:1)',
  '(22:77:1:1)',
  '(25:60:1:1)',
  '(27:26:1:1)',
  '(32:15:1:1)',
  '(38:24:1:1)',
  '(41:38:1:1)',
  '(53:62:1:1)',
  '(84:21:1:1)',
  '(96:19:1:1)',
  '(19:58:1:1)',
]



const MainList = (props) => {

  let r = props.data[0].split(':')
  let number = '(' + r[0].replace('(', '') + ':' + r[1] + ':' + r[2] +')'

  //{returnString(data[1])}

  function getColor(tag) {
    let tag_color = tag_colors.find(elem => elem[0] == tag)
    tag_color = tag_color[1]
    return tag_color
  }

  function returnString(data) {
    let str = []
    for (let i = 0; i < props.data[2].length; i++) {
      let color1 = getColor(props.data[3][i])
      let txt = converter(props.data[2][i])
      let child = <Text key={i} style = {{color: color1}} >{txt}</Text>
      str.push(child)
    }
    return str
  }

  function returnString1(data) {
    let str = []
    for (let i = 0; i < props.data[2].length; i++) {
      let color1 = getColor(props.data[3][i])
      let txt = props.data[3][i]
      let txt1 = props.data[4][i]
      if(txt != 'DET'){ 
        let child = <Text key={i} style = {{color: color1, fontSize: 18}} >{txt + ' - '}<Text style={{color:'black', fontSize: 17}}>{getDescription(txt,txt1)}</Text></Text>
        str.push(child)
      }
      
    }
    return str
  }

  return (
    <>
      <View style={{ flexDirection: "row", padding: 5}}>
        <View style={{ alignSelf: 'center', flex: 1 }}>
          <View style={{ marginLeft: 5 }}>
            <Text style= {{color: 'black', marginBottom: 5}}>{number}</Text>
            <Text style= {{fontSize: 18, color: 'black'}}>{props.data[1]}</Text>
          </View>
        </View>
        <View  style={{ flex: 1 }}>
          <View style={{ marginRight: 5}}>
            <Text style = {{fontFamily: 'ScheherazadeNew-Regular', fontSize: 32, height: 65}}>
              {returnString(props.data)}
              <Text style={{size: 48}}>{sajdah.includes(props.data[0]) ? '\u06E9' : ''}</Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, marginLeft: 5, padding: 5, borderBottomWidth: 1, borderStyle: 'solid', borderColor: 'grey'}}>
        <Text>{returnString1(props.data)}</Text>
      </View>
    </>
  );
}

export { MainList }

// {returnString(data)}