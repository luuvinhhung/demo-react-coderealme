import React, { Component } from 'react'
import moment from 'moment'
import Controls from './Controls'

export default class Countdown extends Component {
  constructor (props) {
    super(props)
    this.state = {
      duration: this.getRemainingTime(),
      paused: false
    }
  }
  componentDidMount () {
    this.interval = setInterval(() => {
      this.setState({
        duration: this.getRemainingTime()
      })
    }, 1000)
  }
  componentWillMount () {
    clearInterval(this.interval)
  }
  getRemainingTime () {
    let now = moment()
    let newYear = moment({ year: now.year() + 1 })
    // diff khoang cach tu now toi new year tinh bang milisecond
    let diff = newYear.diff(now)

    console.log(diff)
    // chuyen diff tu milisecond sang obj duaration de get months days minutes seconds
    return moment.duration(diff)
  }
  render () {
    const { duration, paused } = this.state
    return <section className='hero is-dark is-fullheight has-text-centered'>
      <div className='hero-body'>
        <div className='container'>
          <h1 className='title'>
            Fullheight title
          </h1>
          <div className='section'>
            <nav className='level'>
              <div className='level-item has-text-centered'>
                <div>
                  <p className='heading'>Months</p>
                  <p className='title'>{duration.months()}</p>
                </div>
              </div>
              <div className='level-item has-text-centered'>
                <div>
                  <p className='heading'>Days</p>
                  <p className='title'>{duration.days()}</p>
                </div>
              </div>
              <div className='level-item has-text-centered'>
                <div>
                  <p className='heading'>Hours</p>
                  <p className='title'>{duration.hours()}</p>
                </div>
              </div>
              <div className='level-item has-text-centered'>
                <div>
                  <p className='heading'>Minutes</p>
                  <p className='title'>{duration.minutes()}</p>
                </div>
              </div>
              <div className='level-item has-text-centered'>
                <div>
                  <p className='heading'>Seconds</p>
                  <p className='title'>{duration.seconds()}</p>
                </div>
              </div>
            </nav>
            <Controls paused={paused} />
          </div>
        </div>
      </div>
    </section>
  }
}
