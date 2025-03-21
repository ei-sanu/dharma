const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreContainer = document.getElementById('score-container');
const scoreDisplay = document.getElementById('score');
const summaryElement = document.getElementById('summary');

let currentQuestionIndex = 0;
let score = 0;
let wrongAnswers = [];

const questions = [
    { question: '1. What is the safest way to protect your password?', answers: ['Use birth year', 'Use symbols, numbers, and letters', 'Keep it short'], correct: 1 },
    { question: '2. Which attack tricks users into giving away sensitive information?', answers: ['Phishing', 'DDoS', 'Malware'], correct: 0 },
    { question: '3. What does 2FA stand for?', answers: ['Two Factor Authentication', 'Two Firewall Activation', 'Total Firewall Access'], correct: 0 },
    { question: '4. Which is an example of a strong password?', answers: ['123456', 'P@ssw0rd!', 'qwerty'], correct: 1 },
    { question: '5. What type of malware is designed to spread rapidly?', answers: ['Worm', 'Trojan', 'Spyware'], correct: 0 },
    { question: '6. Which protocol is used for secure web browsing?', answers: ['HTTP', 'FTP', 'HTTPS'], correct: 2 },
    { question: '7. What is a firewall used for?', answers: ['Detecting viruses', 'Filtering network traffic', 'Storing passwords'], correct: 1 },
    { question: '8. Which of these is a social engineering attack?', answers: ['Brute Force', 'Phishing', 'Keylogging'], correct: 1 },
    { question: '9. What does VPN stand for?', answers: ['Virtual Private Network', 'Verified Personal Number', 'Visual Protection Node'], correct: 0 },
    { question: '10. What is the primary purpose of an antivirus program?', answers: ['Optimize performance', 'Detect and remove malware', 'Manage passwords'], correct: 1 }
];

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {
    score = 0;
    wrongAnswers = [];
    summaryElement.classList.add('hide');
    scoreContainer.classList.add('hide');
    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    currentQuestionIndex = 0;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(button, index === question.correct, question, index));
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    answerButtonsElement.innerHTML = '';
}

function selectAnswer(button, isCorrect, question, selectedIndex) {
    if (isCorrect) {
        button.classList.add('correct');
        score++;
    } else {
        button.classList.add('wrong');
        wrongAnswers.push({
            question: question.question,
            correctAnswer: question.answers[question.correct],
            selectedAnswer: question.answers[selectedIndex]
        });
    }
    scoreDisplay.innerText = score;
    scoreContainer.classList.remove('hide');

    if (currentQuestionIndex < questions.length - 1) {
        nextButton.classList.remove('hide');
    } else {
        showSummary();
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
}

function showSummary() {
    let summaryHTML = '<h3>Summary:</h3>';
    if (wrongAnswers.length === 0) {
        summaryHTML += '<p>Perfect Score! All answers are correct. 🎯</p>';
    } else {
        wrongAnswers.forEach((item, index) => {
            summaryHTML += `<p><b>Q${index + 1}:</b> ${item.question}<br><b>Your Answer:</b> ${item.selectedAnswer}<br><b>Correct Answer:</b> ${item.correctAnswer}</p>`;
        });
    }
    summaryElement.innerHTML = summaryHTML;
    summaryElement.classList.remove('hide');
}
