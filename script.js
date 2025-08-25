let timerInterval, isTIMERmRunning = false;

document.getElementById('start').innerHTML = 'Start';

document.getElementById('start').addEventListener('click', function() {
    if (isTIMERmRunning) {
        clearInterval(timerInterval);
        document.getElementById('timer').textContent = 0;
        document.getElementById('start').innerHTML = 'Start'; 
    } else {
        document.getElementById('start').innerHTML = 'Stop';
        startTimer();
    }

    isTIMERmRunning = true;
    timerInterval = setInterval(() => {
        if (!isTIMERmRunning) return;
        document.getElementById('timer').textContent = timerDuration; 
        timerDuration -= 1;
        if (timerDuration <= 0) {
            clearInterval(timerInterval);
            document.getElementById('timer').textContent = 'Time Up!';
            alert('Your ' + minutes + '-minute ' + getDoneness() + ' egg timer has gone off!');
            isTIMERmRunning = false;
            document.getElementById('start').innerHTML = 'Start';
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

function startTimer() {
    const minutes = document.getElementById('doneness').value;
    let timerDuration = parseInt(minutes) * 60; // Declare timerDuration here

    isTIMERmRunning = true;
    timerInterval = setInterval(() => {
        if (!isTIMERmRunning) return;
        document.getElementById('timer').textContent = timerDuration; 
        timerDuration -= 1;
        if (timerDuration <= 0) {
            clearInterval(timerInterval);
            document.getElementById('timer').textContent = 'Time Up!';
            alert('Your ' + minutes + '-minute ' + getDoneness() + ' egg timer has gone off!');
            isTIMERmRunning = false;
            document.getElementById('start').innerHTML = 'Start';
        }
    }, 1000);
}
