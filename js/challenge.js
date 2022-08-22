const counter = document.querySelector('#counter');
let interval = setInterval(() => {
    return counter.textContent = parseInt(counter.textContent) + 1
}, 1000);


const minusButton = document.querySelector('#minus');
minusButton.addEventListener('click', () => {
    counter.textContent = parseInt(counter.textContent) - 1;
})

const plusButton = document.querySelector('#plus');
plusButton.addEventListener('click', () => {
    counter.textContent = parseInt(counter.textContent) + 1;
})

const pauseButton = document.querySelector('#pause');
const arrOfButtons = document.querySelectorAll('button');
let intervalID = true;
pauseButton.addEventListener('click', () => {
    if (intervalID) {
        Array.from(arrOfButtons).forEach(ele => {
            if (ele === document.querySelector('button#pause')) {
                return ele.innerText = 'resume'
            } else {
                ele.disabled = true;
            }

            clearInterval(interval);
        })
        intervalID = false;
    } else {
        Array.from(arrOfButtons).forEach(ele => {
            if (ele === document.querySelector('button#pause')) {
                return ele.innerText = 'pause'
            } else {
                ele.disabled = false;
            }
            intervalID = true;
        })
        interval = setInterval(() => {
            return counter.textContent = parseInt(counter.textContent) + 1
        }, 1000);
    }
})

const form = document.querySelector('#comment-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const div = document.querySelector('div#list');
    const p = document.createElement('p');
    p.textContent = document.querySelector('#comment-input').value;
    div.appendChild(p);
    form.reset();
})

const heartButton = document.querySelector('#heart');
const ul = document.querySelector('ul.likes');
let count
heartButton.addEventListener('click', () => {
    num = parseInt(counter.innerText);
    if (document.getElementById(`${num}`)) {
        const liNum = document.getElementById(`${num}`);
        liNum.textContent = `${num} has been liked ${count++} time`
    } else {
        const li = document.createElement('li');
        li.setAttribute('id', `${num}`);
        count = 1
        li.innerHTML = `${num} has been liked ${count} time`;
        ul.appendChild(li);
    }
})





