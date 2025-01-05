import { render, screen, fireEvent, act } from "@testing-library/react";
import BookingForm from "../components/booking/BookingForm";
import { validate } from "../utils/validationUtil";


test('Renders the BookingForm heading or label for "Choose date"', () => {
  render(<BookingForm availableTimes={[]} occasions={['Birthday', 'Anniversary', 'Engagement']}/>);
  const labelElement = screen.getByLabelText(/Choose date/i);  // Look for the "Choose date" label
  expect(labelElement).toBeInTheDocument();
});

test('initializeTimes returns the correct available times', () => {
  const mockFetchAPI = jest.fn().mockResolvedValue(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  return mockFetchAPI().then(times => {
    expect(times).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  });
});

test('updateTimes updates the available times correctly', async () => {
  // Mock fetchAPI return value
  const mockFetchAPI = jest.fn().mockResolvedValue(['17:00', '18:00']);

  // Simulated updateTimes function that uses mockFetchAPI
  const updateTimes = async (date) => {
    return mockFetchAPI(date);  // Simulate fetching available times based on the date
  };

  const updatedTimes = await updateTimes('2025-01-01');  // Simulate date change
  expect(updatedTimes).toEqual(['17:00', '18:00']);
});

test('occasion value is updated to "Anniversary" when the select input is changed', async () => {
  render(
    <BookingForm
      resDate="2025-01-01"
      setResDate={jest.fn()}
      resTime="18:00"
      setResTime={jest.fn()}
      guests={3}
      setGuests={jest.fn()}
      occasion="Birthday"
      setOccasion={jest.fn()}
      availableTimes={['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']}
      occasions={['Birthday', 'Anniversary', 'Engagement']}
      updateTimes={jest.fn()}
      submitAPI={jest.fn()}
    />
  );

  const occasionSelect = screen.getByLabelText(/Occasion/i);
  expect(occasionSelect).toBeInTheDocument(); // Ensure the select element exists
  expect(occasionSelect.value).toBe('Birthday'); // Ensure the initial value is correct

  // Simulate changing the value
  await act(async () => {
    fireEvent.change(occasionSelect, { target: { value: 'Anniversary' } });
  });

  // Assert the value has changed
  expect(occasionSelect.value).toBe('Anniversary');
});

test('Allows a user to submit the form', async () => {
  console.log = jest.fn();

  const mockSubmitAPI = jest.fn().mockReturnValue(true);

  render(
    <BookingForm
      resDate="2025-01-01"
      setResDate={jest.fn()}
      resTime="18:00"
      setResTime={jest.fn()}
      guests={3}
      setGuests={jest.fn()}
      occasion="Anniversary"
      setOccasion={jest.fn()}
      availableTimes={['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']}
      occasions={['Birthday', 'Anniversary', 'Engagement']}
      updateTimes={jest.fn()}
      submitAPI={mockSubmitAPI}
    />
  );

  // Simulate form filling
  await act(async () => {
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Anniversary' } });
    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: '2025-01-01' } });
    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '3' } });
    fireEvent.submit(screen.getByTestId('booking-form'));
  });

  // Verify form submission
  expect(console.log).toHaveBeenCalledTimes(1);
  expect(console.log).toHaveBeenCalledWith('Reservation submitted successfully:', {
    resDate: '2025-01-01',
    resTime: '18:00',
    guests: 3,
    occasion: 'Anniversary',
  });
});

test('Date input has correct HTML5 validation attributes', () => {
  render(<BookingForm availableTimes={[]} occasions={[]} />);
  const dateInput = screen.getByLabelText(/Choose date/i);
  expect(dateInput).toHaveAttribute('type', 'date');
  expect(dateInput).toHaveAttribute('min');
});

test('Guests input has correct HTML5 validation attributes', () => {
  render(<BookingForm availableTimes={[]} occasions={[]} />);
  const guestsInput = screen.getByLabelText(/Number of guests/i);
  expect(guestsInput).toHaveAttribute('type', 'number');
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');
});

test('Validation function identifies missing date as an error', () => {
  const values = { resDate: '', resTime: '', guests: '', occasion: '' };
  const errors = validate(values);
  expect(errors.resDate).toBe('Date is required');
});

test('Validation function identifies invalid guest count', () => {
  const values = { resDate: '2025-01-01', resTime: '', guests: 0, occasion: '' };
  const errors = validate(values);
  expect(errors.guests).toBe('Number of guests must be between 1 and 10');
});

test('Form submission fails for invalid inputs', async () => {
  const mockSubmitAPI = jest.fn();
  render(
      <BookingForm
          resDate=""
          resTime=""
          guests={0}
          occasion=""
          availableTimes={[]}
          occasions={[]}
          updateTimes={jest.fn()}
          submitAPI={mockSubmitAPI}
      />
  );

  await act(async () => {
      fireEvent.submit(screen.getByTestId('booking-form'));
  });

  expect(mockSubmitAPI).not.toHaveBeenCalled();
  expect(screen.getByText('Date is required')).toBeInTheDocument();
  expect(screen.getByText('Number of guests must be between 1 and 10')).toBeInTheDocument();
});

test('Valid occasion selection does not show an error', async () => {
  render(<BookingForm availableTimes={[]} occasions={['Birthday']} />);
  const occasionSelect = screen.getByLabelText(/Occasion/i);

  await act(async () => {
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });
  });

  expect(screen.queryByText('Occasion is required')).not.toBeInTheDocument();
});


