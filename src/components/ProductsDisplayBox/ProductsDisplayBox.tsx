import { Box } from '@mui/system';
import React, { useMemo } from 'react';
import { Product } from '../../models/Types';
import ProductCard from '../ProductCard';
import Overlay from './Overlay';
import EmptyContentMessage from './EmptyContentMessage';
import Pagination from './Pagination';
import { type } from 'os';

interface ProductsDisplayBoxProps {
	products?: Product[] | Promise<Product[]>;
	suppressOverlay?: boolean;
}

export default function ProductsDisplayBox(props: ProductsDisplayBoxProps): JSX.Element {
	
	
	return (
		<Box
			className="Page-Content-Row-Item"
			sx={{ 
				flexGrow: 1,
				justifyContent: 'center',
				border: '2px solid green',
			}}
		>
			<LoadableContent {...props}/>
		</Box>
	);
}

function LoadableContent(props: ProductsDisplayBoxProps): JSX.Element {
	const [loadedContent, setLoadedContent] = React.useState<Product[] | undefined>(undefined);
	
	const content: JSX.Element = useMemo(() => {
		if (loadedContent) {
			return <ContentWithPagination products={loadedContent}/>;
		}
		
		if (!props.products) {
			return <EmptyContentMessage/>;
		}
		
		if (Array.isArray(props.products)) {
			return <ContentWithPagination products={props.products}/>;
		}
		
		if (props.products instanceof Promise) {
			props.products.then(products => setTimeout(() => setLoadedContent(products), 2000));
			return props.suppressOverlay ? (<></>) : <Overlay/>;
		}
		
		throw new Error('Invalid props.products type: ' + typeof props.products);
	}, [props, loadedContent]);
	
	return content;
}

type PaginationSplitBoundaries = {
	maxWidth: number;
	maxHeight: number;
}

type PaginationSplitCapacity = {
	maxItemsPerPage: number;
}

type ContentWithPaginationProps = {
	products?: Product[];
	splitRules?: PaginationSplitBoundaries | PaginationSplitCapacity;
}

function ContentWithPagination(props: ContentWithPaginationProps): JSX.Element {
	const [pageNo, setPageNo] = React.useState<number>(1);
	const [pageCount, setPageCount] = React.useState<number>(3);

	const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
		setPageNo(page);
	};

	return (
		<React.Fragment>
			<Pagination page={pageNo} count={pageCount} onChange={handlePageChange}/>
			<CardsFlex products={props.products}/>
			<Pagination page={pageNo} count={pageCount} onChange={handlePageChange}/>
		</React.Fragment>
	);
}

function CardsFlex({products}: {
	products?: Product[] 
}): JSX.Element {
	let cards = Array<JSX.Element>(0);
	
	if (products) {
		cards = products.map((product, index) => (
			<ProductCard
				key={index}
				imageUrl={product.image}
			/>
		));
	}
	
	return (
		<Box className="Product-Card-Flex">
			{cards}
		</Box>
	);
}