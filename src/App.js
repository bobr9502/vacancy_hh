import React, { Component } from "react";
import { connect } from "react-redux";
import ListVacancies from "./components/ListVacancies";
import { Container } from "react-grid-system";
import Menu from "./components/Menu";
import MenuSort from "./components/MenuSort";
import Filter from "./containers/Filter";
import Loader from "./components/Loader";
import * as VacancySelectors from "./reducers/Vacancy";
import * as AreaSelectors from "./reducers/Area";
import * as DataActions from "./actions/DataAction";

class App extends Component {
  state = { loading: true };

  componentWillMount() {
    if (!this.props.vacancy || !this.props.vacancy.length)
      this.props.onGetData(0);
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.vacancy.length)
      this.setState({loading: false})
  }

  render() {
    const { loading } = this.state;
    const { areas, vacancy } = this.props;
    if (loading) return <Loader />;
    return (
      <Container fluid className="container">
        <nav>
          <Menu active="Главная" />
          <MenuSort />
          <Filter itemsArea={areas} />
        </nav>
        <main>
          <ListVacancies itemsVacancy={vacancy} />
        </main>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    vacancy: VacancySelectors.getVacancy(state),
    areas: AreaSelectors.getArea(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetData: numberPage => {
      dispatch(DataActions.fetch(0));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
