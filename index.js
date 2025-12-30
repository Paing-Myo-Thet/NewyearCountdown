// Function to calculate the time remaining and update the display
function updateCountdown() {
    // 1. Set the target date (e.g., January 1st of the next year)
    const now = new Date();
    console.log(now,"targetdate",now.getTime());
    const currentYear = now.getFullYear();
    const targetDate = new Date( `January 1,${currentYear +1} 00:00:00`).getTime();
  

    // 2. Get the current time in milliseconds since the epoch
    const currentTime = now.getTime();

    // 3. Calculate the difference (remaining time)
    const timeRemaining = targetDate - currentTime;

    // 4. Define time constants in milliseconds
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // 5. Calculate Days, Hours, Minutes, and Seconds
    const days = Math.floor(timeRemaining / day);
    const hours = Math.floor((timeRemaining % day) / hour);
    const minutes = Math.floor((timeRemaining % hour) / minute);
    const seconds = Math.floor((timeRemaining % minute) / second);

    // Get the HTML elements
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const countdownDiv = document.getElementById('countdown');
    const messageDiv = document.getElementById('message');

    // 6. Update the HTML with leading zeros (e.g., "05" instead of "5")
    if (timeRemaining > 0) {
        daysEl.textContent = days < 10 ? `0${days}` : days;
        hoursEl.textContent = hours < 10 ? `0${hours}` : hours;
        minutesEl.textContent = minutes < 10 ? `0${minutes}` : minutes;
        secondsEl.textContent = seconds < 10 ? `0${seconds}` : seconds;

        // Ensure the countdown is visible and message is hidden
        countdownDiv.classList.remove('hidden');
        messageDiv.classList.add('hidden');
    } else {
        // 7. If time is up, hide the timer and display the message
        countdownDiv.classList.add('hidden');
        messageDiv.classList.remove('hidden');

        // Stop the interval from running further
        clearInterval(countdownInterval);
    }
}

// Set up an interval to call the function every 1000 milliseconds (1 second)
const countdownInterval = setInterval(updateCountdown, 1000);

// Call the function immediately to avoid a 1-second delay on load
updateCountdown();