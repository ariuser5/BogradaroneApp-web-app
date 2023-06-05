import { Product } from "../models/Types";
import { google } from 'googleapis';

const quickDataCredentials = {
	type: "service_account",
	project_id: "quick-data-388008",
	private_key_id: "4a7d6c6f4949350317c130877270421400f80ca8",
	private_key: "-----BEGIN PRIVATE KEY-----\nMIIEuwIBADANBgkqhkiG9w0BAQEFAASCBKUwggShAgEAAoIBAQDG2qngIoDtGfTU\nt6z4UtHMWB3ME7CNv6pO518de6zzTd1vrmMPqFKaQQ3kxeWt4ZXPzMb9TbefnRBI\n/LwwqeRp6P3bRjukdHhUuUVHldWcWrzBgeufYiQbzpiu5bRGucYwh30VF7emyI7Z\nWGuf9jkw3JUZKN+VhLCo+Cc7H5qaueJvagsTLh3/4Gmj4cFbM+M2+80j1pUZVxIp\nCIfWX9Erm5wSXOP/yTmI5I4/PNkpc0/mupJtP/MniORtHc+lpGNXuYJGL9AuY4sS\nz6nlAsIOZ6hXEef8X0aYvvJO8UTJx6FzUG86ca3Hn/LVhmpmEW9MPvQ0em09/3IJ\nSGn/Yj0BAgMBAAECgf9u3q7pSJfMq4oJMfkLae5+M2++8m6fzNbSfLZ6U1grgqTR\njr6bhMZFGM0dwGv5IETeUtbBuXD9FbdC+nOMJdfOAeZ20sLUmQp+MmeyX8bszHc+\nF2UUml8hIdvc/SRkKGM1vJlFGEmAGnRXqQXyOwC5G1RsXV2g3XyQuP43o1Y6hvZD\ntF58ItVgX2mK4Y4QBxQ/KcK+8pNNBHgcFWIF1/NSGvyJJyxJoGUUrsJ7SeJsGPOO\nY6T1afDrNFmP9QjMcFm5NR0XA6ncmoDCt1vNEuuQApgOKl0ejLdnc2lEsrFFfPqA\nV76rfdmGNqun3b4zi7tPUrjQIbv9QdCkixLboA0CgYEA5rQIxSOwfIs7Cyffvjlp\ndpvshB10fct5MPTdTq2TXZ+PTYc4TURH1guANfT5dGy6Xzjtp3klg1enr6E5145J\njgvOB9EvSNe8XCyCcPu5R+Z1w1L4wWHbXz6wttSrXdYRFDWdSzNlsUjjmCxX3fnc\njVXwn6MqoCzlSAckKT/LPUcCgYEA3KibkDUhlpyw3jfOEEQjfTZOSRGMUipd/kU7\njtHxcku9FB6P4y9AEy9ppyaqC7KXY17AXKOHL7lCSzcxN6mT1wnA2EO/r39OZ+Eg\nK222bWqNDiZ81pQYG1QEKTVxnZczSyMtQkGSKzf0zPcitqEi8pojd5i/kvpHl9V/\nRrmNt3cCgYBmFQ24ZbVnNph2tDsdyfuvnwkF4J62Nv22OvNeKBIIIF1hmc7A6dC7\nlrUxqudiq+W/0sneDA4cUwIBBd85UV2cu/57mQVKPyO6yXsikVAHz6MWPbWSpEFU\noMHC9NGrINjHz319VA3QZ4dFw4FR2IjOBVQG30UyQQtnVrmagv7kawKBgQDayxiN\nEhG+/Jlnjl/1wwqJgkp3qz2+zyGqGU3n3IYTNcRC6db0hop7O30Ab5cWyDvSHUaR\n1Ngb2w8/83cK4UulYpdkGTE9O/cri49RYJUNwyQgTstkHS4WEuWZUtPYVe9XZobe\n9pOP5QkIH1i9S+OSOIJIeR4kB6TriZeNMjmyGwKBgDgKeTnDoRsptNqssRh60hvr\nseG3+LkyvZfTeapjBymM6ag7SI1A2Alh10meGvrDwlBUkrVXdpF9gT7ScXqh2oDs\nrfPmem+jC9AeP0/u566+u9lczftZDxupHa4qDUR5OZagygwIbifBK4VERxp8ixpe\nL0hUiiSckFHR96YQM1dm\n-----END PRIVATE KEY-----\n",
	client_email: "quickdatamaster@quick-data-388008.iam.gserviceaccount.com",
	client_id: "100706593949933989840",
	auth_uri: "https://accounts.google.com/o/oauth2/auth",
	token_uri: "https://oauth2.googleapis.com/token",
	auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
	client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/quickdatamaster%40quick-data-388008.iam.gserviceaccount.com",
	universe_domain: "googleapis.com"
};

const spreadsheetId = "10qDdoWPP1QgYjzRsVgTn93E7_K4k-Q31lOq0HMq1xI8";

export const getProducts = async () => {
	const auth = new google.auth.GoogleAuth({
		credentials: quickDataCredentials,
		scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
	});
	// const sheets = google.sheets({ version: "v4", auth: client });
	const sheets = google.sheets({ version: "v4", auth });
	// Use the 'sheets' object to interact with the API.
	// For example, to read values from a specific sheet:
	const range = "Sheet1!A1:C10"; // Specify the range of cells you want to read.
	const response = await sheets.spreadsheets.values.get({
		spreadsheetId,
		range,
	});
	const values = response.data.values;
	if (values) {
		// Process the retrieved values.
		console.log(values);
	}
};

const oldGetProducts = async (): Promise<Product[]> => {
	const imageLinks  = (
		await fetch('imagesLinks.txt')
			.then(response => response.text())
	).split('\n');
	
	return imageLinks.map<Product>((imageLink, index) => ({
		id: index.toString(),
		name: `Product ${index}`,
		image: imageLink,
		description: `Description for product ${index}`
	}));
};