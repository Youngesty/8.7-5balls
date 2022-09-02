let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;

phraseRandom = Math.round( Math.random());
        answerPhrase = (phraseRandom === 1) ?
        `Вы загадали число ${answerNumber }?)`:
        `Пффф... Это число ${answerNumber }?)`;
        answerField.innerText = answerPhrase;

document.getElementById('btnRetry').addEventListener('click', function () {
    
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            
            phraseRandom = Math.round( Math.random() * 3);
        switch(phraseRandom) {
            case 1:
                answerField.innerText = `Это же ${answerNumber}, нет?`;
            break;
            case 2:
                answerField.innerText = `Мне кажется, это ${answerNumber}.`
            break;
            case 3:
                answerField.innerText = `Я уверен что это ${answerNumber}.`
        }
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            phraseRandom = Math.round( Math.random() * 3);
        switch(phraseRandom) {
            case 1:
                answerField.innerText = `Это же ${answerNumber}, нет?`;
            break;
            case 2:
                answerField.innerText = `Мне кажется, это ${answerNumber}.`
            break;
            case 3:
                answerField.innerText = `Я уверен что это ${answerNumber}.`
        }
            
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {


        phraseRandom = Math.round( Math.random() * 3);
        switch(phraseRandom) {
            case 1:
                answerField.innerText = "Не думал что будет так просто\n\u{1F60E}";
                gameRun = false
                break;
            case 2:
                answerField.innerText = "Бывало и сложней\n\u{1F60E}";
                gameRun = false
                break;
            case 3:
                answerField.innerText = "Я угадал? Дааа.. я угадал\n\u{1F60E}";
                gameRun = false
                break;
            }        
            
    })

