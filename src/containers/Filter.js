import React, { Component } from "react";
import Dropdown from "../components/Dropdown";
import "../css/filter.css";
import Loader from "../components/Loader";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Filter extends Component {
  state = { loading: true };

  componentDidMount() {
    this.setState({ loading: false });
  }
  render() {
    const { loading } = this.state;
    const { currentItem, itemsArea, onFilterVacancyCountry } = this.props;

    if (loading) return <Loader type="block" />;
    return (
      <div className="filter">
        <div className="header item">Фильтр</div>
        <Dropdown
          value={currentItem}
          itemsArea={itemsArea}
          onChange={onFilterVacancyCountry}
        />
      </div>
    );
  }
}

Filter.propTypes = {
  currentItem: PropTypes.string
};

Filter.defaultPropTypes = {
  itemsArea: -1
};

export default connect(
  state => ({
    currentItem: state.filterVacancyCountry
  }),
  dispatch => ({
    onFilterVacancyCountry: (event, data) => {
      dispatch({ type: "VACANCY_FILTER_COUNTRY", payload: data.value });
    }
  })
)(Filter);
