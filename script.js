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
    const totalDuration = timerDuration;
    const yolk = document.getElementById('yolk');

    // Set max shrink & color depth depending on doneness
    let shrinkAmount, hueShift, lightnessShift;
    switch (minutes) {
        case "3": // Soft
            shrinkAmount = 10;  // small shrink
            hueShift = -5;      // slight darker yellow
            lightnessShift = -5;
            break;
        case "5": // Medium
            shrinkAmount = 18;
            hueShift = -12;     // deeper golden
            lightnessShift = -10;
            break;
        case "8": // Hard
            shrinkAmount = 25;  // biggest shrink
            hueShift = -20;     // much darker
            lightnessShift = -15;
            break;
        default:
            shrinkAmount = 15;
            hueShift = -10;
            lightnessShift = -10;
    }

    const baseSize = 70; // starting yolk size
    const baseHue = 50;  // yellow hue
    const baseLightness = 50; // brightness

    isTIMERmRunning = true;
    timerInterval = setInterval(() => {
        if (!isTIMERmRunning) return;

        document.getElementById('timer').textContent = timerDuration; 

        // Progress from 0 → 1
        let progress = 1 - timerDuration / totalDuration;

        // Calculate yolk size and color based on doneness
        let size = baseSize - progress * shrinkAmount;
        let hue = baseHue + progress * hueShift;
        let lightness = baseLightness + progress * lightnessShift;

        yolk.style.width = `${size}px`;
        yolk.style.height = `${size}px`;
        yolk.style.background = `hsl(${hue}, 100%, ${lightness}%)`;

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
