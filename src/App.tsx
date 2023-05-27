import NavBar from './components/NavBar';
import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import PageContainer from './components/PageContainer';
import AddsContainer from './components/AddsContainer';
import PageFooter from './components/PageFooter';
import RealmOfInterestMenu, { RealmOfInterestMenuPlaceholder } from './components/RealmOfInterestMenu';
import { RealmOfInterestModel } from './viewmodels/RealmOfOnterestModel';

const companyName = 'Bogdarone S.R.L.';
const navItems = ['About', 'Contact'];

const homePage = <Home/>;
const aboutPage = <About/>;
const contactPage = <Contact/>;

const _tempRealmOfInterest: RealmOfInterestModel = {
	id: '0',
	image: ''
}

function App() {
	const [page, setPage] = useState(homePage);
	const [realmOfInterest, setRealmOfInterest] = useState<RealmOfInterestModel>();
	
	useEffect(() => {
		// Simulate a db query for getting the viewModel
		new Promise((resolve) => setTimeout(resolve, 3000))
			.then(() => setRealmOfInterest(_tempRealmOfInterest));
	}, []);
	
	const handleHomeClick = (): void => {
		if (page !== homePage) setPage(homePage);
	};
	
	const handleAboutClick = (): void => {
		if (page !== aboutPage) setPage(aboutPage);
	};
	
	const handleContactClick = (): void => {
		if (page !== contactPage) setPage(contactPage);
	};
	
	return (
		<Stack className="App">
			<NavBar 
				homeItem={{
					caption: companyName,
					onClick: handleHomeClick
				}}
				navItems={[
					{
						caption: navItems[0],
						onClick: handleAboutClick
					},
					{
						caption: navItems[1],
						onClick: handleContactClick
					}
				]}
			/>
			{realmOfInterest 
				? <RealmOfInterestMenu viewModel={realmOfInterest}/> 
				: <RealmOfInterestMenuPlaceholder/>}
			<PageContainer page={page} />
			<AddsContainer />
			<PageFooter />
		</Stack>
	);
}

export default App;
