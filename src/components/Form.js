import React from "react";

export default class Form extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {value: ''};
    }

    // ignit when input change
    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    // igint when input submit
    handleSubmit = (event) => {
        alert('A novel is submitted' + this.state.value);
        event.preventDefault();
    }

    render()
    {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                    <input type="submit" value="Submit" />
            </form>
        );
    }
}
