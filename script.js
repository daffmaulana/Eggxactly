document.getElementById('start').addEventListener('click', function() {
    const minutes = document.getElementById('doneness').value;
    let timerDuration = parseInt(minutes) * 60; // Convert minutes to seconds
    
    timerInterval = setInterval(() => {
        document.getElementById('timer').textContent = timerDuration;
        timerDuration -= 1;
        if (timerDuration <= 0) {
            clearInterval(timerInterval);
            document.getElementById('timer').textContent = 'Time Up!';
            alert('Your ' + minutes + '-minute ' + getDoneness() + ' egg timer has gone off!');
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
