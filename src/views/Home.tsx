import React from 'react';
import './../styles/css/App.css';
import FilterMenu from '../components/FilterMenu';
import ContentDisplay from '../components/ContentDisplay';

const HomePage: React.FC<{}> = (props: {}): React.ReactElement<{}, React.JSXElementConstructor<{}>> => {
	
	const filters = [
		{ text: 'abc' },
		{ text: 'bca' },
	];
	
	return (
		<React.Fragment>
			<FilterMenu filters={filters}/>
			<ContentDisplay/>
		</React.Fragment>
	);
}

export default HomePage;