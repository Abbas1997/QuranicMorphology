import { React, useState, useEffect, lazy, Suspense } from 'react';
import Indicator from './Components/Indicator';


const Content = lazy(() => import('./Components/Content'))
	


const App = () => {
	const [cvno, set_cvno] = useState([1, 1])
	const [content, setContent] = useState(<Indicator />)

	useEffect(() => {
		setContent(<Content cvno={cvno} set_cvno={set_cvno} />)
	}, [cvno])
	return (
		<Suspense fallback={<Indicator />}>
			{content}
		</Suspense>
	)
};

export default App;
