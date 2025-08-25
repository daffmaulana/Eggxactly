let timerInterval, isTIMERmRunning = false;

document.getElementById('start').innerHTML = 'Start'; // Initial text

document.getElementById('start').addEventListener('click', function() {
    if (isTIMERmRunning) {
        // If a timer is already running, reset it first.
        clearInterval(timerInterval);
        document.getElementById('timer').textContent = 0;
        document.getElementById('start').innerHTML = 'Start'; // Change back to Start
    } else {
        document.getElementById('start').innerHTML = 'Stop'; // Change to Stop
        startTimer(); // Initiate the timer
    }

    isTIMERmRunning = true; // Remember we're running a timer
    timerInterval = setInterval(() => {
        if (!isTIMERmRunning) return; // Stop updates if a new start event occurred
        document.getElementById('timer').textContent = timerDuration;
        timerDuration -= 1;
        if (timerDuration <= 0) {
            clearInterval(timerInterval);
            document.getElementById('timer').textContent = 'Time Up!';
            alert('Your ' + minutes + '-minute ' + getDoneness() + ' egg timer has gone off!');
            isTIMERmRunning = false; // Timer complete
            document.getElementById('start').innerHTML = 'Start'; // Reset to Start
        }
    }, 1000);
});

function getDoneness() {
    const doneness = document.getElementById('doneness').value;
    switch (doneness) {
        case '3': return 'soft-boiled';
        case '5': return 'medium-boiled';
        case '8': return 'hard-boiled';
        default: return 'unknown';
    }
}

function startTimer() { // Helper function for readability
    const minutes = document.getElementById('doneness').value;
    let timerDuration = parseInt(minutes) * 60; // Convert minutes to seconds
    
    isTIMERmRunning = true;
    timerInterval = setInterval(() => {
        // ... rest of the timer interval function logic stays the same
    }, 1000);
}
