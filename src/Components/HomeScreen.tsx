import React from "react";
import styled from "styled-components";
import pic from "../img/1.gif";
const HomeScreen: React.FC = () => {
	return (
		<Container>
			<Image src={pic} />
		</Container>
	);
};

export default HomeScreen;
const Image = styled.img``;
const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 85vh;
	/* height: 100vh; */
`;
