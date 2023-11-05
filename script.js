document.addEventListener('DOMContentLoaded', (event) => {
    // Event listener for "WATCH" buttons
    const watchButtons = document.querySelectorAll('.btn-outline-dark');

    watchButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Redirecting to the live stream!');
            // Here you would typically redirect to the streaming page or perform another action
        });
    });

    // Mouseover effect for event items
    const eventItems = document.querySelectorAll('.event-item');

    eventItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#f8f9fa'; // changes background color on hover
        });

        item.addEventListener('mouseout', function() {
            this.style.backgroundColor = ''; // resets background color when not hovered
        });
    });
});

document.getElementById('playAudio').addEventListener('click', function() {
    var audio = new Audio('ronaldo-siuuuu.mp3'); 
    audio.play();
});
