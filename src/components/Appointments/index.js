import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {appointmentList: '', appointmentName: '', appointmentDate: ''}

  addAppointment = () => {
    const {appointmentList, appointmentName, appointmentDate} = this.state
    const newAppointment = {
      id: uuidv4(),
      appointmentName,
      appointmentDate,
    }

    this.setState(prevDetails => ({
      appointmentList: {...prevDetails.appointmentList, newAppointment},
      appointmentName: '',
      appointmentDate: '',
    }))

    console.log(appointmentList)
  }

  addAppointmentName = event => {
    this.setState((this.addAppointmentName: event.target.value))
  }

  addAppointmentDate = event => {
    this.setState((this.addAppointmentDate: event.target.value))
  }

  render() {
    const {appointmentList} = this.state

    return (
      <div className="bg-container">
        <div className="small-container">
          <h1>Add Appointment</h1>
          <div className="card-container">
            <div>
              <form onSubmit={this.addAppointment}>
                <label htmlFor="title">TITLE</label>
                <br />
                <input
                  type="value"
                  onChange={this.addAppointmentName}
                  id="title"
                />
                <br />
                <label htmlFor="date">DATE</label>
                <br />
                <input
                  type="date"
                  onChange={this.addAppointmentDate}
                  id="date"
                  value="dd-mm-yy"
                />
                <br />
                <button type="submit">Add</button>
              </form>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
              />
            </div>
          </div>
          <hr />
          <div className="appointments-list">
            <p>Appointments</p>
            <div className="started-button">
              <button type="button">Started</button>
            </div>
            <ul>
              {appointmentList.map(eachAppointmentDetails => (
                <AppointmentItem
                  appointmentDetails={eachAppointmentDetails}
                  key={eachAppointmentDetails.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
