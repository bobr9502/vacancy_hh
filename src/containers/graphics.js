import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { Container} from 'react-grid-system';
import Menu from '../components/menu';
import Filter from './filter';
import * as dataActions from '../actions/dataAction';
import * as vacancySelectors from '../reducers/vacancy';
import Loader from '../components/loader-spinner'

class Graphics extends Component {
  state = { loading: true }

  constructor(props){
    super(props)
    if (this.props.vacancy===undefined || this.props.vacancy.length===0)
      this.props.onGetVacancy(0);
    }

    componentDidMount()
    {
      this.setState({loading: false})
    }

  render() {
    const options = {
      title:{
        display:true,
        text: 'Распределение количества вакансий к уровню з/п',
        fontSize: '20'
      },
      legend: {
        display: false
      },
      responsive: true
    };
    const barData = vacancySelectors.CountAndSalaryVacancy(this.props.vacancy);
    const { loading } = this.state

    if (loading)
      return ( <Loader /> )
    return (
      <Container fluid className="container"> 
        <nav>
          <Menu active={"Графики"}/>
          <Filter itemsArea={this.props.area} onChange={this.props.onFilterVacancyCountry}/>
        </nav>
      <main>
        <Bar data={barData} options={options}/>
      </main>
      </Container>
      )
  }
}

export default connect(
  (state) => ({
    area: state.area,
    vacancy: state.vacancy.filter(vacancy => vacancy.area.main_parent.id.includes(state.filterVacancyCountry))
  }),
  dispatch => ({
    onGetVacancy: (numberPage) => {
      dispatch(dataActions.fetch(0));
    },
    onFilterVacancyCountry: (event, data) => {
      dispatch({type: 'VACANCY_FILTER_COUNTRY', payload: data.value});
    }
  })
  )(Graphics);