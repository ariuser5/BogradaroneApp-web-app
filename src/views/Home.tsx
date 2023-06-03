import React from 'react';
import './../styles/css/App.css';
import FilterMenu from '../components/FilterMenu';
import ProductsDisplayBox from '../components/ProductsDisplayBox';
import { Product } from '../models/Types';

interface HomePageProps {
	products?: Product[] | Promise<Product[]>;
}

const HomePage: React.FC<HomePageProps> = (
	props: HomePageProps
): React.ReactElement<HomePageProps, React.JSXElementConstructor<{}>> => {
	
	const filters = [
		{ text: 'abc' },
		{ text: 'bca' },
	];
	
	return (
		<React.Fragment>
			<FilterMenu filters={filters}/>
			<ProductsDisplayBox {...props}/>
		</React.Fragment>
	);
}

export default HomePage;