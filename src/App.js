import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { getVacancyApi } from './services/vacancy.js';
import ListVacancy from './components/listVacancy';
import { Container} from 'react-grid-system';
import Menu from './components/menu';
import MenuSort from './components/menuSort';
import Filter from './containers/filter';
import Loader from './components/loader-spinner';
import * as vacancySelectors from './reducers/vacancy';
import * as areaSelectors from './reducers/area';
import * as currencySelectors from './reducers/currency';
import * as dataActions from './actions/dataAction';

class App extends Component {
  state = { loading: true }

  componentDidMount()
  {
    if (this.props.vacancy===undefined || this.props.vacancy.length===0)
      this.props.onGetData(0);
    this.setState({loading: false})
  }

  render() {
    const { loading } = this.state
      const {area, vacancy, onFilterVacancyCountry, listCurrency} = this.props

    if (loading)
        return ( <Loader /> )
    return (
      <Container fluid className="container"> 
        <nav>
          <Menu active="Главная"/>
          <MenuSort />
            <Filter itemsArea={area} onChange={onFilterVacancyCountry}/>
        </nav>
        <main>
            <ListVacancy itemsVacancy={vacancy} itemsCurrency={listCurrency}/>
        </main>
      </Container>
      )
  }
}

function mapStateToProps(state)
{
  return {
    vacancy: vacancySelectors.getVacancy(state), 
    area: areaSelectors.getArea(state),
    listCurrency: currencySelectors.getCurrency(state)
 }
}

function mapDispatchToProps(dispatch)
{
  return {
    onGetData: (numberPage) => { dispatch(dataActions.fetch(0)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
