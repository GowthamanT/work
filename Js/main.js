// Copyright
const copyrightYearElement = document.getElementById('copyrightYear');
const currentYear = new Date().getFullYear();
copyrightYearElement.textContent = currentYear;

// Total Year in development
const totalDevelopmentYearElement = document.getElementById(
    'totalDevelopmentYear'
);

const currentDate = new Date();
const startDate = new Date('November 1, 2019');

// Calculate the difference in milliseconds
const timeDifference = currentDate - startDate;

// Convert the difference to years
const yearsDifference = timeDifference / (1000 * 60 * 60 * 24 * 365.25);

// Round down to get the whole number of years
const totalYears = Math.floor(yearsDifference);

totalDevelopmentYearElement.textContent = totalYears;
