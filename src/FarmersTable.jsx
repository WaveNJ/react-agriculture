import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FarmersTable() {
  const [farmers, setFarmers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/Farmers')
      .then(res => {
        console.log(res.data);
        setFarmers(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Farmer table</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Farmer ID</th>
            <th>Farmer Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {farmers.map(farmer => (
            <tr key={farmer.farmer_id}>
              <td>{farmer.farmer_id}</td>
              <td>{farmer.farmer_name}</td>
              <td>{farmer.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FarmersTable;
