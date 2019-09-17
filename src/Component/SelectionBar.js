import React, { Component } from 'react';
import Information from './Information';
import Select from 'react-select';

const options = [
    { value: 'Python Dev', label: 'Python Dev' },
    { value: 'Android', label: 'Android'},
    
];

class SelectionBar extends Component {
    state = {
        Information: options,
    };
    handleChange = Information => {
        this.setState({ Information });
        console.log(`Option selected:`, Information);
        return Information
    };
    render() {
        return (
            <div>
                <Select value={Information} onChange={this.handleChange} options={options} />  
                <Information />       
            </div>
        );
    }
}

export default SelectionBar;