import { getProducts as getProductsFromRepository } from "../dataaccess/ProductRepository";
import { Product } from "../models/Types";

export interface ProductService {
	getProducts(): Promise<Product[]>;
}

export class ProductServiceImpl implements ProductService {
	async getProducts(): Promise<Product[]> {
		getProductsFromRepository();
		return [];
	}
}