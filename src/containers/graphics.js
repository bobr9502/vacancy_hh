import React, {Component} from "react";
import {Bar} from "react-chartjs-2";
import {connect} from "react-redux";
import {Container} from "react-grid-system";
import Menu from "../components/Menu";
import Filter from "./filter";
import * as DataActions from "../actions/dataAction";
import * as VacancySelectors from "../reducers/vacancy";
import Loader from "../components/Loader";

class Graphics extends Component {
  state = {loading: true};

  constructor(props) {
    super(props);
    if (!this.props.vacancy || !this.props.vacancy.length)
      this.props.onGetVacancy(0);
  }

  componentDidMount() {
    this.setState({loading: false});
  }

  render() {
    const options = {
      title: {
        display: true,
        text: "Распределение количества вакансий к уровню з/п",
        fontSize: "20"
      },
      legend: {
        display: false
      },
      responsive: true
    };
    const barData = VacancySelectors.countAndSalaryVacancy(this.props.vacancy);
    const {loading} = this.state;
    const {area, onFilterVacancyCountry} = this.props;

    if (loading) return <Loader/>;
    return (
        <Container fluid className="container">
        <nav>
          <Menu active={"Графики"}/>
          <Filter itemsArea={area} onChange={onFilterVacancyCountry}/>
        </nav>
          <main>
            <Bar data={barData} options={options}/>
          </main>
      </Container>
    );
  }
}

export default connect(
    state => ({
    area: state.area,
      vacancy: state.vacancy.filter(vacancy =>
          vacancy.area.main_parent.id.includes(state.filterVacancyCountry)
      )
  }),
  dispatch => ({
    onGetVacancy: numberPage => {
      dispatch(DataActions.fetch(0));
    },
    onFilterVacancyCountry: (event, data) => {
      dispatch({type: "VACANCY_FILTER_COUNTRY", payload: data.value});
    }
  })
)(Graphics);
