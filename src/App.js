import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from './components/card/Card'
import Loading from './components/loading/Loading'
import { useGeolocated } from "react-geolocated";
import './app.scss'

const App = () => {
  const [daysData, setDaysData] = useState([])
  const [hoursData, setHoursData] = useState([])
  const [select, setSelect] = useState()
  const [runOnes, setRunOnes] = useState(false)
  const [isC, setIsC] = useState(true)
  const [lat, setLat] = useState(undefined)
  const [lon, setLon] = useState(undefined)
  const position = useGeolocated();
  if (position?.coords?.longitude !== undefined && runOnes === false) {
    setLat(position.coords.latitude)
    setLon(position.coords.longitude)
    setRunOnes(true)
  }


  
  useEffect(() => {
    const days = {
      method: 'GET',
      url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily',
      params: {lat: lat, lon: lon},
      headers: {
        'X-RapidAPI-Key': '02d00fea7fmshf2f6ff12305fffap18639fjsn5359cbc6565e',
        'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
      }
    };
    axios.request(days).then(function (response) {
      setDaysData(response.data);
      setSelect(response.data.data[0])
    }).catch(function (error) {
      console.error(error);
    });

    const hours = {
      method: 'GET',
      url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/hourly',
      params: {lat: lat, lon: lon, hours: '8'},
      headers: {
        'X-RapidAPI-Key': '02d00fea7fmshf2f6ff12305fffap18639fjsn5359cbc6565e',
        'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
      }
    };
    axios.request(hours).then(function (response) {
      setHoursData(response.data);
    }).catch(function (error) {
      console.error(error);
    });
    
  }, [lat, lon])
      console.log(process.env.REACT_APP_API_HOST)
  return (
    <div className="app">
      {
        daysData !== [] ? <Card hoursData={hoursData} isC={isC} setIsC={setIsC} select={select} setSelect={setSelect} daysData={daysData} /> : <Loading />
      }
    </div>
  );
}

export default App;
