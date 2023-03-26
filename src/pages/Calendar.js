import React, { useState } from 'react';
import Calendar from 'react-calendar';

function CalendarPage() {
  const [date, setDate] = useState(new Date());
  const [newAppointmentDate, setNewAppointmentDate] = useState('');
  const [newAppointmentTime, setNewAppointmentTime] = useState('');
  const [newAppointmentPatientName, setNewAppointmentPatientName] = useState('');
  const [newAppointmentReasonForVisit, setNewAppointmentReasonForVisit] = useState('');
  const [newAppointmentOtherNotes, setNewAppointmentOtherNotes] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([
    {
      date: new Date(2023, 2, 24),
      time: '9:00 AM',
      patientName: 'Elias Pettersson',
      reasonForVisit: 'Check-up',
      otherNotes: ''
    },
    {
      date: new Date(2023, 2, 24),
      time: '9:30 AM',
      patientName: 'Quinn Hughes',
      reasonForVisit: 'Follow-up',
      otherNotes: ''
    }, 
    {
        date: new Date(2023, 2, 24),
        time: '10:30 AM',
        patientName: 'Ethan Bear',
        reasonForVisit: 'Consultation',
        otherNotes: ''
      }
]);

  const filteredData = data.filter(item => item.date.toDateString() === date.toDateString());

  const handleAddAppointment = () => {
    setData(prevData => [
      ...prevData,
      {
        date: new Date(newAppointmentDate),
        time: newAppointmentTime,
        patientName: newAppointmentPatientName,
        reasonForVisit: newAppointmentReasonForVisit,
        otherNotes: newAppointmentOtherNotes
      }
    ]);
    setNewAppointmentDate('');
    setNewAppointmentTime('');
    setNewAppointmentPatientName('');
    setNewAppointmentReasonForVisit('');
    setNewAppointmentOtherNotes('');
  };

  const handleSearchAppointments = () => {
    if (searchTerm) {
      return data.filter(item => item.patientName.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    return [];
  };

  return (
    <div>
      <h1>Administrator Mode</h1>
      <div style={{ display: 'flex' }}>
        <Calendar onChange={setDate} value={date} />
        <div style={{ marginLeft: 'auto' }}>
          <div>
            <input
              type="date"
              value={newAppointmentDate}
              onChange={e => setNewAppointmentDate(e.target.value)}
            />
            <input
              type="time"
              value={newAppointmentTime}
              onChange={e => setNewAppointmentTime(e.target.value)}
            />
            <input
              type="text"
              value={newAppointmentPatientName}
              onChange={e => setNewAppointmentPatientName(e.target.value)}
              placeholder="Patient Name"
            />
            <input
              type="text"
              value={newAppointmentReasonForVisit}
              onChange={e => setNewAppointmentReasonForVisit(e.target.value)}
              placeholder="Reason for Visit"
            />
            <input
              type="text"
              value={newAppointmentOtherNotes}
              onChange={e => setNewAppointmentOtherNotes(e.target.value)}
              placeholder="Other Notes"
            />
            <button onClick={handleAddAppointment}>Add Appointment</button>
          </div>
          <div>
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search Appointments"
            />
            <button onClick={handleSearchAppointments}>Search</button>
          </div>
          {handleSearchAppointments().map(item => (
            <p key={`${item.date}${item.time}${item.patientName}`}>
                {item.date.toDateString()} - {item.time} - {item.patientName} - {item.reasonForVisit} - {item.otherNotes}
            </p>
          ))}
          <p>Selected Date: {date.toDateString()}</p>
          {filteredData.map(item => (
            <p key={`${item.date}${item.time}${item.patientName}`}>
                {item.time} - {item.patientName} - {item.reasonForVisit} - {item.otherNotes}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CalendarPage;