import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminScreen from "./Components/AdminScreen";
import CartScreen from "./Components/CartScreen";
import DetailScreen from "./Components/DetailScreen";
import DispatcherScreen from "./Components/DispatcherScreen";
import Header from "./Components/Header";
import HomeScreen from "./Components/HomeScreen";
import Product from "./Components/Product";
const App: React.FC = () => {
	return (
		<div>
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<HomeScreen />} />
					<Route path='/product' element={<Product />} />
					<Route path='/product/:id' element={<DetailScreen />} />
					<Route path='/cart' element={<CartScreen />} />
					<Route path='/admin' element={<AdminScreen />} />
					<Route path='/dispacher' element={<DispatcherScreen />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
