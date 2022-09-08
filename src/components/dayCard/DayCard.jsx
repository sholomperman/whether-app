import './dayCard.scss'
import {c_f} from '../changeToF/ChangeToF';



const DayCard = ({ isC, daysData, select, display, setDisplay }) => {
  const cloudy = "url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=451&q=80')"
  const sunny = "url('https://images.unsplash.com/photo-1572246538688-3f326dca3951?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3VtbWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')"
  const rain = "url('https://images.unsplash.com/photo-1620385019253-b051a26048ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')"
  return (
    <div className="DayCard"onClick={()=>setDisplay(!display)} style={{display: display ? 'block' : 'none', background: (select?.weather.code >= 200 && select?.weather.code < 800) || select?.weather.code === 900 ? rain : select?.weather.code >= 800 && select?.weather.code <= 802 ?  sunny : select?.weather.code >= 803 && select.weather.code <= 804 ? cloudy : null  }}>
      <div className='container'>
        <div className="date"> {select?.weekDayLong}
          <span>
            {select?.valid_date}
          </span>
          <span>
            <span className="material-symbols-outlined">
              location_on
            </span>
            {daysData?.state_code + " " + daysData?.country_code}
          </span>
        </div>
        <div className="whether">
          <span className="material-symbols-outlined icon">{(select?.weather.code >= 200 && select?.weather.code < 800) || select?.weather.code === 900 ? 'cloudy_snowing' : select?.weather.code >= 800 && select?.weather.code <= 802 ?  'sunny' : select?.weather.code >= 803 && select.weather.code <= 804 ? 'cloudy' : null  }</span>
          {c_f(select?.max_temp, isC)}
        </div>
      </div>
    </div>
  )
};

export default DayCard

