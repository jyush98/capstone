// validationUtils.js
export const validate = (values) => {
    const errors = {};
    const today = new Date().toISOString().split('T')[0];

    if (!values.resDate) {
        errors.resDate = "Date is required";
    } else if (new Date(values.resDate) < today) {
        errors.resDate = "Date must be in the future";
    }

    if (!values.guests && values.guests != 0) {
        errors.guests = "Number of guests is required";
    } else if (values.guests < 1 || values.guests > 10) {
        errors.guests = "Number of guests must be between 1 and 10";
    }

    if (!values.occasion) {
        errors.occasion = "Occasion is required";
    }

    if (values.resTime=="--") {
        errors.resTime = "Please select a valid time"
    }

    return errors;
};
