import React from "react";
import styled from "styled-components";
import { useRecoilValue, useRecoilState } from "recoil";
import { CartStore, Products } from "./Global/Global";
import { NavLink } from "react-router-dom";
import { iQuantityData } from "./interfaces";
const Product: React.FC = () => {
	const readData = useRecoilValue(Products);

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

	return (
		<Container>
			<CardHold>
				{readData &&
					readData?.map((props) => (
						<Card key={props.id}>
							<UserImage src={props.image} />
							<NavLink
								style={{
									textDecoration: "none",
									color: "black",
								}}
								to={`/product/${props.id}`}>
								<div
									style={{
										fontSize: "16px",
										fontWeight: "bold",
										textAlign: "center",
									}}>
									{props.category}
								</div>
							</NavLink>
							<div style={{ color: "gray" }}>${props.price}</div>

							<button
								onClick={() => {
									addToCart(props);
								}}>
								Add to Cart
							</button>
						</Card>
					))}
			</CardHold>
		</Container>
	);
};

export default Product;

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
`;
