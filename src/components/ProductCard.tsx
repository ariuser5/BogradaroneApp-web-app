import { Box, Card } from '@mui/material';

interface ProductCardProps {
	imageUrl?: string,
	description?: string,
	margin?: string,
}

export default function ProductCard(props: ProductCardProps): JSX.Element {
	return (
		<Card
			sx={{
				cursor: 'pointer',
				width: '300px',
				height: '450px',
				margin: props.margin || '0px',
			}}>
			<Box 
				sx={{ 
					width: 'auto',
					height: '250px',
					borderBottom: '2px solid gray',
				}}>
				<img src={props.imageUrl} alt='' className='App-logo' style={{ maxWidth: '100%', maxHeight: '100%' }}/>
			</Box>
			<p>Edit <code>src/App.tsx</code> and save to reload.</p>
			<a className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
				style={{
					flexGrow: 2
				}}>
				Learn React
			</a>
		</Card>
	);
}
