import React, { useState } from 'react';
import { View, Text, Modal, StatusBar, Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as chapterList from './chapters.json';
import Info from './Info'
import ModalSelector from './ModalSelector';

const NavNext = (props) => {
	let r = props.next.split(':')
	let nextno = '(' + r[0].replace('(', '') + ':' + r[1] + ')'
	return(
		<Pressable style={styles.navNext} android_ripple={{ color: 'grey', foreground: true }}
		onPress = {() => { 
			let dValue = props.next.replace('(','').split(':')
			props.set_cvno([dValue[0], dValue[1]])
			props.scroller.current.scrollTo({ x: 0, y: 0, animated: false })
		}}>
			<View style={{borderRadius: 10, backgroundColor: '#8c8c8c', elevation: 5}}>
				<Icon style={[styles.nextChevron]} name={'chevron-' +props.chev} color="white" size={22} ></Icon>
			</View>
		</Pressable>
	)
}
const SelectionMenu = (props) => {
	const [infoVisible, setInfoVisible] = useState(false)
	const [selectorVisible, setSelectorVisible] = useState(false)	
	return (
		<View style={[styles.bar]}>
			<Modal visible={selectorVisible} transparent={true}>
				<ModalSelector setcvno={props.set_cvno} chapterList={chapterList} setSelectorVisible={setSelectorVisible} chapter={props.cvno[0]} verse={props.cvno[1]}></ModalSelector>
			</Modal>
			<Modal visible={infoVisible} onRequestClose={() => setInfoVisible(false)}>
				<Info setInfoVisible={setInfoVisible}></Info>
			</Modal>
			<View style={{minWidth: 5}}></View>
			<View style={{ flexDirection: 'row' }}>
				<StatusBar backgroundColor={'grey'} />
				{(props.Prev != '' || props.Next == null) ? <NavNext next={props.Prev} chev={'left'} set_cvno={props.set_cvno} scroller={props.scroller} /> : null}
				<Pressable style={styles.chapterVerse}
					android_ripple={{ color: 'grey', foreground: true }}
					onPress={() => setSelectorVisible(true)}>
					<Text style={styles.chapter}>{chapterList[props.cvno[0]-1].chapterNumber} . {chapterList[props.cvno[0]-1].phonetic} . {props.cvno[1]}</Text>
				</Pressable >
				{(props.Next != '' || props.Next == null) ? <NavNext next={props.Next} chev={'right'} set_cvno={props.set_cvno} scroller={props.scroller} /> : null}
			</View>
			<Pressable style={[styles.info]}
				onPress={() => setInfoVisible(true)}
				android_ripple={{ color: 'grey', foreground: true }}>
				<Icon  name={'info'} color="#a6a6a6" size={22} />
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	bar: {
		flexDirection: "row",
		backgroundColor: 'grey',
		alignItems: "center",
		alignContent: 'center',
		justifyContent: 'center',
		elevation: 5,
		height: 40,
		padding: 4,
		shadowColor: 'black'
	},
	chapter: {
		fontSize: 18,
		color: 'white',
		fontWeight: 'bold',
		textAlignVertical: 'center'
	},
	nextChevron: {
		color: 'white',
		textAlignVertical: 'center'
	},
	info: {
		position: 'absolute',
		right: 5,
		alignItems: 'center',
		backgroundColor: 'grey',
		borderRadius: 100,
		padding: 0,
	},
	chapterVerse: {
		flexDirection: 'row',
		backgroundColor: '#8c8c8c',
		elevation: 5,
		height: 36,
		borderRadius: 10,
		alignItems: 'center',
		padding: 5
	},
	verseNumber: {
		backgroundColor: 'white',
		lineHeight: 18,
		fontSize: 18,
		color: 'grey',
		fontWeight: 'bold'
	},
	navNext: {
		flexDirection: 'row',
		margin: 5,
		alignItems: 'center',
		borderRadius: 10
	}
})

export default SelectionMenu