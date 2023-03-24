import React from "react";

function Prescriptions(props) {
  const patient = JSON.parse(props.pName)
  return (
    <>
      <h1>Prescriptions for {patient.name}</h1>

    </>
  );
}

export default Prescriptions;