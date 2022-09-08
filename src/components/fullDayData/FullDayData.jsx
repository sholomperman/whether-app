import './fullDayData.scss'
import { c_f } from '../changeToF/ChangeToF'

const FullDayData = ({isC, display, setDisplay, hoursData, select }) => {
  const cloudy = "url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=451&q=80')"
  const sunny = "url('https://images.unsplash.com/photo-1572246538688-3f326dca3951?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3VtbWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')"
  const rain = "url('https://images.unsplash.com/photo-1620385019253-b051a26048ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')"
    console.log(hoursData)
  return (
<div className="fullDayData" onClick={()=>setDisplay(!display)} style={{display: display ? 'none' : 'block',background: (select?.weather.code >= 200 && select?.weather.code < 800) || select?.weather.code === 900 ? rain : select?.weather.code >= 800 && select?.weather.code <= 802 ?  sunny : select?.weather.code >= 803 && select.weather.code <= 804 ? cloudy : null }}>
    <div className="card">
        <div className="about">
            <h3>Today's Details</h3>
            <p className="lead">Temperature in {isC ? '°C' : '°F'}</p>
        </div>
        <div className="axis">
        {
        hoursData.data?.map((i) => (
            <div className="tick">
                <div className="top">
                    <div style={{ bottom:  i.temp * 6 }} className="dot" />
                        <div className="hover-details" style={{ bottom: i.temp * 7}}>
                            <p>{c_f(i.temp, isC, 3)}</p>
                        <p>{parseInt(i.timestamp_local.substring(11, 14)) >= 12 ? parseInt(i.timestamp_local.substring(11, 14)) - 12 : parseInt(i.timestamp_local.substring(11, 14))}
                        <span>{parseInt(i.timestamp_local.substring(11, 14)) >= 12 ? ' PM' : ' AM'}</span>
                        </p>
                        </div>
                </div>
                <div className="bottom">
                    <span>{parseInt(i.timestamp_local.substring(11, 14)) >= 12 ? parseInt(i.timestamp_local.substring(11, 14)) - 12 : parseInt(i.timestamp_local.substring(11, 14))}</span>
                    <span className="day-name">{parseInt(i.timestamp_local.substring(11, 14)) >= 12 ? 'PM' : 'AM'}</span>
                    <span>{c_f(i.temp, isC, 3)}</span>
                </div>
            </div>
        ))
        }
        </div> 
    </div>
</div>
  )
}

export default FullDayData