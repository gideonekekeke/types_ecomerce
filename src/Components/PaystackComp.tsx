import { usePaystackPayment } from "react-paystack";
import { useId } from "react";
import { iQuantityData } from "./interfaces";
import { useRecoilValue, useRecoilState } from "recoil";
import { CartStore, dispacherStore } from "./Global/Global";
import styled from "styled-components";

const PaystackHookExample = () => {
	const readCart = useRecoilValue(CartStore);
	const id = useId();
	const [cart, setCart] = useRecoilState(CartStore);
	const [dispach, setDispach] = useRecoilState(dispacherStore);

	console.log("this is the dispatch", dispach);

	const getTotal = (product: iQuantityData[]) =>
		product.reduce((a: number, b) => a + b.QTY! * b.price, 0);

	const config = {
		reference: new Date().getTime().toString(),
		email: "user@example.com",
		amount: Math.ceil(getTotal(readCart)),
		publicKey: "pk_test_23d13fb294f558953fdcdc971aa6ece27ff088e2",
	};

	// you can call this function anything
	const onSuccess = () => {
		const reference = new Date().getTime().toString();
		console.log("success", reference);
		setCart([]);
		setDispach(
			readCart.map((props) => {
				return { ...props, token: Math.floor(1000 + Math.random() * 9000) };
			}),
		);
	};

	// you can call this function anything
	const onClose = () => {
		console.log("closed");
	};

	const initializePayment = usePaystackPayment(config);
	return (
		<div>
			<Button
				onClick={() => {
					initializePayment(onSuccess, onClose);
				}}>
				Proceed to payment
			</Button>
		</div>
	);
};

function PaystackComp() {
	return (
		<div className='App'>
			<PaystackHookExample />
		</div>
	);
}

export default PaystackComp;

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
