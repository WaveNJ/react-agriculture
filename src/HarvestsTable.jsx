import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HarvestsTable() {
  const [harvests, setHarvests] = useState([]);

  useEffect(() => {
    axios.get('https://drab-ruby-frog-coat.cyclic.app/Harvests')
      .then(res => {
        console.log(res.data);
        setHarvests(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Harvests table</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Harvest ID</th>
            <th>Crop ID</th>
            <th>Harvest Date</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {harvests.map(harvest => (
            <tr key={harvest.harvest_id}>
              <td>{harvest.harvest_id}</td>
              <td>{harvest.crop_id}</td>
              <td>{harvest.harvest_date}</td>
              <td>{harvest.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HarvestsTable;
