import React from "react";

const styles = {
  position: 'fixed',
  zIndex: 1,
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
  width: '100%',
  height: '100vh',
  top: 0,
  left: 0
}

function Backdrop(props) {
  return <div style={styles} onClick={props.onCancel} />;
}

export default Backdrop;