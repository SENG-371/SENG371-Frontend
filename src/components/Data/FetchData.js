import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FetchData() {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/records/`)
      .then((res) => {
        console.log(res.data);
        setRecords(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {/* <input
        type="text"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      ></input> */}
      {records.map((record) => {
        return (
          <div key={record.id}>
            <h6 style={{ fontSize: 20 }}>{record.illness}</h6>
            <p style={{ fontSize: 15 }}>{record.description}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
