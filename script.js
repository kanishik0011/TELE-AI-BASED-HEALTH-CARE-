document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us, ' + document.getElementById('name').value + '!');
});

// Video call functionality (placeholder)
document.getElementById('start-video-call').addEventListener('click', function() {
    alert('Video call feature is not yet implemented. This is a placeholder.');
});

// Chatbot functionality
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementBy