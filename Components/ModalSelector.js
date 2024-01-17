import { Text, ScrollView, StyleSheet, View, Pressable} from 'react-native';
import React, { useState} from 'react';
import indice from './indice.js'

const ChapterName = (props) => {
    let ch = props.item.index + 1
    onPress = () => {
        if(props.selectedVerse > indice[props.item.index][1]) {
            props.setSelectedVerse(1)
        }
        props.setSelectedChapter(ch)     
    }
    return(
        <Pressable style={{height: 35}} onPress={onPress}>
           <Text style={[styles.chapterName, {backgroundColor: props.selectedChapter - 1 == props.item.index ? 'grey' : 'white'}]}>{(props.item.index + 1)+'. '+props.item.item}</Text>
        </Pressable>
    )
}

const VerseNumber = (props) => {
    onPress = () => {
        props.setSelectedVerse(props.item) 
    }
    return(
        <Pressable style={{height: 35}} onPress={onPress}>
           <Text style={[styles.chapterName, {backgroundColor: props.selectedVerse == props.item ? 'grey' : 'white'}]}>{props.item}</Text>
        </Pressable>
    )
}

const ModalSelector = (props) => {
    function closeSelector() {
        props.setSelectorVisible(false)
    }
    const chapterList = props.chapterList
    const [selectedChapter, setSelectedChapter] = useState(props.chapter)
    const [selectedVerse, setSelectedVerse] = useState(props.verse)
    const chapterNames = []
    for (let i = 0; i<Object.keys(chapterList).length-1; i++) {        
        chapterNames.push(chapterList[i].phonetic)
    }
    let verseNos = []
    for (let i = 0; i<indice[selectedChapter - 1][1]; i++) {        
        verseNos.push(i + 1)
    }

    const returnChapters = () => {
        let chapterNamesComps = []
        for (let i = 0; i<chapterNames.length; i++) {
            chapterNamesComps.push(<ChapterName
                setSelectedChapter={setSelectedChapter}
                selectedChapter={selectedChapter}
                selectedVerse={selectedVerse}
                setSelectedVerse={setSelectedVerse}
                item={{index: i, item:chapterNames[i]}} />)
        }
        return chapterNamesComps
    }
    const returnVerses = () => {
        let VerseNosComps = []
        for (let i = 0; i<verseNos.length; i++) {
            VerseNosComps.push(
                <VerseNumber
                    selectedVerse={selectedVerse} 
                    setSelectedVerse={setSelectedVerse} 
                    item={verseNos[i]} />
            )
        }
        return VerseNosComps
    }
    const onSelect = () => {
        props.setcvno([selectedChapter, selectedVerse])
        props.setSelectorVisible(false)

    }
    return (
        <View style={styles.container}>            
            <View style={styles.modal}>
                <View style={styles.position}>
                <Text style={styles.chapter}>{props.chapterList[selectedChapter - 1].chapterNumber} . {props.chapterList[selectedChapter - 1].phonetic} . {selectedVerse}</Text>
                </View>
                <View style={styles.Lists}>    
                    <ScrollView style={styles.listChapter} contentOffset={{x:0, y:35 * (props.chapter - 1)}}>
                        {returnChapters()}
                    </ScrollView>
                    <ScrollView style={styles.listVerse} contentOffset={{x:0, y:35 * (props.verse - 1)}}>
                        {returnVerses()}
                    </ScrollView>
                </View>
                <View style={styles.buttons}>
                    <Pressable style={styles.select} onPress={onSelect} android_ripple={{ color: 'grey', foreground: true }}>
                        <Text style={{color: 'white'}}>Select</Text>
                    </Pressable>
                    <Pressable style={styles.close} 
                    android_ripple={{ color: 'grey', foreground: true }}
					onPress={closeSelector}>
                        <Text style={{color: 'white'}}>Close</Text>
                    </Pressable>
                </View>                               
            </View>
        </View>        
    )
}

const styles = StyleSheet.create({
	modal: {
        //height: 400,
        width: 300,
        elevation: 5,
        backgroundColor: 'grey',
        borderRadius: 10,
        alignItems: 'stretch'
	},
    Lists: {
        //height: 300,
        // width: 250,
        //borderWidth: 1,
        //borderColor: 'black',
        //flexGrow: 1,
        backgroundColor: 'grey',
        borderRadius: 10,
        flexDirection: 'row',
        marginBottom: 0,
    },
    container: {
        flex: 1,
        opacity: 50,
        alignItems: 'center',
        justifyContent: 'center',        
    },
    listChapter: {
        height: 300,
        width: 100,
        maxHeight: 300,        
        backgroundColor: '#a6a6a6',
        marginTop: 0,
        marginBottom: 0,
        margin: 10,
        //borderRadius: 10,
        shadowColor: 'black',
        overflow: 'hidden'
    },
    listVerse: {
        height: 300,
        width: 5,        
        backgroundColor: '#a6a6a6',
        maxHeight: 300, 
        marginTop: 0,
        marginBottom: 0,
        margin: 10,
        marginLeft: 0,
        marginRight: 10,
        //borderRadius: 10,
        shadowColor: 'black'
    },
    position: {
        marginTop: 3,
        alignItems: 'center',
        padding: 3, 
        marginBottom: 3
    },
    buttons: {
        marginTop: 3,
        flexDirection: 'row',
        //borderWidth: 1,
        //borderColor: 'black',
    },
    select: {
        marginTop: 3,
        marginBottom: 3,
        width: 135,
        borderRadius: 10,
        height: 30,
        backgroundColor: '#a6a6a6',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    close: {
        marginTop: 3,
        marginBottom: 3,
        width: 135,
        backgroundColor: '#a6a6a6',
        margin: 10,
        marginLeft: 0,
        alignItems: 'center',
        borderRadius: 10,
        height: 30,
        justifyContent: 'center'
    },
    chapter: {
		fontSize: 18,
		color: 'white',
		fontWeight: 'bold',
		textAlignVertical: 'center',
        overflow: 'hidden',
	},
    chapterName: {
        fontSize: 18,
        padding: 5,
        overflow: 'hidden',
    }
})

export default ModalSelector