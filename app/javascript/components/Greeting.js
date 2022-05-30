import React from "react"
import PropTypes from "prop-types"
class Greeting extends React.Component {
  render () {
    return (
      <React.Fragment>
        Text: {this.props.text}
      </React.Fragment>
    );
  }
}

Greeting.propTypes = {
  text: PropTypes.string
};
export default Greeting
