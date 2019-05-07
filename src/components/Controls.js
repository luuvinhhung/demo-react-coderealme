import React from 'react'
const Controls = ({ paused }) =>
  <div className='field is-grouped is-grouped-centered'>
    <p className='control'>
      {/* eslint-disable-next-line */}
      <button className='button is-rounded is-danger' disabled = {paused}>
        Pause
      </button>
    </p>
    <p className='control'>
      {/* eslint-disable-next-line */}
      <button className='button is-rounded is-link' disabled = {!paused}>
        Resume
      </button>
    </p>
  </div>
export default Controls
