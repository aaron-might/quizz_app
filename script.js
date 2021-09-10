const quizData = [
    {
        question: 'How old is Aaron?',
        a: '12',
        b: '18',
        c: '190',
        d: '1000',
        correct: 'd'
    },
    {
        question: 'What isthe most used programming language in 2021?',
        a: 'Java',
        b: 'C#',
        c: 'JavaScript',
        d: 'Python',
        correct: 'a'
    },
    {
        question: 'Who isthe President of the US?',
        a: 'Donald Trump',
        b: 'Ivan Saldano',
        c: 'Aaron Might',
        d: 'vladimir putin',
        correct: 'a'
    },
    {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Helicopters Terminals Motorboats Lamborghini',
        d: 'Hyperlink Markup Language',
        correct: 'a'
    },
    {
        question: 'What year was JavaScript launched ?',
        a: '1996',
        b: '1980',
        c: '1999',
        d: 'none of the above',
        correct: 'a'
    }
];
const questionEl = document.getElementById('question');
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer')
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('Submit');
let currentQuestion = 0;
// let answer = undefined;
let score = 0;
loadQuiz();

function loadQuiz() {
    deselectAnswers(); 
    
    const currentQuizData = quizData[currentQuestion];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    // currentQuestion++;
}

function getSelected() {
    
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
             answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {

    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
   //check to see the answer
    const answer = getSelected();
console.log(answer)
    if (answer) {
        if (answer === quizData[currentQuestion].correct) 
        {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            //todo :show results here
            //1 checkout if you have selected a question
            //2deselect when clicking on subkmit
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> <button onClick="location.reload()">Reload</button>`
            // alert('the end! get yourself a coke');
        }

        }
});