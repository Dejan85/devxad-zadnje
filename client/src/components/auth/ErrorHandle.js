import React from "react";
import PropTypes from "prop-types";

const ErrorHandle = ({ message, reset }) => {
  let msg;
  if (reset) {
    msg = undefined;
  } else if (message && message.message) {
    msg = <p style={{ background: "#bfe4ae" }}>{message.message}</p>;
  } else if (message && message.error) {
    msg = <p style={{ background: "#fdd3d3" }}>{message.error}</p>;
  }

  return <div className="error">{msg}</div>;
};

ErrorHandle.propTypes = {
  message: PropTypes.object,
  reset: PropTypes.bool
};

export default ErrorHandle;
