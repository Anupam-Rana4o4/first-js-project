
let randomnumber = localStorage.getItem("randomnumber");

if (!randomnumber) {
    randomnumber = Math.floor(Math.random() * 100) + 1;
    localStorage.setItem("randomnumber", randomnumber);
}

console.log("Random Number:", randomnumber);

const submit = document.getElementById('btnsubmit');
const userinput = document.getElementById('guessnumber');
const guesses = document.getElementById("guesses");
let prevelemen = [];

function check(guess) {
    if (isNaN(guess)) {
        alert("Enter numeric number");
        return false;
    }
    if (guess > 100) {
        alert("Enter number between 1 and 100");
        return false;
    }
    if (guess < 1) {
        alert("Number must be greater than 0");
        return false;
    }
    return true;
}

function restartGame() {
    // Create new random number and save to localStorage
    randomnumber = Math.floor(Math.random() * 100) + 1;
    localStorage.setItem("randomnumber", randomnumber);

    prevelemen = [];
    guesses.textContent = "Previous guesses: ";
    submit.disabled = false;
    userinput.disabled = false;
    userinput.value = "";

    console.log("New Random Number:", randomnumber);
}

function addlist(guess) {
    prevelemen.push(guess);
    guesses.textContent = "Previous guesses: " + prevelemen.join(", ");

    if (guess < randomnumber) {
        alert("Number is greater than your guess");

    }
    else if (guess > randomnumber) {
        alert("Number is smaller than your guess");
    }
    else {
        alert("🎉 Correct number guessed!");

        let again = confirm("Do you want to play again?");
        if (again) {
            restartGame();
        } else {
            submit.disabled = true;
            userinput.disabled = true;
            alert("Thanks for playing!");
        }
    }
}

submit.addEventListener('click', function () {
    const guess = parseInt(userinput.value);

    if (check(guess)) {
        addlist(guess);
    }

    userinput.value = "";
    userinput.focus();
});
