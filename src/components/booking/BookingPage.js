import React, { useReducer, useState, useEffect } from 'react';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from './../../utils/api'; // Import the functions

const initializeTimes = () => {
  return [];
};

const timeReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.times;
    default:
      return state;
  }
};

function BookingPage() {
  const [resDate, setResDate] = useState('');
  const [resTime, setResTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [availableTimes, dispatch] = useReducer(timeReducer, [], initializeTimes);

  // Function to fetch available times
  const fetchAvailableTimes = async (date) => {
    try {
      // Ensure date is a valid Date object
      const validDate = new Date(date); // Convert to Date if it's not already

      const times = fetchAPI(validDate); // Pass the Date object to fetchAPI
      dispatch({ type: 'UPDATE_TIMES', times });
    } catch (error) {
      console.error('Error fetching available times:', error);
    }
  };

  useEffect(() => {
    const today = new Date();
    fetchAvailableTimes(today); // Fetch times for today
  }, []);

  const updateTimes = (date) => {
    setResDate(date);
    fetchAvailableTimes(date); // Fetch available times for the selected date
  };

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
          submitAPI={submitAPI}
        />
      </section>
    </main>
  );
}

export default BookingPage;
