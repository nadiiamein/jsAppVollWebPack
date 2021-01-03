export class Question {
    static create(question) {
      return  fetch('https://jsvollwebpackapp-default-rtdb.europe-west1.firebasedatabase.app/questions.json', {
            method: 'POST',
            body: JSON.stringify(question),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            question.id = response.name;
            return question;
        })
        .then(addToLocalStorage)
        .then(Question.renderList);
    }

static fetch(token) {
     return fetch(`https://jsvollwebpackapp-default-rtdb.europe-west1.firebasedatabase.app/questions.json?auth=${token}`)
    .then(response => response.json())
    .then(questions => {
        console.log('Fragen', questions);
    });
}

    static renderList() {
        const questions = getQuestionsFormLocalStorage();
        const html = questions.length 
        ? questions.map(toCard).join('')
        : `<div class="mui--text-headline">Noch keine Frage</div>`

const list = document.getElementById('list');
list.innerHTML = html;
    }
}

function addToLocalStorage(question) {
    const all = getQuestionsFormLocalStorage();
    all.push(question);
localStorage.setItem('questions', JSON.stringify(all));
}

function getQuestionsFormLocalStorage() {
    return JSON.parse(localStorage.getItem('questions') || '[]');
}

function toCard(question) {
return `
<div class="mui--text-black-54">
${new Date(question.date).toLocaleDateString()}
${new Date(question.date).toLocaleTimeString()}

</div>
          <div>${question.text}</div>
          <br>
`;
}