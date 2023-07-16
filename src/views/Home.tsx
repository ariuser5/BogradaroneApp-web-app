import React from 'react';
import './../styles/css/App.css';
import FilterMenu from '../components/FilterMenu';
import ProductsDisplayBox from '../components/ProductsDisplayBox/ProductsDisplayBox';
import { Product } from '../models/Types';
import SearchMenuBar from '../components/SearchMenuBar/SearchMenuBar';
import { PageHorizontalBoundary } from '../components/layout/PageHorizontalBoundary';
import { Box } from '@mui/material';

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
			<SearchMenuBar/>
			<Box className="Page-Content-Row">
				<FilterMenu filters={filters}/>
				<ProductsDisplayBox {...props}/>
			</Box>
		</React.Fragment>
	);
}

export default HomePage;