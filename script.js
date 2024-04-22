function updateTimer() {
    const now = new Date();
    const formattedDateTime = now.toLocaleString('en-US', {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    });
    document.getElementById('timer').textContent = formattedDateTime;
}

setInterval(updateTimer, 1000);
updateTimer(); // Initial update when the page loads
