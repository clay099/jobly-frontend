import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, CardBody, CardTitle, CardText } from "reactstrap";
import defaultLogo from "./assets/companyLogo.jpg";
import "./CompanyCard.css";

const CompanyCard = ({ cardDetails }) => {
	if (cardDetails.logo_url === "") {
		cardDetails.logo_url = defaultLogo;
	}
	return (
		<>
			<Link
				className="CompanyCard"
				exact
				to={`companies/${cardDetails.handle}`}
			>
				<CardBody>
					<Row>
						<Col sm="11">
							<CardTitle>
								<strong>{cardDetails.name}</strong>
							</CardTitle>

							<CardText>{cardDetails.description}</CardText>
						</Col>

						<img
							className="CompanyCard-img"
							src={cardDetails.logo_url}
							alt={cardDetails.handle}
						/>
					</Row>
				</CardBody>
			</Link>
		</>
	);
};

export default CompanyCard;
