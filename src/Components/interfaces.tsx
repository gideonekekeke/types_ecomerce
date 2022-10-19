export interface Data {
	id: number;
	price: number;
	title: string;
	image: string;
	category: string;
	description: string;
	rating: { count: number; rate: number };
}

export interface iQuantityData extends Data {
	QTY?: number;
	token?: number;
	delievered?: boolean;
}
