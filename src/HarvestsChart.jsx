import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function HarvestsChart() {
  const [quantity, setQuantity] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/quantity')
      .then(res => {
        console.log(res.data);
        setQuantity(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Harvests Chart</h2>
      <BarChart width={500} height={300} data={quantity}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="harvest_id" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="quantity" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default HarvestsChart;
