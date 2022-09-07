import React from 'react'
import './changeToF.scss'


export const c_f = (num, isC, posicion) => {
    if (isC === true) {
        return (Math.round(num) + '°C').substring(0, posicion)
    } else {
        return (Math.round(num * 1.8 + 32) + '°F').substring(0, posicion)
    }
}
const ChangeToF = ({ isC, setIsC }) => {
    return (
    <div onClick={()=> setIsC(!isC)} style={{justifyContent: isC ? 'flex-start' : 'flex-end'}} className='ChangeToF'>
        <div>{isC ? '°C' : '°F'}</div>
    </div>
  )
}

export default ChangeToF