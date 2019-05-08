import React, { Component } from 'react'
import moment from 'moment'
export default class Datepicker extends Component {
  state = {
    date: ''
  }
  handleOnChange = e => {
    // console.log(e.target.value)
    this.setState({
      date: e.target.value
    })
  }
  handleDateSubmit = e => {
    const { date } = this.state
    e.preventDefault()
    // convert string to datetime format DD-MM-YYYY
    const myDate = moment(date, 'DD-MM-YYYY')
    // truyen myDate tu component con sang cha qua callback func onDateReset
    this.props.onDateReset(myDate)
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
              onChange={ (e) => this.handleOnChange(e) } 
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
