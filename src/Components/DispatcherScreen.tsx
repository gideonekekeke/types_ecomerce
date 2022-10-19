import React, { useRef } from "react";
import styled from "styled-components";
import { useRecoilValue, useRecoilState } from "recoil";
import { dispacherStore } from "./Global/Global";
import { iQuantityData } from "./interfaces";

const DispatcherScreen = () => {
	const [tokenValue, setTokenValue] = React.useState<string>("");

	const readDispatch = useRecoilValue(dispacherStore);
	const [dispach, setDispach] = useRecoilState(dispacherStore);

	let put = parseInt(tokenValue);

	console.log(put);

	const setUpDelievery = (product: iQuantityData) => {
		setDispach((el) => {
			const check = el.find((props) => props.id === product.id);

			if (check) {
				return el.map((item) =>
					item.id === product.id ? { ...product, delievered: true } : item,
				);
			} else {
				return [...el, { ...product, QTY: 1 }];
			}
		});
	};

	return (
		<Container>
			<Card>
				<h3>Dispacher Screen</h3>
			</Card>
			<br />
			<br />
			<div style={{ display: "flex", flexWrap: "wrap" }}>
				{readDispatch?.map((props) => (
					<Comp>
						<FirstCom>
							<Image src={props.image} />
						</FirstCom>
						<SecondComp>
							<h3>{props.category}</h3>
							<span>${props.price}</span>
							<p>{props.description}</p>

							<ButtonHold>
								<FirstHold>
									<Input
										onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
											setTokenValue(e.target.value);
										}}
										placeholder='Enter your 4 digit token'
									/>
								</FirstHold>
								{props.delievered ? (
									<Button
										style={{
											backgroundColor: "green",
										}}>
										Delivered
									</Button>
								) : (
									<>
										{put === props.token ? (
											<Button
												onClick={() => {
													setUpDelievery(props);
												}}>
												Proccess & Deliver
											</Button>
										) : (
											<Button
												style={{
													backgroundColor: "gray",
													cursor: "not-allowed",
												}}>
												Proccess & Deliver
											</Button>
										)}
									</>
								)}
							</ButtonHold>
						</SecondComp>
					</Comp>
				))}
			</div>
		</Container>
	);
};

export default DispatcherScreen;

const Input = styled.input`
	width: 250px;
	margin-bottom: 10px;
`;
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
	width: 300px;
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
	text-align: center;
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
