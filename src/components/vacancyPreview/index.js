import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../css/ListVacancy.css";
import { Link } from "react-router";
import Helpers from "../../Helpers.js";
import { connect } from "react-redux";
import * as CurrencySelectors from "../../reducers/Currency";


class Index extends Component {

  shouldComponentUpdate(nextProps) {
    return (nextProps.data.id !== this.props.data.id);
  }

  showPreview() {
    const { id, name, employerName, areaName, salary } = this.props.data;
    const { listCurrency } = this.props;
    return (
      <li>
        <div className="vacancy__name">
          <Link to={`/vacancy/${id}`}>{name}</Link>
        </div>
        <div className="vacancy__employer">
          {Helpers.generateVacancyItem(employerName, "employer__name")}
          {Helpers.generateVacancyItem(areaName, "employer__city")}
          {Helpers.generateSalary(salary, listCurrency)}
        </div>
      </li>
    );
  }

  render() {
    console.log("v");
    return this.showPreview();
  }
}

Index.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    employerName: PropTypes.string,
    areaName: PropTypes.string
  })
};

const mapStateToProps = (state) =>
{
  return {
    listCurrency: CurrencySelectors.getCurrency(state)
  }
}

export default connect(mapStateToProps)(Index);
