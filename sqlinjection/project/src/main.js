// Initialize syntax highlighting
hljs.highlightAll();

// Chat knowledge base
const sqlInjectionKnowledge = {
    "what is sql injection": "SQL injection is a type of security vulnerability that occurs when an attacker is able to insert malicious SQL code into a query that an application sends to its database. This can result in unauthorized access to data or manipulation of the database.",
    "how to prevent sql injection": "To prevent SQL injection: 1. Use parameterized queries 2. Input validation 3. Escape special characters 4. Use ORMs 5. Implement proper access controls 6. Regular security audits",
    "example of sql injection": "A classic example is entering ' OR '1'='1 as a password in a login form. This might result in a query like: SELECT * FROM users WHERE username='admin' AND password='' OR '1'='1'",
};

// Initialize chat with welcome message
document.addEventListener('DOMContentLoaded', () => {
    addMessage("Hi! Ask me anything about SQL injection!", true);
});

// Tab switching functionality
function setActiveTab(tab) {
    // Update button styles
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.tab === tab) {
            btn.classList.add('active');
        }
    });

    // Show/hide content
    const theorySection = document.getElementById('theory');
    const chatSection = document.getElementById('chat');

    if (tab === 'theory') {
        theorySection.classList.remove('hidden');
        chatSection.classList.add('hidden');
    } else {
        theorySection.classList.add('hidden');
        chatSection.classList.remove('hidden');
    }
}

// Chat functionality
function addMessage(text, isBot) {
    const messagesDiv = document.getElementById('messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `flex ${isBot ? 'justify-start' : 'justify-end'}`;

    const messageContent = document.createElement('div');
    messageContent.className = `message ${isBot ? 'bot' : 'user'}`;
    messageContent.textContent = text;

    messageDiv.appendChild(messageContent);
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function handleSend() {
    const input = document.getElementById('chatInput');
    const text = input.value.trim();

    if (!text) return;

    // Add user message
    addMessage(text, false);

    // Find response
    const lowercaseInput = text.toLowerCase();
    let response = "I'm not sure about that. Try asking about what SQL injection is, how to prevent it, or examples of SQL injection.";

    for (const [key, value] of Object.entries(sqlInjectionKnowledge)) {
        if (lowercaseInput.includes(key)) {
            response = value;
            break;
        }
    }

    // Add bot response after a short delay
    setTimeout(() => {
        addMessage(response, true);
    }, 500);

    // Clear input
    input.value = '';
}

// Handle Enter key in chat input
document.getElementById('chatInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSend();
    }
});