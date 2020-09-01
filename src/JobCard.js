import React from "react";
import { CardBody, CardTitle, CardText } from "reactstrap";

const JobCard = ({ cardDetails }) => {
	console.log(cardDetails);
	return (
		<>
			<CardBody>
				<CardTitle>
					<strong>{cardDetails.title}</strong>
				</CardTitle>

				<CardText>Salary: {cardDetails.salary}</CardText>
				<CardText>Equity: {cardDetails.equity}</CardText>
			</CardBody>
		</>
	);
};

export default JobCard;
