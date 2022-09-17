import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SearchField from './SearchField';

function HomeButton({text = 'Home'}: {text?: string}): JSX.Element {
	return (
		<Typography
			variant="h5"
			component="div"
			sx={{ 
				cursor: 'pointer',
				display: { xs: 'none', sm: 'block' } 
			}}
			onClick={() => alert('Home page')}>
			{text}
		</Typography>
	);
}

function RightSideButtons({items = [] as string[]}): JSX.Element {
	const buttons = items.map((item) => (
		<Button key={item} sx={{ color: '#fff' }}>{item}</Button>
	));
	
	return <Box sx={{ display: { xs: 'none', sm: 'block' } }} children={buttons}/>;
}


interface Props {
	/**
		* Injected by the documentation to work in an iframe.
		* You won't need it on your project.
		*/
	window?: () => Window;
	companyName?: string,
	navItems: string[];
}

export default function NavBar(props: Props): JSX.Element {
	return (
		<AppBar component="nav" position='sticky'>
			<Toolbar>
				<HomeButton text={props.companyName}/>
				<SearchField/>
				<RightSideButtons items={props.navItems}/>
			</Toolbar>
		</AppBar>
	);
}
