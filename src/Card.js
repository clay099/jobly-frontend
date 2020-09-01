import React from "react";
import CompanyCard from "./CompanyCard";
import JobCard from "./JobCard";
import { Card as ReactCard } from "reactstrap";
import "./Card.css";

const Card = ({ cardDetails }) => {
	let cardType = cardDetails.handle ? (
		<CompanyCard cardDetails={cardDetails} />
	) : (
		<JobCard cardDetails={cardDetails} />
	);

	return (
		<ReactCard className={`card-${cardDetails.handle ? "company" : "job"}`}>
			{cardType}
		</ReactCard>
	);
};

export default Card;
