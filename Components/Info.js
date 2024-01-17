import { Text, ScrollView, StyleSheet, View, Pressable} from 'react-native';
import license from './license';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Info = (props) => {
    return (
        <>
            <View style={styles.bar}>
                <Pressable onPress={() => props.setInfoVisible(false)}>
                    <Text style={styles.back}>
                        <Icon name={'arrow-back'}></Icon>
                        Back
                    </Text>
                </Pressable>
            </View>
            <ScrollView style={{ flex: 1 }}>
                <Text style={{ margin: 10, color: 'black' }}>
                    This app is based on the dataset of grammatically annotated Quranic Verses, downloaded from corpus.quran.com.
                    {'\n'} {'\n'}
                    The word by word english translation Data is taken from data-quran repository which is
                    licensed under CC BY-NC-ND 4.0{'\n'}{'\n'}({`https://creativecommons.org/licenses/by-nc-nd/4.0/`}){'\n'}{'\n'}
                    and collected by Hablullah team from various sources, e.g. Tanzil, QuranEnc, etc.{'\n'}{'\n'}
                    Link: {`https://github.com/hablullah/data-quran`}{'\n'}{'\n'}
                    The font for the Arabic text is Scheherazade New {'\n'}
                    {'\n'}
                    Link: {`https://software.sil.org/scheherazade/download/`} {'\n'}{'\n'}
                </Text>
                <Text style={{ margin: 5, fontWeight: 'bold', color: 'black' }}> CORPUS.QURAN.COM License:</Text>
                <Text style={{ margin: 10, color: 'black' }}>{license}</Text>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
	bar: {
		flexDirection: "row",
		backgroundColor: 'grey',
		alignItems: "center",
		alignContent: 'left',
		justifyContent: 'left',
		elevation: 5,
		height: 40,
		padding: 0
	},
    back: {
        fontSize: 16,
        color: 'white',
        marginLeft: 10,
        fontWeight: 'bold'
    }
})

export default Info