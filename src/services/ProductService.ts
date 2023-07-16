import { Product } from "../models/Types";

const apiAddress = "http://localhost:5000";
const productsEndPoint = "/products";
const imageEndPoint = "/images/{id}";

export interface ProductService {
	getProducts(): Promise<Product[]>;
}

export class ProductServiceImpl implements ProductService {
	async getProducts(): Promise<Product[]> {
		const productsUrl = apiAddress + productsEndPoint;
		const response: Promise<any> | undefined = await fetch(productsUrl)
			.then((response) => {
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				return response.json();
			})
			.catch((error) => {
				console.log(`Error: ${error}`);
				return undefined;
			});

		if (!response) {
			return [];
		}
		
		const products: Product[] = ((await response) as Array<any>).map((productJson: any) => {
			const imageUrl = apiAddress + imageEndPoint.replace("{id}", productJson.imageId);
			const product: Product = {
				id: productJson.id,
				name: productJson.name,
				image: imageUrl,
				description: productJson.description,
			};
			return product;
		});
		
		return products;
	}
}