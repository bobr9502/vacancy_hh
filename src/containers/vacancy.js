import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-grid-system';
import Menu from '../components/Menu';
import '../css/vacancy.css';
import helpers from '../helpers';

const VacancyItem = ({ vacancy, currency }) => (
	<Container fluid className="container"> 
		<nav>
			<Menu className="menu"/>
		</nav>
	<main>
		<div className="vacancy">
			{helpers.generateVacancyItem(vacancy.name, "vacancy__name")}
			{helpers.generateVacancyItem(vacancy.description, "vacancy__description")}
			<div className="vacancy__emloyer__name">
				{(vacancy.employer) ? helpers.generateVacancyItem(vacancy.employer.name) : ""}
			</div>
			{helpers.generateSalary(vacancy, currency)}
			<div className="vacancy__address">
				{(vacancy.address) ? helpers.generateVacancyItem(vacancy.address.city, "address__city") : ""}
				{(vacancy.address) ? helpers.generateVacancyItem(vacancy.address.street, "address__street") : ""}
			</div>
			<div className="snippets">
				{helpers.generateVacancyItem(vacancy.requirement, "snippets__requirement")}
				{helpers.generateVacancyItem(vacancy.responsibility, "snippets__responsibility")}
			</div>
			<div className="contacts">
				{helpers.generateVacancyItem(vacancy.contacts.email, "contacts__email")}
				{helpers.generateVacancyItem(vacancy.contacts.name, "contacts__name")}
			</div>
	</div>
	</main>
	</Container>
	)

const mapStateToProps = (state, ownProps) => {
	return {
		vacancy: state.vacancy.find(vacancy=>vacancy.id === ownProps.params.id),
		currency: state.currency
	}
}


export default connect(mapStateToProps)(VacancyItem);