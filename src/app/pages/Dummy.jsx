import React from 'react'

export default class Dummy extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        company: '',
        count: 0
    }

    componentDidMount() {
        console.log('componentDidMount');
        // setTimeout(() => {
        //     this.setState({ ...this.state, company: 'CapSync' })
        // }, 4000);
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleChange = (type, val) => {
        this.setState({ ...this.state, [type]: val })
    }

    counter = (type) => {
        if (type === 'increase') {
            this.setState({ count: this.state.count + 1 });
        } else {
            this.setState({ count: this.state.count - 1 });
        }
    }

    render() {
        console.log('render component', this.state);
        return (
            <div>
                <input
                    type="text"
                    value={this.state.firstName}
                    onChange={(e) => this.handleChange('firstName', e.target.value)}
                />
                <input
                    type="text"
                    value={this.state.lastName}
                    onChange={(e) => this.handleChange('lastName', e.target.value)}
                />
                <input
                    type="text"
                    value={this.state.company}
                    onChange={(e) => this.handleChange('company', e.target.value)}
                />
                <div>
                    <button onClick={() => this.counter('increase')}>increase</button>
                </div>
                <div>
                    <h1>{this.state.count}</h1>
                </div>
                <div>
                    <button onClick={() => this.counter('decrease')}>decrease</button>
                </div>
            </div>
        );
    }
}