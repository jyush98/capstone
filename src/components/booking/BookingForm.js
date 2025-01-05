import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validate } from '../../utils/validationUtil';

function BookingForm({
    resDate,
    resTime,
    guests,
    occasion,
    availableTimes,
    occasions,
    updateTimes,
    submitAPI
}) {

    // Handle form submission (for now, just log the state)
    const handleSubmit = (values) => {
        // Call submitAPI to simulate form submission
        const submissionSuccess = submitAPI(values);
        if (submissionSuccess) {
            console.log("Reservation submitted successfully:", values);
        } else {
            console.error("Error submitting reservation");
        }
    };

    const today = new Date().toISOString().split('T')[0];



    return (
        <Formik
            initialValues={{
                resDate: resDate,
                resTime: resTime,
                guests: guests,
                occasion: occasion
            }}
            validate={validate}
            onSubmit={handleSubmit}
        >
            {({ isValid, dirty, setFieldValue }) => (
                <Form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} data-testid="booking-form">
                    <label htmlFor="res-date">Choose date</label>
                    <Field
                        type="date"
                        id="res-date"
                        name="resDate"
                        min={today}
                        onChange={(e) => {
                            // Use Formik's setFieldValue to update the value of resDate
                            setFieldValue("resDate", e.target.value);
                            updateTimes(e.target.value);  // Keep this to update available times based on the date
                        }}
                    />
                    <ErrorMessage name="resDate" component="div" className="error" />

                    <label htmlFor="res-time">Choose time</label>
                    <Field as="select" id="res-time" name="resTime">
                        {availableTimes.map((time) => (
                            <option key={time} value={time}>{time}</option>
                        ))}
                    </Field>

                    <label htmlFor="guests">Number of guests</label>
                    <Field
                        type="number"
                        id="guests"
                        name="guests"
                        min="1"
                        max="10"
                    />
                    <ErrorMessage name="guests" component="div" className="error" />

                    <label htmlFor="occasion">Occasion</label>
                    <Field as="select" id="occasion" name="occasion">
                        {occasions.map((occasion) => (
                            <option key={occasion} value={occasion}>{occasion}</option>
                        ))}
                    </Field>
                    <ErrorMessage name="occasion" component="div" className="error" />

                    <button
                        type="submit"
                        disabled={!isValid || !dirty}
                        className={!isValid || !dirty ? 'button-disabled' : 'button-active'}
                    >
                        Make Your reservation
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default BookingForm;
