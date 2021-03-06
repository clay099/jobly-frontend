import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";
console.log("process env ", process.env.REACT_APP_BASE_URL);
console.log("BASE_URL ", BASE_URL);
class JoblyApi {
	static async request(endpoint, paramsOrData = {}, verb = "get") {
		paramsOrData._token = localStorage.getItem("_token");

		console.debug("API Call:", endpoint, paramsOrData, verb);

		try {
			return (
				await axios({
					method: verb,
					url: `${BASE_URL}/${endpoint}`,
					[verb === "get" ? "params" : "data"]: paramsOrData,
				})
			).data;
			// axios sends query string data via the "params" key,
			// and request body data via the "data" key,
			// so the key we need depends on the HTTP verb
		} catch (err) {
			console.error("API Error:", err.response);
			let message = err.response.data.message;
			throw Array.isArray(message) ? message : [message];
		}
	}

	static async getCompanies() {
		let res = await this.request(`companies/`);
		return res.companies;
	}

	static async searchCompanies(searchTerm) {
		let res = await this.request(`companies/`, { search: searchTerm });
		return res.companies;
	}

	static async getCompany(handle) {
		let res = await this.request(`companies/${handle}`);
		return res.company;
	}

	static async getJobs() {
		let res = await this.request(`jobs/`);
		return res.jobs;
	}

	static async searchJobs(searchTerm) {
		let res = await this.request(`jobs/`, { search: searchTerm });
		return res.jobs;
	}

	static async submitLogin(username, password) {
		let res = await this.request("login/", { username, password }, "post");
		localStorage.setItem("_token", res.token);
		localStorage.setItem("username", username);

		return res.token;
	}

	static async submitRegister({
		username,
		password,
		first_name,
		last_name,
		email,
	}) {
		let res = await this.request(
			"users/",
			{ username, password, first_name, last_name, email },
			"post"
		);
		localStorage.setItem("_token", res.token);
		localStorage.setItem("username", username);
		return res.token;
	}

	static async getUserData(username) {
		let res = await this.request(`users/${username}`);
		return res.user;
	}

	static async updateUserData({
		username,
		password,
		first_name,
		last_name,
		email,
	}) {
		let res = await this.request(
			`users/${username}`,
			{ password, first_name, last_name, email },
			"patch"
		);
		return res.user;
	}

	static async applyForJob(id) {
		let res = await this.request(`jobs/${id}/apply`, {}, "post");
		return res;
	}
}

export default JoblyApi;
