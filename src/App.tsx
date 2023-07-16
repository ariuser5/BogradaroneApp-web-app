import NavBar from './components/NavBar';
import { Stack } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import PageContainer from './components/PageContainer';
import AddsContainer from './components/AddsContainer';
import PageFooter from './components/PageFooter';
import MenuBar from './components/MenuBar/MenuBar';
import { RealmOfInterestModel } from './viewmodels/RealmOfOnterestModel';
import { ProductService, ProductServiceImpl } from './services/ProductService';
import { Product } from './models/Types';

const companyName = 'Bogdarone S.R.L.';
const navItems = ['About', 'Contact'];

const homePage: JSX.Element = <Home/>;
const aboutPage: JSX.Element = <About/>;
const contactPage: JSX.Element = <Contact/>;

const _tempRealmOfInterest: RealmOfInterestModel = {
	id: '0',
	image: ''
}

function App() {
	const [displayedPage, setDisplayedPage] = useState<JSX.Element>(homePage);
	const [productService, setProductService] = useState<ProductService>(new ProductServiceImpl());
	const [realmOfInterest, setRealmOfInterest] = useState<RealmOfInterestModel>();
	
	const loadHomePage = useCallback(() => {
		const loadingProducts = productService.getProducts();
		setDisplayedPage(<Home products={loadingProducts} />);
	}, [productService]);

	const handleHomeClick = useCallback(() => {
		loadHomePage();
	}, [displayedPage, productService]);
	
	const handleAboutClick = useCallback(() => {
		if (displayedPage !== aboutPage) setDisplayedPage(aboutPage);
	}, [displayedPage]);
	
	const handleContactClick = useCallback(() => {
		if (displayedPage !== contactPage) setDisplayedPage(contactPage);
	}, [displayedPage]);

	useEffect(loadHomePage, [productService]);
	
	useEffect(() => {
		// Simulate a db query for getting the viewModel
		new Promise((resolve) => setTimeout(resolve, 3000))
			.then(() => setRealmOfInterest(_tempRealmOfInterest));
	}, [productService]);
	
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
			/>{
				// realmOfInterest ? 
				<MenuBar/> 
					// : <RealmOfInterestMenuPlaceholder/>
			}
			<PageContainer page={displayedPage} />
			<AddsContainer />
			<PageFooter />
		</Stack>
	);
}

export default App;
