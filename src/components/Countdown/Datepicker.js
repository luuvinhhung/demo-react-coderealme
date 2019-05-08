import React, { Component } from 'react'
import moment from 'moment'
export default class Datepicker extends Component {
  state = {
    date: '',
    valid: true
  }
  handleOnChange = ({ target: { value } }) => {
    // console.log(value)
    const date = moment(value)
    this.setState({
      date: value
    })
  }
  handleDateSubmit = e => {
    const { date, valid } = this.state
    e.preventDefault()
    this.setState({
      valid: moment(date).isValid()
    })

    console.log(valid)
    // convert string to datetime format DD-MM-YYYY
    const myDate = moment(date, 'DD-MM-YYYY')
    // truyen myDate tu component con sang cha qua callback func onDateReset
    valid && this.props.onDateReset(myDate)
    console.log('Invalid')
  }

  render () {
    const { date } = this.state
    return (
      <form onSubmit={this.handleDateSubmit}>
        <div className='field is-grouped is-grouped-centered'
          style={{ marginTop: 30, marginBottom: 20 }}>
          <div className='control'>
            <input className='input is-rounded'
              value={date}
              onChange={(e) => this.handleOnChange(e)}
              type='text'
              placeholder='DD-MM-YYYY' />
          </div>
          <div className='control'>
            <button className='button is-rounded is-primary is-outlined'>
              Reset
            </button>
          </div>
        </div>
      </form>
    )
  }
}
