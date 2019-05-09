import React, { Component } from 'react'
import moment from 'moment'
import '../../vendors/moment-holiday-us.min'

import Controls from './Controls'
import Timer from './Timer'
import Datepicker from './Datepicker'
import HolidaysModal from './HolidaysModal'

export default class Countdown extends Component {
  // eslint-disable-next-line
  state = {
    currentDate: moment(),
    nextDate: moment({ year: moment().year() + 1 }),
    paused: false,
    showHolidays: false
  }
  componentDidMount () {
    // console.log(this.getHolidays())
    this.resume()
  }
  componentWillMount () {
    this.pause()
  }
  getRemainingTime () {
    let { currentDate, nextDate } = this.state
    // // diff khoang cach tu giua 2 thoi diem tinh bang milisecond
    let diff = nextDate.diff(currentDate)

    // console.log(diff)
    // chuyen diff tu milisecond sang obj duaration de get months days minutes seconds
    return moment.duration(diff)
  }
  handlePausedToggle () {
    this.setState(({paused}, props) => {
      // console.log(prevState, props)
      paused = !paused
      if (paused) {
        this.pause()
      } else {
        this.resume()
      }
      return {
        paused
      }
    })
  }
  handleDateReset = nextDate => {
    this.setState({
      nextDate
    })
    this.pause()
    // console.log(this.state.nextDate)
  }
  handleHolidaysToggle = () => {
    this.setState({
      showHolidays: !this.state.showHolidays
    })
  }
  getHolidays() {
    const {currentDate, nextDate} = this.state

    return currentDate.holidaysBetween(nextDate)
  }
  pause () {
    clearInterval(this.interval)
  }
  resume () {
    this.interval = setInterval(() => {
      this.setState({
        currentDate: moment()
      })
    }, 1000)
  }
  render () {
    const { paused, nextDate, showHolidays } = this.state
    const duration = this.getRemainingTime()
    const holidays = this.getHolidays()
    return (
      <section className='hero is-dark is-fullheight has-text-centered'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title'>
              Countdown to {nextDate.format('DD-MMM-YYYY').toString()}:
              <button className='button is-light is-rounded is small'
              style={{margin: '5px 0 0 10px'}}
              onClick={this.handleHolidaysToggle}>
                Holidays
              </button>
            </h1>
            <section className='section'>
              <Timer duration={duration} />
            </section>
            <Datepicker onDateReset={this.handleDateReset}/>
            <Controls paused={paused} onPauseToggle={() => this.handlePausedToggle()} />
            <HolidaysModal 
              active={showHolidays}
              onHolidaysToggle={this.handleHolidaysToggle}
              holidays={holidays} />
          </div>
        </div>
      </section >
    )
  }
}