window.onload = function () {
    const questionForm = document.getElementById("userAnswers");
    questionForm.addEventlistener("submit", submitForm);
    let myArray = [];

}
function submitForm() {
    event.preventDefault();
    const gameAnswers = document.getElementById("gameAnswers");
    gameAnswers.classList.remove("hidden");
}


const numberArray = [1, 2, 3, 3, 7, 18, 63];

if (answer1.value == "apples" && answer2.value == "tea" && answer3.value == "y" && answer4.value == "y" && answer5.value == "frontend") {
    language.innerHTML = "Possibly JavaScript!";
}
else if (answer1.value == "oranges" && answer2.value == "coffee" && answer3.value == "no" && answer4.value == "no" && answer5.value == "backend") {
    language.innerHTML = "We recommend C#!";
}
else if (answer1.value == "apples" && answer2.value == "coffee" && answer3.value == "no" && answer4.value == "no" && answer5.value == "frontend") {
    language.innerHTML = "Maybe Python is a good fit!";
}

else {
    language.innerHTML = "Maybe try piano lessons!";
}

