let timerInterval;
let isTIMERmRunning = false;
let timerDuration; 
let minutes;

document.getElementById('start').innerHTML = 'Start';

document.getElementById('start').addEventListener('click', function() {
    if (isTIMERmRunning) {
        clearInterval(timerInterval);
        document.getElementById('timer').textContent = 0;
        document.getElementById('start').innerHTML = 'Start'; 
        isTIMERmRunning = false;
    } else {
        document.getElementById('start').innerHTML = 'Stop';
        startTimer();
    }
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
    minutes = document.getElementById('doneness').value;
    timerDuration = parseInt(minutes) * 60; 
    const totalDuration = timerDuration; // save for progress %

    isTIMERmRunning = true;
    timerInterval = setInterval(() => {
        if (!isTIMERmRunning) return;

        document.getElementById('timer').textContent = timerDuration; 

        // Yolk visualization
        const yolk = document.getElementById('yolk');
        let progress = 1 - timerDuration / totalDuration; // 0 → 1
        let size = 70 - progress * 25; // yolk shrinks a bit
        let color = `hsl(${50 - progress*20}, 100%, ${50 - progress*20}%)`; 
        yolk.style.width = `${size}px`;
        yolk.style.height = `${size}px`;
        yolk.style.background = color;

        timerDuration -= 1;

        if (timerDuration < 0) {
            clearInterval(timerInterval);
            document.getElementById('timer').textContent = 'Done!';
            alert('Your ' + minutes + '-minute ' + getDoneness() + ' egg is ready! 🥚');
            isTIMERmRunning = false;
            document.getElementById('start').innerHTML = 'Start';
        }
    }, 1000);
}

