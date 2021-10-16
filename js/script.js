const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', "A", "B", "C", "D", 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', "W", 'X', 'Y', 'Z'];
const numbers = ["1", "2", "3", "4", "5", "6", "8", "8", "9", "0"];
const symbols = ["!", "@", "#", "$"];

const passwordDisplayElement = document.querySelector("#pw-output");
const generatePasswordButton = document.querySelector("#password-button");

generatePasswordButton.addEventListener("click", getRandomPassword);

function getRandomPassword() {
    const char1RandomIndex = Math.floor(Math.random() * letters.length);
    const char2RandomIndex = Math.floor(Math.random() * letters.length);
    const char3RandomIndex = Math.floor(Math.random() * letters.length);
    const char4RandomIndex = Math.floor(Math.random() * letters.length);
    const char5RandomIndex = Math.floor(Math.random() * letters.length);
    const char6RandomIndex = Math.floor(Math.random() * letters.length);
    const char7RandomIndex = Math.floor(Math.random() * letters.length);
    const char8RandomIndex = Math.floor(Math.random() * letters.length);
    const char9RandomIndex = Math.floor(Math.random() * numbers.length);
    const char10RandomIndex = Math.floor(Math.random() * numbers.length);
    const char11RandomIndex = Math.floor(Math.random() * numbers.length);
    const char12RandomIndex = Math.floor(Math.random() * numbers.length);
    const char13RandomIndex = Math.floor(Math.random() * symbols.length);
    const char14RandomIndex = Math.floor(Math.random() * symbols.length);
    
    const letter1 = letters[char1RandomIndex];
    const letter2 = letters[char2RandomIndex];
    const letter3 = letters[char3RandomIndex];
    const letter4 = letters[char4RandomIndex];
    const letter5 = letters[char5RandomIndex];
    const letter6 = letters[char6RandomIndex];
    const letter7 = letters[char7RandomIndex];
    const letter8 = letters[char8RandomIndex];
    const number1 = numbers[char9RandomIndex];
    const number2 = numbers[char10RandomIndex];
    const number3 = numbers[char11RandomIndex];
    const number4 = numbers[char12RandomIndex];
    const symbol1 = symbols[char13RandomIndex];
    const symbol2 = symbols[char14RandomIndex];

    const chosenPassword = letter1 + letter2 + symbol1 + letter3 + number1 + symbol2 + letter4 + letter5 + number2 + number3 + letter6 + number4 + letter7 + letter8;

    passwordDisplayElement.innerHTML = 'Your generated password is: <code id = "password-out">' + chosenPassword + "</code>";
};
