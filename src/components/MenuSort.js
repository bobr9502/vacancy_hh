import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import "../css/menuSort.css";
import { connect } from "react-redux";
import { typeActions } from "../constans/typeActions";

class MenuExampleVerticalText extends Component {
  state = { activeItem: this.props.currentItem, loading: true };
  handleItemClick = (e, { name }) => {
    this.props.onSortVacancy(name);
    this.setState({ activeItem: name });
  };

  componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    const { activeItem } = this.state;
    return (
      <Menu text vertical>
        <Menu.Item header>Сортировать</Menu.Item>
        <Menu.Item
          name="Название"
          active={activeItem === "Название"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Зарплата от"
          active={activeItem === "Зарплата от"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Зарплата до"
          active={activeItem === "Зарплата до"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}

export default connect(
  state => ({
    currentItem: state.sortVacancy
  }),
  dispatch => ({
    onSortVacancy: activeItem => {
      dispatch({ type: typeActions.VACANCY_SORT, payload: activeItem });
    }
  })
)(MenuExampleVerticalText);
