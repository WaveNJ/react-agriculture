import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css';
import Banner from './Banner';
import FarmersTable from './FarmersTable';
import CropsTable from './CropsTable';
import HarvestsTable from './HarvestsTable';
import HarvestsChart from './HarvestsChart';

function App() {
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

  const [Crops, setCrops] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/Crops')
      .then(res => {
        console.log(res.data)
        setCrops(res.data)
      })
  }, [])

  const [Harvests, setHarvests] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/Harvests')
      .then(res => {
        console.log(res.data)
        setHarvests(res.data)
      })
  }, [])

  const [Farmers, setFarmers] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/Farmers')
      .then(res => {
        console.log(res.data)
        setFarmers(res.data)
      })
  }, [])

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };


  return (
    <div>
      <Banner />
      { }
      <h2>ตารางที่เกี่ยวข้องการเกษตร</h2>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">-- Select an table --</option>
        <option value="option1">Farmer table</option>
        <option value="option2">Crops table</option>
        <option value="option3">Harvests table</option>
      </select>
      {selectedOption === 'option1' && <FarmersTable />}
      {selectedOption === 'option2' && <CropsTable />}
      {selectedOption === 'option3' && <HarvestsTable />}
      <h2>การเก็บเกี่ยวที่มีปริมาณมากที่สุดตามลำดับ</h2>
      <HarvestsChart />
    </div>
  );
}

export default App;

