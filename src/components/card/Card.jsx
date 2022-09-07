import React, {useState} from 'react'
import './card.scss'
import FullDayData from '../fullDayData/FullDayData'
import DayCard from '../dayCard/DayCard'
import ChangeToF, { c_f } from '../changeToF/ChangeToF'



const Card = ({ isC, setIsC, daysData, select, setSelect, hoursData }) => {
  const [display, setDisplay] = useState(true)
  const day = new Date().getDay() +1
  const daysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const daysLong = ['Sunday', 'Monday', 'Tuesday', 'Wedsday', 'Thusday', 'Friday', 'Saturday']
  const newArr = []
  if (daysData.data !== undefined) {
    for (let i = 0; i < 12; i++) {
      if (i <= day) {
        daysShort.push(...daysShort)
        daysLong.push(...daysLong)
      }
      newArr.push(daysData?.data[i])
      newArr[i].weekDay = daysShort[day + i];
      newArr[i].weekDayLong = daysLong[day + i];
    }
  }
  return (
    <div className="Card">
      <FullDayData isC={isC} hoursData={hoursData} select={select} display={display} setDisplay={setDisplay} />
      <DayCard isC={isC} daysData={daysData} select={select} display={display} setDisplay={setDisplay} />
      <div className="right">
        <ChangeToF isC={isC} setIsC={setIsC} />
        <div className="top">
          <div className="left-txt">UV <span>{select?.uv}</span></div>
          <div className="left-txt">WIND <span>{select?.wind_spd} km/h</span></div>
          <div className="left-txt">MIN <span>{c_f(select?.min_temp, isC, 3)}</span></div>
          <div className="left-txt">MAX <span>{c_f(select?.max_temp, isC, 3)}</span></div>
        </div>
        <div className="mini-cards-container">
          {
            newArr.map((i) => (
              <div onClick={() => display ? setSelect(i) : setDisplay(true) + setSelect(i)} onChange={!display ? setSelect(daysData.data[0]) : null}  key={i.datetime} className={i === select ? 'mini-card mini-card-selected' : 'mini-card'}>
                <p>{i.valid_date.substring(8, 10)}</p>
                <span className="material-symbols-outlined">{(i.weather.code >= 200 && i.weather.code < 800) || i.weather.code === 900 ? 'cloudy_snowing' : i.weather.code >= 800 && i.weather.code <= 802 ?  'sunny' : i.weather.code >= 803 && i.weather.code <= 804 ? 'cloudy' : null  }</span>
                <div className="date">{i.weekDay}</div>
              <div className="whether">{c_f(i.max_temp, isC, 3)}</div>
            </div>
          ))  
          }
        </div>
      </div>
    </div>
  )
}

export default Card