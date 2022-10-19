import React from "react";
import styled from "styled-components";
import { useRecoilValue, useRecoilState } from "recoil";
import { SingleProducts } from "./Global/Global";
import axios from "axios";
import { useParams } from "react-router-dom";
import { iQuantityData } from "./interfaces";

const DetailScreen: React.FC = () => {
	const id = useParams();

	const [data, setData] = useRecoilState(SingleProducts);

	const viewData = useRecoilValue(SingleProducts);

	const viewState = async () => {
		const data = await axios.get(`https://fakestoreapi.com/products/${id}`);

		const newData = data.data as iQuantityData;

		setData(newData);
	};

	console.log(viewData);

	React.useEffect(() => {
		viewState();
	}, []);

	// const data = useRecoilValue(ProductsDetail(props))
	return (
		<Container>
			<Comp>
				<FirstCom>
					<Image />
				</FirstCom>
				<SecondComp>
					<h3>Title</h3>
					<span>$20.23</span>
					<p>Description</p>
					<br />
					<br />
					<br />
					<ButtonHold>
						<FirstHold>
							<button>Add Quantity</button>
							<CountHold>0</CountHold>
							<button>Reduce Quantity</button>
						</FirstHold>
						<Button>Remove From Cart</Button>
					</ButtonHold>
				</SecondComp>
			</Comp>
		</Container>
	);
};

export default DetailScreen;

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

const Image = styled.div`
	display: flex;
	flex-direction: column;
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
const SecondComp = styled.div``;
const FirstCom = styled.div``;
const Comp = styled.div`
	display: flex;
`;
const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	margin-top: 100px;

	span {
		color: silver;
	}

	h3 {
		margin-bottom: 0;
	}
`;
