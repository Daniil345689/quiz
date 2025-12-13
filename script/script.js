
// обработчик событий, который отслеживает загрузку контента
document.addEventListener('DOMContentLoaded', function () {
const btnOpenModal = document.querySelector('#btnOpenModal');
const modalBlock = document.querySelector('#modalBlock');
const closeModal = document.querySelector('#closeModal');
const questionTitle = document.querySelector('#question');
const formAnswers = document.querySelector('#formAnswers');
const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');
const sendButton = document.querySelector('#send');

let myVar = 3;

// if (myVar < 3) {
//  console.log('myVar < 3');
// }

// if (myVar === 3) {
//  console.log('myVar === 3');
// }

// if (myVar > 3) {
//  console.log('myVar > 3');
// }

switch (true) {
  case (myVar < 3):
    console.log('myVar < 3');
    break;
    case (myVar === 3):
    console.log('myVar === 3');
    break;
    default:
      console.log('ни в один из вариантов');
}

//обьект содержащий вопросы и ответы
const questions = [
    {
        question: "Якого кольору бургер?",
        answers: [
            {
                title: 'Стандарт',
                url: './image/burger.png'
            },
            {
                title: 'Чорний',
                url: './image/burgerBlack.png'
            }
        ],
        type: 'radio'
    },
    {
        question: "З якого м'яса котлета?",
        answers: [
            {
                title: 'Курка',
                url: './image/chickenMeat.png'
            },
            {
                title: 'Яловичина',
                url: './image/beefMeat.png'
            },
            {
                title: 'Свинина',
                url: './image/porkMeat.png'
            }
        ],
        type: 'radio'
    },
    {
        question: "Додаткові інгредієнти ?",
        answers: [
            {
                title: 'Помідор',
                url: './image/tomato.png'
            },
            {
                title: 'Огірок',
                url: './image/cucumber.png'
            },
            {
                title: 'Салат',
                url: './image/salad.png'
            },
            {
                title: 'Цибуля',
                url: './image/onion.png'
            }
        ],
        type: 'checkbox'
    },
    {
        question: "Додати соус?",
        answers: [
            {
                title: 'Часниковий',
                url: './image/sauce1.png'
            },
            {
                title: 'Томатний',
                url: './image/sauce2.png'
            },
            {
                title: 'Гірчичний',
                url: './image/sauce3.png'
            }
        ],
        type: 'radio'
    }
];

//обработчики событий открытия/закрытия модального окна
btnOpenModal.addEventListener('click', () => {
modalBlock.classList.add('d-block');
playTest();
})

closeModal.addEventListener('click', () => {
modalBlock.classList.remove('d-block');
})

//функция запуска тестирования
const playTest = () => {

    const finalAnswer = [];
  let numberQustion = 0;

const renderAnswers = (index) => {
questions[index].answers.forEach((answer) => {
  const answerItem = document.createElement('div');
  answerItem.classList.add('answers-item', 'd-flex', 'flex-column');

    
    answerItem.innerHTML = `<input type="${questions[index].type}" id="${answer.title}" name="answer" class="d-none">
        <label for="${answer.title}" class="d-flex flex-column justify-content-between">
        <img class="answerImg" src="${answer.url}" alt="burger">
        <span>${answer.title}</span>
        </label>
        `;
        formAnswers.appendChild(answerItem);
       })
    }

// функция рендеринга вопросов + ответов
const renderQuestions = (indexQuestion) => {
formAnswers.innerHTML = "";

if (numberQustion >= 0 && numberQustion <= questions.length - 1) {
questionTitle.textContent = `${questions[indexQuestion].question}`;
renderAnswers(indexQuestion);
nextButton.classList.add('d-block');
prevButton.classList.add('d-block');
}

if (numberQustion === 0) {
    prevButton.classList.add('d-block');
}

if (numberQustion === questions.length) {
    nextButton.classList.add('d-block');
    prevButton.classList.add('d-block');
    sendButton.classList.remove('d-block');
}

}

// запуск функции рендеринга
renderQuestions(numberQustion);


const checkAnswer = () => {
    console.log('check');
    const obj = {};

    const inputs = [...formAnswers.elements].filter((input) => input.checked)
    
    inputs.forEach((input, index) => {
    if (numberQustion >= 0 && numberQustion <= questions - 1) {    
     obj[`${index}_${questions[numberQuestion].question}`] = elem.value;
    }
    if (numberQustion === questions.length){
        obj['Number Phone'] = input.value;
    }
       });

    finalAnswer.push(obj);
    console.log(finalAnswer);
}


// обработчики событий кнопок next и prev
nextButton.onclick = () => {
  checkAnswer();
  numberQustion++;
  renderQuestions(numberQustion);
}

prevButton.onclick = () => {
  numberQustion--;
  renderQuestions(numberQustion);
}

sendButton.onclick = () => {
   checkAnswer();
   numberQustion++;
   renderQuestions(numberQustion);
   console.log(finalAnswer);
}
}
})