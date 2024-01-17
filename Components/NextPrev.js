import React from "react"
import { View, Text, Pressable } from "react-native"

const NextPrev = (props) => {

    let nextno, prevno
    if(props.next) {
        let r = props.next.split(':')
        nextno = '(' + r[0].replace('(', '') + ':' + r[1] + ')'
    }
    if(props.prev) {
        let r = props.prev.split(':')
        prevno = '(' + r[0].replace('(', '') + ':' + r[1] + ')'
    }

    return(
        <View style = {{height: 100, flexDirection: "row", flex: 1}}>
            <Pressable
                style={{width: '50%', backgroundColor: 'grey', alignItems: 'center', justifyContent: 'center'}}
                android_ripple={{color: 'white', foreground: true}}
                onPress = {() => { 
                    let dValue = props.prev.replace('(','').split(':')
                    props.set_cvno([dValue[0], dValue[1]])
                    props.scroller.current.scrollTo({ x: 0, y: 0, animated: true })
                }}
                disabled = {!props.prev}
                >
                <View style={{justifyContent: 'center', width: '100%'}}>
                    <Text style={{fontSize: 28, width: '100%', textAlign: 'center'}}>{props.prev ? 'Previous' : ''}</Text>
                    <Text style={{textAlign: 'center', width: '100%'}}>{prevno}</Text>
                </View>
            </Pressable>
            <Pressable
                style={{width: '50%', backgroundColor: 'grey', alignItems: 'center', justifyContent: 'center',
                        borderLeft: 'solid', borderLeftWidth: 1}}
                        android_ripple={{color: 'white', foreground: true}}
                        onPress = {() => { 
                            let dValue = props.next.replace('(','').split(':')
                            props.set_cvno([dValue[0], dValue[1]])
                            props.scroller.current.scrollTo({ x: 0, y: 0, animated: false })
                        }}
                        disabled = {!props.next}
            >
                <View style={{justifyContent: 'center', width: '100%'}}>
                    <Text style={{fontSize: 28, width: '100%', textAlign: 'center'}}>{props.next ? 'Next' : ''}</Text>
                    <Text style={{textAlign: 'center', width: '100%'}}>{nextno}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default NextPrev