import { StyleSheet, View, ActivityIndicator} from 'react-native';

const Indicator = () => {
	return(
		<View style={styles.indicator} >
			<ActivityIndicator style={styles.indicator} color={'grey'} size={'large'}></ActivityIndicator>
		</View>
	)
}

const styles = StyleSheet.create({
	indicator : {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center'
	}
})

export default Indicator