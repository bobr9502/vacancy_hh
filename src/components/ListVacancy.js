import React, {Component} from "react";
import PropTypes from "prop-types";
import "../css/ListVacancy.css";
import {Link} from "react-router";
import Helpers from "../helpers.js";
import Loader from "./Loader";

class ListVacancy extends Component {
	state = {loading: true};

	componentDidMount() {
		setTimeout(() => this.setState({loading: false}), 500);
  }

	showList() {
		return this.props.itemsVacancy.map(item => (
			<li key={item.id}>
				<div className="vacancy__name">
					<Link to={`/vacancy/${item.id}`}>{item.name}</Link>
				</div>
				<div className="vacancy__employer">
					{Helpers.generateVacancyItem(item.employer.name, "employer__name")}
					{Helpers.generateVacancyItem(item.area.name, "employer__city")}
					{Helpers.generateSalary(item, this.props.itemsCurrency)}
				</div>
			</li>
		));
	}

	render() {
		const {loading} = this.state;

		if (loading) return <Loader/>;
		return (
			<div className="list__vacancy">
				<ul>{this.showList()}</ul>
			</div>
		);
	}
}

ListVacancy.propTypes = {
	itemsVacancy: PropTypes.array.isRequired,
	itemsCurrency: PropTypes.array.isRequired
};

export default ListVacancy;
