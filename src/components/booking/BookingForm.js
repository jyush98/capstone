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
    const handleSubmit = (values) => {
        const submissionSuccess = submitAPI(values);
        if (submissionSuccess) {
            console.log("Reservation submitted successfully:", values);
        } else {
            console.error("Error submitting reservation");
        }
    };

    const today = new Date().toISOString().split('T')[0];

    return (
        <section>
            <h2>Book Your Table</h2>
            <p>Fill out the form below to reserve your spot.</p>
            <Formik
                initialValues={{
                    resDate: resDate,
                    resTime: resTime,
                    guests: guests,
                    occasion: occasion,
                }}
                validate={validate}
                onSubmit={handleSubmit}
            >
                {({ isValid, dirty, setFieldValue }) => (
                    <Form
                        style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
                        data-testid="booking-form"
                        aria-labelledby="booking-form-title"
                    >
                        <label htmlFor="res-date">Choose date</label>
                        <Field
                            type="date"
                            id="res-date"
                            name="resDate"
                            min={today}
                            onChange={(e) => {
                                setFieldValue("resDate", e.target.value);
                                updateTimes(e.target.value);
                            }}
                            aria-required="true"
                        />
                        <ErrorMessage
                            name="resDate"
                            component="div"
                            className="error"
                            role="alert"
                        />

                        <label htmlFor="res-time">Choose time</label>
                        <Field
                            as="select"
                            id="res-time"
                            name="resTime"
                            aria-required="true"
                        >
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
                            aria-label="Number of guests"
                            aria-required="true"
                        />
                        <ErrorMessage
                            name="guests"
                            component="div"
                            className="error"
                            role="alert"
                        />

                        <label htmlFor="occasion">Occasion</label>
                        <Field
                            as="select"
                            id="occasion"
                            name="occasion"
                            aria-label="Select occasion"
                        >
                            {occasions.map((occasion) => (
                                <option key={occasion} value={occasion}>{occasion}</option>
                            ))}
                        </Field>
                        <ErrorMessage
                            name="occasion"
                            component="div"
                            className="error"
                            role="alert"
                        />

                        <button
                            type="submit"
                            disabled={!isValid || !dirty}
                            className={!isValid || !dirty ? 'button-disabled' : 'button-active'}
                            aria-label="Make Your Reservation On Click"
                        >
                            Make Your Reservation
                        </button>
                    </Form>
                )}
            </Formik>
        </section>
    );
}

export default BookingForm;
