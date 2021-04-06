import React, { Component } from 'react';

class Counter extends Component {
	render() {
		const { onIncrement, onDelete, counter } = this.props;
		return (
			<React.Fragment>
				<span className="">{this.formatCount()} </span>
				<button onClick={() => onIncrement(counter)}>+</button>

				<button onClick={() => onDelete(counter.id)}>Delete</button>
				<br />
				<br />
			</React.Fragment>
		);
	}

	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? 'zero' : value;
	}
}

export default Counter;
