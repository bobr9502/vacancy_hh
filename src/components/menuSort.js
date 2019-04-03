import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import '../css/menuSort.css';
import { connect } from 'react-redux';
import Loader from './loader-spinner'

class MenuExampleVerticalText extends Component {
  state = { activeItem: this.props.currentItem, loading: true }
  handleItemClick = (e, { name }) => {
    this.props.onSortVacancy(name);
    this.setState({ activeItem: name })
  }

    componentDidMount()
  {
    setTimeout(()=>this.setState({loading: false}))
  }

  render() {
    const { activeItem, loading } = this.state

    if (loading)
      return (<Loader type='block' />)
    return (
      <Menu text vertical>
        <Menu.Item header>Сортировать</Menu.Item>
         <Menu.Item
          name='Название'
          active={activeItem === 'Название'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Зарплата от'
          active={activeItem === 'Зарплата от'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Зарплата до'
          active={activeItem === 'Зарплата до'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}

export default connect(
  (state, ownProps) => ({
      currentItem: state.sortVacancy
  }),
  dispatch => ({
    onSortVacancy: (activeItem) => {
      dispatch({type: 'VACANCY_SORT', payload: activeItem});
    }
  })
  )(MenuExampleVerticalText);