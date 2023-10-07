let easy = [
    "funny",
    "love",
    "alone",
    "apple",
    "car",
    "hand",
    "time",
    "code",
    "book",
    "day",
    "snow",
    "window",
    "story",
    "egg",
    "rabbit",
];

let normal = [
    "sport",
    "friend",
    "promise",
    "cow",
    "fridge",
    "advocate",
    "annoyed",
    "situation",
    "hospital",
    "america",
    "morocco",
    "giraffe",
    "establish",
    "journal",
    "internet",
    "food",
    "flexible",
    "despair",
    "even",
    "notion",
    "memory",
    "game",
    "fancy",
    "work",
    "respect",
    "telephone",
    "house",
    "business",
    "theory",
    "twelve",
];

let hard = [
    "encourage",
    "adjectives",
    "generally",
    "resolution",
    "responsibility",
    "compliment",
    "background",
    "carefully",
    "advantage",
    "australia",
    "christmas",
    "venezuela",
    "industrial",
    "certificate",
    "unfortunately",
    "unironically",
    "unstoppable",
    "multiplication",
    "technology",
    "misunderstanding",
    "miscommunication",
    "acquaintance",
    "irrespective",
    "entrepreneur",
    "uncatchable",
    "fundemental",
    "apprehensive",
    "necessary",
    "oxygen",
    "suspended",
    "winnable",
    "krokodil",
    "philosophy",
    "counterattack ",
    "suggestion",
    "generator",
    "luxembourg",
    "motherboard",
    "complexity",
    "intelligence",
    "biochemistry",
    "astrophysics",
    "electrochemist",
    "laboratory",
    "microscope",
    "scientist",
    "temperature",
    "thermometer",
    "happiness",
    "excitement",
];

let difficultyButtons = document.querySelector(".difficulty-box");
let gameBox = document.querySelector(".container");
let word = document.getElementById("word");
let score = document.getElementById("score");
let displayTime = document.getElementById("displayTime");
let numberOfWords = document.getElementById("numberOfWords");
var input = document.getElementById("input");
let randomWord = "";
let difficulty = "";
let counter = -1;
let duation = 1000;
let time;

// Remove The Paste Property
input.onpaste = function () {
    return false;
};

difficultyButtons.onclick = function (e) {
    difficulty = e["target"]["className"];
    document.querySelector(".difficulty-box").classList.add("transform");
    setTimeout(() => {
        document.querySelector(".difficulty-box").classList.add("display-none");
        gameBox.classList.remove("display-none");
    }, 900);

    if (difficulty === "easy") {
        numberOfWords.innerHTML = "15";
        time = 20;
    } else if (difficulty === "normal") {
        numberOfWords.innerHTML = "30";
        time = 15;
    } else {
        numberOfWords.innerHTML = "50";
        time = 10;
    }
    startGame(difficulty);
};

const timeInterval = setInterval(updateTime, 1000);

function startGame(difficulty) {
    setTimeout(() => {
        input.focus();
    }, 1000);

    updateScore();

    updateTime();

    if (difficulty === "easy") {
        easyDifficulty();
    } else if (difficulty === "normal") {
        normalDifficulty();
    } else {
        hardDifficulty();
    }

    input.addEventListener("input", (e) => {
        let enteredText = e.target.value;

        if (enteredText === randomWord) {
            e.target.value = "";

            if (difficulty === "easy") {
                easyDifficulty();
                updateScore();
                time = 20;
            } else if (difficulty === "normal") {
                normalDifficulty();
                updateScore();
                time = 15;
            } else {
                hardDifficulty();
                updateScore();
                time = 10;
            }
        }
    });
}

function easyDifficulty() {
    randomWord = easy[Math.floor(Math.random() * easy.length)];

    word.innerHTML = randomWord;

    easy.splice(easy.indexOf(randomWord), 1);

    return randomWord;
}

function normalDifficulty() {
    randomWord = normal[Math.floor(Math.random() * easy.length)];

    word.innerHTML = randomWord;

    normal.splice(normal.indexOf(randomWord), 1);

    return randomWord;
}

function hardDifficulty() {
    randomWord = hard[Math.floor(Math.random() * easy.length)];

    word.innerHTML = randomWord;

    hard.splice(hard.indexOf(randomWord), 1);

    return randomWord;
}

function updateScore() {
    if (difficulty === "easy") {
        counter++;
        if (counter === 15) {
            gameResult();
        }
        score.innerHTML = counter;
    } else if (difficulty === "normal") {
        counter++;
        if (counter === 30) {
            gameResult();
        }
        score.innerHTML = counter;
    } else {
        counter++;
        if (counter === 50) {
            gameResult();
        }
        score.innerHTML = counter;
    }
}

function updateTime() {
    time--;
    if (time === 0) {
        gameResult();
    }
    displayTime.innerHTML = time;
}

function gameResult() {
    gameBox.classList.add("display-none");
    document.querySelector(".game-result").classList.remove("display-none");

    if (counter === 15 || counter === 30 || counter === 50) {
        document.getElementById("result").innerHTML =
            "Congrats You Finished The Game";
    } else {
        document.getElementById("result").innerHTML = "Game Over!";
    }
}

function playAgain() {
    location.reload();
}
