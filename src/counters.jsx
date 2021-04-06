import { counter } from '@fortawesome/fontawesome-svg-core';
import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  render() { 
    const {onReset, counters, onIncrement, onDelete} = this.props;
    return ( 
      <div>
        <button onClick={onReset}>Reset</button><br/><br/>
        {counters.map(counter => (
          <Counter 
            key={counter.id} 
            onIncrement = {onIncrement}
            onDelete = {onDelete}
            counter={counter}
          />
        ))}
      </div>
     );
  }
}
 
export default Counters;