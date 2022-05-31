import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../reducers/greetings_reducer";

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((store) => store.greetingsReducer.greeting) // If extracting from state instead use
  // `useSelector((state) => state.greetingsReducer)
  
  useEffect(() => {
    fetchData(dispatch) // If extracting from state instead use `dispatch(fetchData())
  }, [])

    return (
      <h1>
        {greeting[0]}
      </h1>
    );
}

export default Greeting

/// This was also working:

// import React from "react"
// import PropTypes from "prop-types"
// class Greeting extends React.Component {
//   render () {
//     return (
//      <React.Fragment>
//        Greeting: {this.props.greeting}
//      </React.Fragment>
//    );
//  }
//}

//Greeting.propTypes = {
//  greeting: PropTypes.string
//};

//export default Greeting
