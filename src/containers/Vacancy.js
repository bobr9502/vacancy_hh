import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-grid-system';
import Menu from '../components/Menu';
import '../css/vacancy.css';
import Helpers from '../Helpers';

const VacancyItem = ({ vacancy, currency }) => (
	<Container fluid className="container"> 
		<nav>
			<Menu className="menu"/>
		</nav>
	<main>
		<div className="vacancy">
			{Helpers.generateVacancyItem(vacancy.name, "vacancy__name")}
			{Helpers.generateVacancyItem(vacancy.description, "vacancy__description")}
			<div className="vacancy__emloyer__name">
				{(vacancy.employer) ? Helpers.generateVacancyItem(vacancy.employer.name) : ""}
			</div>
			{Helpers.generateSalary(vacancy.salary, currency)}
			<div className="vacancy__address">
				{(vacancy.address) ? Helpers.generateVacancyItem(vacancy.address.city, "address__city") : ""}
				{(vacancy.address) ? Helpers.generateVacancyItem(vacancy.address.street, "address__street") : ""}
			</div>
			<div className="snippets">
				{Helpers.generateVacancyItem(vacancy.requirement, "snippets__requirement")}
				{Helpers.generateVacancyItem(vacancy.responsibility, "snippets__responsibility")}
			</div>
			<div className="contacts">
				{Helpers.generateVacancyItem(vacancy.contacts.email, "contacts__email")}
				{Helpers.generateVacancyItem(vacancy.contacts.name, "contacts__name")}
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