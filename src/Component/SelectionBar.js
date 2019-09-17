import React, { Component } from 'react';
import Information from './Information';
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

class SelectionBar extends Component {
    state = {
        selectedOption: null,
    };
    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };
    render() {
        return (
            <div>
                <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                />
               
            </div>
        );
    }
}

export default SelectionBar;