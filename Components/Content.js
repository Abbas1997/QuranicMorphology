import { React, useRef, Suspense, lazy, useState, useEffect } from 'react';
import { ScrollView} from 'react-native';
import {getData} from './getData';

const Content = (props) => {
	const ref = useRef(null)
	return(
		<ScrollView stickyHeaderIndices={[0]} ref={ref}>
			{getData(ref, props.cvno, props.set_cvno)}
		</ScrollView>
	)
}
export default Content