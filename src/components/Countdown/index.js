import React, { Component } from 'react'
import moment from 'moment'

import Controls from './Controls'
import Timer from './Timer'
import Datepicker from './Datepicker'

export default class Countdown extends Component {
  state = {
    currentDate: moment(),
    nextDate: moment({ year: moment().year() + 1 }),
    paused: false
  }
  componentDidMount () {
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
    this.setState((prevState, props) => {
      console.log(prevState, props)
      const paused = !prevState.paused
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
    console.log(this.state.nextDate)
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
    const { paused } = this.state
    const duration = this.getRemainingTime()
    return (
      <section className='hero is-dark is-fullheight has-text-centered'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title'>
              Countdown to new year:
            </h1>
            <section className='section'>
              <Timer duration={duration} />
            </section>
            <Datepicker onDateReset={this.handleDateReset}/>
            <Controls paused={paused} onPauseToggle={() => this.handlePausedToggle()} />
          </div>
        </div>
      </section >
    )
  }
}