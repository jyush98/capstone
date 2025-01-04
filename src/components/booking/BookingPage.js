import React, { useReducer, useState } from 'react';
import BookingForm from './BookingForm';

// Initial state for availableTimes
const initializeTimes = () => {
  return [
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ];
};

// Reducer function to update available times
const timeReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // For now, we return the same available times regardless of the date
      return [
        '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
      ];
    default:
      return state;
  }
};

function BookingPage() {
  // Define state in BookingPage
  const [resDate, setResDate] = useState('');
  const [resTime, setResTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  // Define available times using useReducer
  const [availableTimes, dispatch] = useReducer(timeReducer, [], initializeTimes);

  // Function to update available times based on selected date
  const updateTimes = (date) => {
    setResDate(date);
    dispatch({ type: 'UPDATE_TIMES', date });
  };

  // Define available times
  const occasions = ['Birthday', 'Anniversary', 'Engagement'];

  return (
    <main className="main-content">
      <section className="hero">
        <BookingForm
          resDate={resDate}
          setResDate={setResDate}
          resTime={resTime}
          setResTime={setResTime}
          guests={guests}
          setGuests={setGuests}
          occasion={occasion}
          setOccasion={setOccasion}
          availableTimes={availableTimes}
          occasions={occasions}
          updateTimes={updateTimes}
        />
      </section>
    </main>
  );
}

export default BookingPage;
