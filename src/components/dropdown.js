import _ from 'lodash'
import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import PropTypes from 'prop-types';


class DropdownExampleSearchSelectionTwo extends Component {
	//state = { activeItem: this.props.currentItem }
	render(){
		//const { activeItem } = this.state;
		//console.log(activeItem);
		var stateOptions =  _.map(this.props.itemsArea, (item) => ({
			key: item.id,
			text: item.name,
			value: item.id,
		})).sort();
		stateOptions.unshift({key: -1, text: "Все", value: ""});
		return (
			<Dropdown value={this.props.value} placeholder='Страна' onChange={this.props.onChange} search selection options={stateOptions} />
			)
	}
}


DropdownExampleSearchSelectionTwo.propTypes = {
	itemsArea: PropTypes.array.isRequired,
	onChange: PropTypes.func
};

export default DropdownExampleSearchSelectionTwo