import NavBar from './components/NavBar';
import { createBogdaroneTheme, ThemeProvider } from "./styles/Theme/BogdaroneThemeProvider";
import Home from './views/Home';
import { Stack } from '@mui/material';

const navItems = ['About', 'Contact'];

function App() {
	const theme = createBogdaroneTheme(false);
	
	return (
		<ThemeProvider theme={theme}>
			<Stack className="App">
				<NavBar companyName='Bogdarone S.R.L.' navItems={navItems}/>
				<Home/>
			</Stack>
		</ThemeProvider>
	);
}

export default App;
