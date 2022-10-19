import React from "react";
import styled from "styled-components";
import { useRecoilValue, useRecoilState } from "recoil";
import { CartStore } from "./Global/Global";
import { iQuantityData } from "./interfaces";
import PaystackComp from "./PaystackComp";
const CartScreen: React.FC = () => {
	const readCart = useRecoilValue(CartStore);

	const [cart, setCart] = useRecoilState(CartStore);

	console.log(cart);

	const addToCart = (product: iQuantityData) => {
		setCart((el) => {
			const check = el.find((props) => props.id === product.id);

			if (check) {
				return el.map((item) =>
					item.id === product.id ? { ...product, QTY: item.QTY! + 1 } : item,
				);
			} else {
				return [...el, { ...product, QTY: 1 }];
			}
		});
	};
	const removeOneCart = (product: iQuantityData) => {
		setCart((el) => {
			const check = el.find((props) => props.id === product.id);

			if (check) {
				return el.map((item) =>
					item.id === product.id ? { ...product, QTY: item.QTY! - 1 } : item,
				);
			} else {
				return [...el, { ...product, QTY: 1 }];
			}
		});
	};

	const remove = (product: iQuantityData) => {
		setCart((el) => {
			return el.filter((props) => props.id !== product.id);
		});
	};

	const getTotal = (product: iQuantityData[]) =>
		product.reduce((a: number, b) => a + b.QTY! * b.price, 0);

	const getQTY = (product: iQuantityData[]) =>
		product.reduce((a: number, b) => a + b.QTY!, 0);

	return (
		<Container>
			<Card>
				<h5>Total quantity : {getQTY(readCart)}</h5>
				<h5>Total Price : {Math.ceil(getTotal(readCart))}</h5>
				<PaystackComp />
			</Card>
			<br />
			<br />
			<div>
				{readCart?.map((props) => (
					<Comp>
						<FirstCom>
							<Image src={props.image} />
						</FirstCom>
						<SecondComp>
							<h3>{props.title}</h3>
							<span>${props.price}</span>
							<p>{props.description}</p>
							<br />
							<br />
							<br />
							<ButtonHold>
								<FirstHold>
									<button
										onClick={() => {
											addToCart(props);
										}}>
										Add Quantity
									</button>
									<CountHold>{props.QTY}</CountHold>
									{props.QTY! <= 1 ? (
										<button
											style={{
												backgroundColor: "silver",
											}}>
											Reduce Quantity
										</button>
									) : (
										<button
											onClick={() => {
												removeOneCart(props);
											}}>
											Reduce Quantity
										</button>
									)}
								</FirstHold>
								<Button
									onClick={() => {
										remove(props);
									}}>
									Remove From Cart
								</Button>
							</ButtonHold>
						</SecondComp>
					</Comp>
				))}
			</div>
		</Container>
	);
};

export default CartScreen;

const Button = styled.div`
	margin-right: 10px;
	padding: 10px 10px;
	cursor: pointer;
	background-color: red;
	border: none;
	color: white;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const FirstHold = styled.div`
	display: flex;
	align-items: center;

	button {
		margin-right: 10px;
		padding: 10px 10px;
		cursor: pointer;
		background-color: green;
		border: none;
		color: white;
		border-radius: 10px;
		margin-bottom: 10px;
	}
`;
const CountHold = styled.div`
	margin-right: 10px;
`;
const ButtonHold = styled.div``;

const Image = styled.img`
	display: flex;
	flex-direction: column;
	object-fit: cover;
	/* align-items: center; */
	/* padding: 20px; */
	margin-right: 20px;
	height: 300px;

	width: 300px;
	background-color: silver;
	/* height: 400px; */
	box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
		rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
	border-radius: 5px;
`;
const SecondComp = styled.div`
	width: 500px;
`;
const FirstCom = styled.div``;
const Comp = styled.div`
	display: flex;
`;

// const Button = styled.div`
// 	margin-right: 10px;
// 	padding: 10px 20px;
// 	cursor: pointer;
// 	background-color: red;
// 	border: none;
// 	color: white;
// 	border-radius: 10px;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// `;

const UserImage = styled.img`
	height: 80px;
	width: 80px;
	border-radius: 50%;
	background-color: silver;
	border: 1px solid #123456;
	object-fit: cover;
`;
const CardHold = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	justify-content: center;
`;

const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	margin: 10px;

	width: 200px;
	/* height: 400px; */
	box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
		rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
	border-radius: 5px;
`;

const Container = styled.div`
	margin-left: 20px;
	justify-content: center;
	align-items: center;
	display: flex;
	flex-direction: column;
`;
