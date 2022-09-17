import { Pagination } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ContentItem from './ContentItem';


function Content(): JSX.Element {
	const [imagesUrls, setImagesUrls] = React.useState(new Array<string>());
	
	React.useEffect(() => {
		fetch('imagesLinks.txt')
			.then(response => response.text())
			.then(text => setImagesUrls(text.split('\n')));
	}, []);
	
	const productCards = imagesUrls.length > 0 
		? imagesUrls.map((imageUrl) => <ContentItem imageUrl={imageUrl}/>)
		: null;
	
	return (
		<Box
			sx={{
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'center',
			}}>
			{productCards}
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

export default function ContentDisplay(): JSX.Element {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Content/>
			<ContentPagination/>
		</Box>
	);
}