import _ from "lodash";
import React, {Component} from "react";
import {Dropdown} from "semantic-ui-react";
import PropTypes from "prop-types";

class DropdownExampleSearchSelectionTwo extends Component {
    render() {
        const {itemsArea, value, onChange} = this.props;

        const stateOptions = _.map(itemsArea, item => ({
            key: item.id,
            text: item.name,
            value: item.id
        })).sort();
        stateOptions.unshift({key: -1, text: "Все", value: ""});
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
    onChange: PropTypes.func
};

export default DropdownExampleSearchSelectionTwo;
