import { Product } from "../models/Types";


export const getProducts = async (): Promise<Product[]> => {
	const imageLinks  = (
		await fetch('imagesLinks.txt')
			.then(response => response.text())
	).split('\n');
	
	return imageLinks.map((imageLink, index) => ({
		id: index.toString(),
		name: `Product ${index}`,
		image: imageLink,
		description: `Description for product ${index}`
	}));
};