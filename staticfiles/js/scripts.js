function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    var responseContainer = document.getElementById('response-container');
    var chatContainer = document.querySelector('.chat-container');
    var userImg = chatContainer.getAttribute('data-user-img');
    var logoImg = chatContainer.getAttribute('data-logo-img');

    var userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'message user';
    userMessageDiv.innerHTML = `<img src="${userImg}" alt="User"> <span>${userInput}</span>`;
    responseContainer.appendChild(userMessageDiv);
    document.getElementById('user-input').value = '';

    var botMessageDiv = document.createElement('div');
    botMessageDiv.className = 'message bot';
    botMessageDiv.innerHTML = `<img src="${logoImg}" alt="Liberte"> `;
    var typingEffectSpan = document.createElement('span');
    typingEffectSpan.textContent = 'Thinking... stay tuned';
    botMessageDiv.appendChild(typingEffectSpan);
    responseContainer.appendChild(botMessageDiv);
    responseContainer.scrollTop = responseContainer.scrollHeight;

    fetch('/send_message/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify({
                message: userInput
            })
        })
        .then(response => response.json())
        .then(data => {
            typeResponse(typingEffectSpan, data.response);
        })
        .catch(error => {
            console.error('Error:', error);
            botMessageDiv.innerHTML = 'Sorry, something went wrong. Please try again.';
        });
}

function typeResponse(element, text) {
    let index = 0;
    element.textContent = '';
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, 5);
        }
    }
    type();
}

function handleKeyPress(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function startVoiceRecognition() {
    if (!('webkitSpeechRecognition' in window)) {
        alert('Speech recognition not supported. Please use a supported browser.');
        return;
    }

    var recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = function () {
        console.log('Voice recognition started. Speak into the microphone.');
    };

    recognition.onresult = function (event) {
        var transcript = event.results[0][0].transcript;
        document.getElementById('user-input').value = transcript;
        sendMessage();
    };

    recognition.onerror = function (event) {
        console.error('Speech recognition error detected: ' + event.error);
    };

    recognition.onend = function () {
        console.log('Voice recognition ended.');
    };

    recognition.start();
}
