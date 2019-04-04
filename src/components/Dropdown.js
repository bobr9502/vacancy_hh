import _ from "lodash";
import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import PropTypes from "prop-types";

const defaultPropsDropDown = [{ key: -1, text: "Все", value: "" }];

class DropdownExampleSearchSelectionTwo extends Component {
  render() {
    const { itemsArea, value, onChange } = this.props;
    let stateOptions = _.map(itemsArea, item => ({
      key: item.id,
      text: item.name,
      value: item.id
    }));
    stateOptions = [...stateOptions, ...defaultPropsDropDown].sort(
      item => item.key
    );
    return (
      <Dropdown
        value={value}
        placeholder="Страна"
        onChange={onChange}
        search
        selection
        options={stateOptions}
      />
    );
  }
}

DropdownExampleSearchSelectionTwo.propTypes = {
  itemsArea: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
};

DropdownExampleSearchSelectionTwo.defaultProps = {
  itemsArea: defaultPropsDropDown,
  value: "-1",
  onChange: () => {
    console.log("Error: Not found function onChange");
  }
};

export default DropdownExampleSearchSelectionTwo;
