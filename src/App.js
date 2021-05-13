import { connect } from 'react-redux';

import './App.css';
import { increaseCounter, decreaseCounter } from './redux/counter.actions';

function App(props) {
  return (
    <div className="App">
      <p>Count is: {props.count}</p>
      <button onClick={() => props.increaseCounter()}>Increase Counter</button>
      <button onClick={() => props.decreaseCounter()}>Decrease Counter</button>
    </div>
  );
}

//needed to take state to put into props
const mapStateToProps = (state) => {
  return{
    count: state.count
  }
}

//make use of actions declared in counter.actions.js
const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter())

  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
