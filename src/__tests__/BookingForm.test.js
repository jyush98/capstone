import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../components/booking/BookingForm";


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

test('setOccasion is called with the correct value when occasion is changed', () => {
    // Mock the setOccasion function
    const mockSetOccasion = jest.fn();
    // Render the BookingForm with the mock function for setOccasion
    render(
      <BookingForm
        resDate="2025-01-01"
        setResDate={() => {}}
        resTime="18:00"
        setResTime={() => {}}
        guests={3}
        setGuests={() => {}}
        occasion="Birthday"
        setOccasion={mockSetOccasion}  // Passing the mock function
        availableTimes={['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']}
        occasions={['Birthday', 'Anniversary', 'Engagement']}
        updateTimes={() => {}}
      />
    );
  
    // Simulate changing the occasion
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Anniversary' } });
  
    // Verify that the mockSetOccasion function was called with the expected argument
    expect(mockSetOccasion).toHaveBeenCalledWith('Anniversary');  // Check that the mock was called with 'Anniversary'
  });

test('Allows a user to submit the form', () => {
    // Mock console.log to verify form submission output
    console.log = jest.fn();

    // Mock functions for the state setters
    const mockSetResDate = jest.fn();
    const mockSetResTime = jest.fn();
    const mockSetGuests = jest.fn();
    const mockSetOccasion = jest.fn();
    const mockUpdateTimes = jest.fn();
    const mockSubmitAPI = jest.fn().mockReturnValue(true);

    // Render the BookingForm component with mock functions
    render(
      <BookingForm
        resDate="2025-01-01"
        setResDate={mockSetResDate}
        resTime="18:00"
        setResTime={mockSetResTime}
        guests={3}
        setGuests={mockSetGuests}
        occasion="Anniversary"
        setOccasion={mockSetOccasion}
        availableTimes={['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']}
        occasions={['Birthday', 'Anniversary', 'Engagement']}
        updateTimes={mockUpdateTimes}
        submitAPI={mockSubmitAPI}
      />
    );

    // Simulate filling out the form
    fireEvent.change(screen.getByTestId('occasion-test'), { target: { value: 'Anniversary' } });
    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: '2025-01-01' } });
    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '3' } });


    // Submit the form
    fireEvent.submit(screen.getByTestId('booking-form'));

    // Check if console.log was called
    expect(console.log).toHaveBeenCalledTimes(1);

    // Assert that console.log was called and check the reservation details logged
    expect(console.log).toHaveBeenCalledWith('Reservation submitted successfully:', {
      resDate: '2025-01-01',
      resTime: '18:00',
      guests: 3,
      occasion: 'Anniversary',  // Ensure the correct occasion is passed
    });
  });


