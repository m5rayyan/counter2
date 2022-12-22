import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    const { counter, onDecrement, onIncrement } = this.props;
    return (
      <div className="counter">
        <div className="value">{counter.count}</div>

        <button className="decrement" onClick={() => onDecrement(counter)}>
          -
        </button>
        <button className="increment" onClick={() => onIncrement(counter)}>
          +
        </button>
      </div>
    );
  }
}

// another solution
// import React, { Component } from "react";
// import "./style.css";
// export default class Counter extends Component {
//   render() {
//     const { value, onIncrement, onDecrement } = this.props;

//     return (
//       <div className="counter">
//         <div className="value">{value}</div>
//         <p>
//           <button className="decrement" onClick={() => onDecrement(2)}>
//             -
//           </button>
//         </p>
//         <p>
//           <button className="increment" onClick={() => onIncrement(2)}>
//             +
//           </button>
//         </p>
//       </div>
//     );
//   }
// }
