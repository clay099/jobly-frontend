import React, { useState } from "react";
import {
	CardBody,
	CardTitle,
	CardText,
	Button,
	Alert,
	Row,
	Col,
} from "reactstrap";
import JoblyApi from "./JoblyApi";

const JobCard = ({ cardDetails }) => {
	const [details, setDetails] = useState(cardDetails);
	const [errors, setErrors] = useState("");

	const apply = (
		<Button
			onClick={async () => {
				try {
					let res = await JoblyApi.applyForJob(details.id);
					setDetails({ ...details, state: res.message });
				} catch (e) {
					setErrors(e);
				}
			}}
			color="danger"
		>
			Apply
		</Button>
	);
	const applied = (
		<Button disabled color="danger">
			Applied
		</Button>
	);
	return (
		<>
			<CardBody>
				<Row>
					<Col sm="10">
						<CardTitle>
							<strong>{details.title}</strong>
						</CardTitle>

						<CardText>Salary: {details.salary}</CardText>
						<CardText>Equity: {details.equity}</CardText>
					</Col>
					<Col sm="2">{details.state ? applied : apply}</Col>
				</Row>
				{errors.length > 0 ? (
					<Alert color="danger">{errors}</Alert>
				) : null}
			</CardBody>
		</>
	);
};

export default JobCard;
