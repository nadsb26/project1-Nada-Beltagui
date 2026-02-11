document.addEventListener('DOMContentLoaded', function() {
    // Get all stick figures
    const stick1 = document.getElementById('stick1');
    const stick2 = document.getElementById('stick2');
    const stick3 = document.getElementById('stick3');
    const stick4 = document.getElementById('stick4');

    // Get all speech bubbles
    const bubble1 = document.getElementById('bubble1');
    const bubble2 = document.getElementById('bubble2');
    const bubble3 = document.getElementById('bubble3');
    const bubble4 = document.getElementById('bubble4');

    // Get all speech texts
    const text1 = document.getElementById('text1');
    const text2 = document.getElementById('text2');
    const text3 = document.getElementById('text3');
    const text4 = document.getElementById('text4');

    // Function to toggle speech bubble
    function toggleSpeech(bubble, text) {
        if (bubble.style.display === 'none' || bubble.style.display === '') {
            bubble.style.display = 'block';
            text.style.display = 'block';
        } else {
            bubble.style.display = 'none';
            text.style.display = 'none';
        }
    }

    // Add click event listeners
    stick1.addEventListener('click', function() {
        toggleSpeech(bubble1, text1);
    });

    stick2.addEventListener('click', function() {
        toggleSpeech(bubble2, text2);
    });

    stick3.addEventListener('click', function() {
        toggleSpeech(bubble3, text3);
    });

    stick4.addEventListener('click', function() {
        toggleSpeech(bubble4, text4);
    });

    // Close speech bubble when clicking anywhere else
    document.addEventListener('click', function(event) {
        if (!event.target.classList.contains('stick')) {
            bubble1.style.display = 'none';
            text1.style.display = 'none';
            bubble2.style.display = 'none';
            text2.style.display = 'none';
            bubble3.style.display = 'none';
            text3.style.display = 'none';
            bubble4.style.display = 'none';
            text4.style.display = 'none';
        }
    });
});