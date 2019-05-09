import React from 'react'
export default ({ active, onHolidaysToggle, holidays }) =>
  // <div className={'modal' + (active ? ' is-active' : '')}>
  <div className={`modal${active ? ' is-active' : ''}`}>
    <div className='modal-background' onClick={onHolidaysToggle} />
    <div className='modal-card'>
      <header className='modal-card-head'>
        <p className='modal-card-title'>Modal title</p>
        <button className='delete'
          aria-label='close'
          onClick={onHolidaysToggle} />
      </header>
      <section className='modal-card-body table is-boredered' style={{ color: 'red' }}>
        {holidays.map((holiday, index) =>
          <tr key={index}>
            <td>{holiday.calendar()}</td>
            <td>{holiday.isHoliday()}</td>
          </tr>
        )}
      </section>
      <footer className='modal-card-foot'>
        <button className='button is-success'>Save changes</button>
        <button className='button'>Cancel</button>
      </footer>
    </div>
  </div>
