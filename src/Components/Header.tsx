import React from "react";
import styled from "styled-components";
import { SiBuymeacoffee } from "react-icons/si";
import { NavLink } from "react-router-dom";
import { CartStore } from "./Global/Global";
import { useRecoilValue } from "recoil";
const Header: React.FC = () => {
	const readCart = useRecoilValue(CartStore);
	return (
		<Container>
			<Navigation>
				<Logo>
					<SiBuymeacoffee />
					eBuy
				</Logo>

				<Nav
					style={({ isActive }) => ({
						color: isActive ? "#fff" : "#545e6f",
						background: isActive ? "#7600dc" : "#f0f0f0",
					})}
					to='/'>
					Home
				</Nav>
				<Nav to='/product'>Products</Nav>
				<Nav to='/admin'>Admin</Nav>
				<Nav to='/dispacher'>Dispatcher</Nav>
			</Navigation>
			<NavLink style={{ textDecoration: "none", color: "white" }} to='/cart'>
				{" "}
				<CartHold>Cart {readCart.length}</CartHold>
			</NavLink>
		</Container>
	);
};

export default Header;

const CartHold = styled.div`
	margin-right: 20px;
`;
const Container = styled.div`
	background-color: black;
	color: white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 70px;
`;
const Navigation = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Nav = styled(NavLink)`
	font-size: 13px;
	cursor: pointer;
	margin-left: 20px;
	transition: all 350ms;
	text-decoration: none;
	color: white;

	:hover {
		color: silver;
	}

	&:active {
		color: silver;
	}
`;
const Logo = styled.div`
	margin-right: 20px;
	margin-left: 40px;
	font-size: 23px;
	font-weight: bold;
	display: flex;
	justify-content: center;
	align-items: center;
`;
