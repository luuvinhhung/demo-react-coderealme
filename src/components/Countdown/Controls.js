import React from 'react'
const Controls = ({ paused, onPauseToggle }) =>
  <div className='field is-grouped is-grouped-centered'>
    <p className='control'>
      {/* eslint-disable-next-line */}
      <button className='button is-rounded is-danger is-outlined' 
        onClick={onPauseToggle}
        disabled={paused}>
          Pause
      </button>
    </p>
    <p className='control'>
      {/* eslint-disable-next-line */}
      <button className='button is-rounded is-outlined is-link'
        onClick={onPauseToggle}
        disabled={!paused}>
          Resume
      </button>
    </p>
  </div>
export default Controls
