import { Pagination, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useMemo } from 'react';
import { Product } from '../models/Types';
import ProductCard from './ProductCard';

interface ContentDisplayBoxProps {
	products?: Product[] | Promise<Product[]>;
	suppressOverlay?: boolean;
}

export default function ProductsDisplayBox(props: ContentDisplayBoxProps): JSX.Element {
	
	
	return (
		<Box 
			sx={{ 
				flexGrow: 1,
				justifyContent: 'center',
				padding: '10px',
				border: '2px solid green',
			}}
		>
			<LoadableContent {...props}/>
			<ContentPagination/>
		</Box>
	);
}

function LoadableContent(props: ContentDisplayBoxProps): JSX.Element {
	const [loadedContent, setLoadedContent] = React.useState<Product[] | undefined>(undefined);
	
	const content: JSX.Element = useMemo(() => {
		if (loadedContent) {
			return <CardsFlex products={loadedContent}/>;
		}
		
		if (!props.products) {
			return <EmptyContentMessage/>;
		}
		
		if (props.products instanceof Array<Product>) {
			return <CardsFlex products={props.products}/>;
		}
		
		if (props.products instanceof Promise) {
			props.products.then(setLoadedContent);
			return props.suppressOverlay ? (<></>) : <Overlay/>;
		}
		
		throw new Error('Invalid props.products type: ' + typeof props.products);
	}, [props, loadedContent]);
	
	return content;
}

function Overlay(): JSX.Element {
	return (
		<Box
			sx={{
				width: '100%',
				height: '100%',
				backgroundColor: 'rgba(0, 0, 0, 0.5)',
				zIndex: 1,
			}}
		>
			<Typography>
				Loading...
			</Typography>
		</Box>
	);
}

function EmptyContentMessage(): JSX.Element {
	return (
		<Box
			sx={{
				width: '100%',
				height: '100%',
				backgroundColor: 'rgba(0, 0, 0, 0.5)',
				zIndex: 1,
			}}
		>
			<Typography>
				No content to display
			</Typography>
		</Box>
	);
}

function CardsFlex({products}: {
	products?: Product[] 
}): JSX.Element {
	let cards = Array<JSX.Element>(0);
	
	if (products) {
		cards = products.map((product) => (
			<ProductCard 
				margin='10px'
				imageUrl={product.image}
			/>
		));
	}
	
	return (
		<Box
			sx={{
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'left',
				border: '2px solid red',
			}}>
			{cards}
		</Box>
	);
}

function ContentPagination(): JSX.Element {
	return (
		<Box 
			sx={{
				display: 'flex',
				justifyContent: 'center',
			}}>
			<Pagination count={3} color='standard'/>
		</Box>
	);
}