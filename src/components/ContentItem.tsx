import { Box, Card } from '@mui/material';
import logo from './../assets/logo.svg';

interface Props {
	imageUrl?: string,
	description?: string
}

export default function ContentItem(props: Props): JSX.Element {
	return (
		<Card
			sx={{
				cursor: 'pointer',
				width: '250px',
				height: '350px',
				margin: '10px',
			}}>
			<Box 
				sx={{ 
					width: 'auto',
					height: '200px',
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
