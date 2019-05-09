import React, { Component } from 'react'
import moment from 'moment'
export default class extends Component {
  state = {
    date: '',
    valid: true,
    // dirty check input change
    dirty: false
  }
  handleOnChange = ({ target: { value } }) => {
    // console.log(value)
    // const date = moment(value)
    // convert value to datetime format
    const date = moment(value),
      valid = date.isValid() && date.isAfter(moment(date))

    this.setState({
      valid,
      date: value,
      dirty: true
    })
    // truyen myDate tu component con sang cha qua callback func onDateReset
    valid && this.props.onDateReset(date)
  }

  render() {
    let { date, valid, dirty } = this.state
    let classes = 'input is-medium is-rounded '
    // kiem tra khi input change neu valid thi bt else them is-danger khung input
    valid && dirty && (classes += 'is-success')
    !valid && dirty && (classes += 'is-danger')
    return (
      <div className='field is-grouped is-grouped-centered'
        style={{ marginTop: 30, marginBottom: 20 }}>
        <div className='control'>
          <input className={classes}
            value={date}
            onChange={(e) => this.handleOnChange(e)}
            type='text'
            placeholder='DD-MM-YYYY' />
          {!valid && <p className="help is-danger is-size-6">
            Please tyo
              </p>}
        </div>
        {/* <div className='control'>
          <button className='button is-rounded is-primary is-outlined'>
            Reset
            </button>
        </div> */}
      </div>
    )
  }
}
