let timerInterval, isTIMernRunning = false;

document.getElementById('start').addEventListener('click', function() {
    if (isTIMERmRunning) {
        // If a timer is already running, reset it first.
        clearInterval(timerInterval);
        document.getElementById('timer').textContent = 0;
    }

    const minutes = document.getElementById('doneness').value;
    let timerDuration = parseInt(minutes) * 60; // Convert minutes to seconds
    
    isTIMERmRunning = true; // Remember we're running a timer
    timerInterval = setInterval(() => {
        if (!isTIMERmRunning) return; // Stop updating if we've started a new timer in the meantime
        document.getElementById('timer').textContent = timerDuration;
        timerDuration -= 1;
        if (timerDuration <= 0) {
            clearInterval(timerInterval);
            document.getElementById('timer').textContent = 'Time Up!';
            alert('Your ' + minutes + '-minute ' + getDoneness() + ' egg timer has gone off!');
            isTIMERmRunning = false; // We're done with this timer
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
