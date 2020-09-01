import React from "react";
import Card from "./Card";

const CardList = ({ company, job }) => {
	const cardDetails = company ? company : job;
	return (
		<>
			<Card cardDetails={cardDetails} />
		</>
	);
};

export default CardList;
