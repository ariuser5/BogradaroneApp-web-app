import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SearchField from './MenuBar/SearchField';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { PageHorizontalBoundary } from './styling/PageHorizontalBoundary';

const defaultHomeButtonCaption = 'Home';
const defaultHomeButonBehavior = () => alert('Home page');

interface NavBarProps {
	/**
	* Injected by the documentation to work in an iframe.
	* You won't need it on your project.
	*/
	window?: () => Window;
	homeItem?: NavItemBuildArgs;
	navItems?: NavItemBuildArgs[];
	pageWidth?: string;
}

export interface NavItemBuildArgs {
	caption: string;
	onClick: () => void;
}

export default function NavBar(props: NavBarProps): JSX.Element {
	const { homeItem, navItems } = props;
	
	return (
		<AppBar className="nav-Bar" component="nav" position='sticky'>
			<PageHorizontalBoundary pageWidth={props.pageWidth}>
				<Toolbar>
					<MenuButton/>
					{homeItem === undefined || <HomeButton buildArgs={homeItem}/>}
					{/* <SearchField/> */}
					{navItems === undefined || <RightSideButtons itemsArgs={navItems}/>}
				</Toolbar>
			</PageHorizontalBoundary>
		</AppBar>
	);
}

function MenuButton({}): JSX.Element {
	return (
		<IconButton
			size="large"
			edge="start"
			color="inherit"
			aria-label="menu"
			sx={{ mr: 2 }}
		>
			<MenuIcon />
		</IconButton>
	);
}

function HomeButton({buildArgs}: {
	buildArgs?: NavItemBuildArgs
}): JSX.Element {
	return (
		<Typography
			variant="h5"
			component="div"
			sx={{ 
				cursor: 'pointer',
				display: { xs: 'none', sm: 'block' } 
			}}
			onClick={buildArgs ? buildArgs.onClick : defaultHomeButonBehavior}>
			{buildArgs ? buildArgs.caption : defaultHomeButtonCaption}
		</Typography>
	);
}

function RightSideButtons({
	itemsArgs = [] as NavItemBuildArgs[]
}): JSX.Element {
	return (
		<Box 
			sx={{ display: { xs: 'none', sm: 'block' } }}
			children={
				itemsArgs.map((itemArgs) => (
					<Button 
						key={itemArgs.caption} 
						sx={{ color: '#fff' }}
						onClick={itemArgs.onClick}
					>{itemArgs.caption}</Button>
				))
			}
		/>
	);
}