import React from 'react';
import './../styles/css/Home.css';
import { Box } from '@mui/material';
import FilterMenu from '../components/FilterMenu';
import ContentDisplay from '../components/ContentDisplay';

const HomePage: React.FC<{}> = (props: {}): React.ReactElement<{}, React.JSXElementConstructor<{}>> => {
	
	const filters = [
		{ text: 'abc' },
		{ text: 'bca' },
	];
	
	return (
		<Box className="App-Container">
			<FilterMenu filters={filters}/>
			<ContentDisplay/>
		</Box>
	);
}

export default HomePage;