//your JS code here. If required.
function daysOfAYear(year) {
      const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
      return isLeapYear ? 366 : 365;
    }

    function calculateDays() {
      const yearInput = document.getElementById('yearInput').value;
      const resultElement = document.getElementById('result');

      if (!isNaN(yearInput) && yearInput >= 1 && yearInput <= 9999) {
        const days = daysOfAYear(parseInt(yearInput));
        resultElement.textContent = `The year ${yearInput} has ${days} days.`;
      } else {
        resultElement.textContent = 'Please enter a valid year.';
      }
    }