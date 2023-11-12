window.onload = function () {
    const wordsList = [
        'Apple', 'Table', 'Nature', 'Yellow', 'Family',
        'Country', 'Product', 'Morning','Library', 'Silence',
        'Weather', 'Diamond', 'Freedom', 'Explore', 'Failure',
        'Imagine','Journey', 'Perfect', 'Quality', 'Success'
    ];

    let chosenWord;
    let guessedLetters;
    let controlArray;
    let remainingAttempts = 3;
    let gameTimer;

    document.getElementById("startButton").addEventListener("click", function () {
        initializeGame(wordsList, chosenWord, guessedLetters, controlArray, remainingAttempts);
        document.getElementById("gameElements").style.display = 'flex';
        document.getElementById("startButton").style.display = 'none';
        startGameTimer();
    });

    document.getElementById("checkButton").addEventListener("click", function () {
        if (remainingAttempts > 1) {
            remainingAttempts--;
            updateAttemptsDisplay(remainingAttempts);
        } else {
            updateAttemptsDisplay(0);
            alert("You've run out of attempts!");
            document.getElementById("game").style.display = 'none';
            document.getElementById("restartButton").style.display = 'flex';
            document.getElementById("restartButton").addEventListener("click", function () {
                location.reload();
            });
            stopGameTimer();
        }
    });
};

function initializeGame(wordArray, chosen, guessed, control, attempts) {
    chosen = wordArray[parseInt(Math.random() * wordArray.length)].toUpperCase();
    guessed = new Array(chosen.length).fill(0);
    control = new Array(chosen.length).fill(0);

    let chosenCount = 0;

    while (chosenCount < 3) {
        let randomIndex = parseInt(Math.random() * chosen.length);

        if (control[randomIndex] === 0) {
            guessed[randomIndex] = chosen[randomIndex];
            control[randomIndex] = 1;
            chosenCount++;
        }
    }

    for (let index = 0; index < chosen.length; index++) {
        console.log(guessed[index]);
    }

    generateInputFields(chosen.length, control, guessed);

    document.getElementById("checkButton").addEventListener("click", function () {
        console.log(getUserInputs(guessed));
        const inputValues = getUserInputs(guessed);

        for (let index = 0; index < chosen.length; index++) {
            if (inputValues[index] === chosen[index]) {
                guessed[index] = inputValues[index];
            }
        }

        console.log(guessed);

        generateInputFields(chosen.length, control, guessed);

        if (guessed.join('') === chosen) {
            const elapsedTime = document.getElementById("timerDisplay").textContent;
            alert("Congratulations, you guessed the word correctly!\n" + elapsedTime);
            document.getElementById("game").style.display = 'none';
            document.getElementById("restartButton").style.display = 'flex';
            document.getElementById("restartButton").addEventListener("click", function () {
                location.reload();
            });
            stopGameTimer();
        }
    });

    updateAttemptsDisplay(attempts);
}

function updateAttemptsDisplay(attemptsLeft) {
    document.getElementById("attemptsDisplay").textContent = "Attempts left: " + attemptsLeft;
}

function startGameTimer() {
    let seconds = 0;
    gameTimer = setInterval(function () {
        seconds++;
        document.getElementById("timerDisplay").textContent = "Time: " + seconds + "s";
    }, 1000);
    return seconds;
}

function stopGameTimer() {
    clearInterval(gameTimer);
}

function generateInputFields(numInputs, arr1, arr2) {
    const inputCount = parseInt(numInputs);

    const inputContainer = document.getElementById('inputContainer');

    if (!inputContainer) {
        console.error("Error: 'inputContainer' element not found.");
        return;
    }

    inputContainer.innerHTML = '';

    for (let index = 0; index < inputCount; index++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'letterInput' + index;
        input.maxLength = 1;
        inputContainer.appendChild(input);

        if (arr1[index] === 1) {
            input.defaultValue = arr2[index];
            input.disabled = true;
        }
    }
}

function getUserInputs(arr) {
    let inputArray = new Array();
    for (let index = 0; index < arr.length; index++) {
        let temp = document.getElementById(`letterInput${index}`);

        if (temp === null) {
            inputArray[index] = arr[index];
        } else {
            inputArray[index] = temp.value.toUpperCase();
        }
    }
    return inputArray;
}