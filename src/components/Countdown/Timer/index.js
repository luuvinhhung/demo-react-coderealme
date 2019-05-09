import React from 'react'
const Timer = ({ time, children }) =>
  <div className='level-item has-text-centered'>
    <div>
      <p className='title'>{time}</p>
      <p className='heading'>{children}</p>
    </div>
  </div>
export default ({ duration }) => <div className='level'>
  <Timer time={duration.months()}>Month(s)</Timer>
  <Timer time={duration.days()}>Dys(s)</Timer>
  <Timer time={duration.hours()}>Hour(s)</Timer>
  <Timer time={duration.minutes()}>Minute(s)</Timer>
  <Timer time={duration.seconds()}>Second(s)</Timer>
</div>
