import React from 'react'

const Timer = ({ duration }) => <div className='level'>
  <div className='level-item has-text-centered'>
    <div>
      <p className='title'>{duration.months()}</p>
      <p className='heading'>Months</p>
    </div>
  </div>
  <div className='level-item has-text-centered'>
    <div>
      <p className='title'>{duration.days()}</p>
      <p className='heading'>Days</p>
    </div>
  </div>
  <div className='level-item has-text-centered'>
    <div>
      <p className='title'>{duration.hours()}</p>
      <p className='heading'>Hours</p>
    </div>
  </div>
  <div className='level-item has-text-centered'>
    <div>
      <p className='title'>{duration.minutes()}</p>
      <p className='heading'>Minutes</p>
    </div>
  </div>
  <div className='level-item has-text-centered'>
    <div>
      <p className='title'>{duration.seconds()}</p>
      <p className='heading'>Seconds</p>
    </div>
  </div>
</div>
export default Timer
