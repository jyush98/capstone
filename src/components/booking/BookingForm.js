import React from 'react';

function BookingForm({
    resDate, setResDate,
    resTime, setResTime,
    guests, setGuests,
    occasion, setOccasion,
    availableTimes,
    occasions,
    updateTimes,
    submitAPI
  }) {


    // Handle form submission (for now, just log the state)
    const handleSubmit = (e) => {
        e.preventDefault();
        // Collecting the form data
        const formData = { resDate, resTime, guests, occasion };
        // Call submitAPI to simulate form submission
        const submissionSuccess = submitAPI(formData);
        if (submissionSuccess) {
          console.log("Reservation submitted successfully:", formData);
        } else {
          console.error("Error submitting reservation");
        }
      };

    const handleDateChange = (e) => {
        updateTimes(e.target.value);  // Dispatch action to update available times based on date
      };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} data-testid="booking-form">
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={resDate} onChange={handleDateChange} />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={resTime} onChange={(e) => setResTime(e.target.value)}>
                {
                    availableTimes.map(time => (
                        <option key={time}>{time}</option>
                    ))
                }
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests"
                value={guests} onChange={(e) => setGuests(e.target.value)} />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} data-testid="occasion-test">
                {
                    occasions.map(occasion => (
                        <option key={occasion}>{occasion}</option>
                    ))
                }
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>

    );
};

export default BookingForm;