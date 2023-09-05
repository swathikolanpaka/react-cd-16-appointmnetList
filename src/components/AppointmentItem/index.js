import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails} = props
  const {name, date} = appointmentDetails

  return (
    <li>
      <p>{name}</p>
      <p>{date}</p>
    </li>
  )
}

export default AppointmentItem
