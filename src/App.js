import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListVacancy from './components/ListVacancy';
import { Container} from 'react-grid-system';
import Menu from './components/Menu';
import MenuSort from './components/MenuSort';
import Filter from './containers/filter';
import Loader from './components/Loader';
import * as VacancySelectors from './reducers/vacancy';
import * as AreaSelectors from './reducers/area';
import * as CurrencySelectors from './reducers/currency';
import * as DataActions from './actions/dataAction';

class App extends Component {
  state = { loading: true }

  componentDidMount()
  {
    if (!this.props.vacancy || !this.props.vacancy.length)
      this.props.onGetData(0);
    this.setState({loading: false})
  }

  render() {
    const { loading } = this.state
      const {area, vacancy, listCurrency} = this.props
    if (loading)
        return ( <Loader /> )
    return (
      <Container fluid className="container"> 
        <nav>
          <Menu active="Главная"/>
          <MenuSort />
            <Filter itemsArea={area}/>
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
    vacancy: VacancySelectors.getVacancy(state),
    area: AreaSelectors.getArea(state),
    listCurrency: CurrencySelectors.getCurrency(state)
 }
}

function mapDispatchToProps(dispatch)
{
  return {
    onGetData: (numberPage) => { dispatch(DataActions.fetch(0)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
