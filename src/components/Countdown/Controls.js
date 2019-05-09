import React from 'react'

const Controls = ({ disabled, onClick, color, children }) =>
  <p className='control'>
    {/* eslint-disable-next-line */}
    <button className={'button is-rounded is-outlined is-' + color}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  </p>
export default ({ paused, onPauseToggle }) =>
  <div className='field is-grouped is-grouped-centered'>
    <Controls disabled={paused} onClick={onPauseToggle} color={'danger'}>Pause</Controls>
    <Controls disabled={!paused} onClick={onPauseToggle} color={'link'}>Resume</Controls>
    {/* <p className='control'>
      <button className='button is-rounded is-outlined is-link'
        onClick={onPauseToggle}
        disabled={!paused}>
        Resume
      </button>
    </p> */}
  </div>
