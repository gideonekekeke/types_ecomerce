import { atom, selector } from "recoil";
import axios from "axios";
import { Data, iQuantityData } from "../interfaces";

const url = "https://fakestoreapi.com/products";
// const SingleProducturl = "https://fakestoreapi.com/products";

export const Products = selector({
	key: "Products",
	get: async () => {
		const newData = await axios.get(url);
		return newData.data as Array<iQuantityData>;
	},
});

export const SingleProducts = atom({
	key: "products",
	default: {} as iQuantityData,
});
export const CartStore = atom({
	key: "CartStore",
	default: [] as Array<iQuantityData>,
});
export const dispacherStore = atom({
	key: "dispacherStore",
	default: [] as Array<iQuantityData>,
});
