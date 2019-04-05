import _ from "lodash";
import React from "react";
import { Dropdown } from "semantic-ui-react";
import PropTypes from "prop-types";

const defaultPropsDropDown = [{ key: -1, text: "Все", value: "" }];

function DropdownExampleSearchSelectionTwo({itemsArea, value, onChange}) {
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
