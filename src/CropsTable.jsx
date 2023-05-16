import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CropsTable() {
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    axios.get('https://drab-ruby-frog-coat.cyclic.app/Crops')
      .then(res => {
        console.log(res.data);
        setCrops(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Crops table</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Crop ID</th>
            <th>Crop Name</th>
            <th>Farmer ID</th>
          </tr>
        </thead>
        <tbody>
          {crops.map(crop => (
            <tr key={crop.crop_id}>
              <td>{crop.crop_id}</td>
              <td>{crop.crop_name}</td>
              <td>{crop.farmer_id}</td>
            </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default CropsTable;

