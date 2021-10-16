const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', "A", "B", "C", "D", 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', "W", 'X', 'Y', 'Z'];
const numbers = ["1", "2", "3", "4", "5", "6", "8", "8", "9", "0"];
const symbols = ["!", "@", "#", "$"];

const passwordDisplayElement = document.querySelector("#pw-output");
const generatePasswordButton = document.querySelector("#password-button");

generatePasswordButton.addEventListener("click", getRandomPassword);

function getRandomPassword() {
    const char1Random = Math.floor(Math.random() * lettersAndOtherThings.length);
    const char2Random = Math.floor(Math.random() * lettersAndOtherThings.length);
    const char3Random = Math.floor(Math.random() * lettersAndOtherThings.length);
    const char4Random = Math.floor(Math.random() * lettersAndOtherThings.length);
    const char5Random = Math.floor(Math.random() * numbers.length);
    const char6Random = Math.floor(Math.random() * lettersAndOtherThings.length);
    const char7Random = Math.floor(Math.random() * lettersAndOtherThings.length);
    const char8Random = Math.floor(Math.random() * lettersAndOtherThings.length);
    const char9Random = Math.floor(Math.random() * lettersAndOtherThings.length);
    const char10Random = Math.floor(Math.random() * numbers.length);
    const char11Random = Math.floor(Math.random() * numbers.length);
    const char12Random = Math.floor(Math.random() * numbers.length);
    const char13Random = Math.floor(Math.random() * symbols.length);
    const char14Random = Math.floor(Math.random() * symbols.length);

    if (char13Random == char14Random) {
        char13Random = Math.floor(Math.random() * symbols.length);
    };

    const char1 = letters[char1Random];
    const char2 = letters[char2Random];
    const char3 = letters[char3Random];
    const char4 = letters[char4Random];
    const char5 = numbers[char5Random];
    const char6 = letters[char6Random];
    const char7 = letters[char7Random];
    const char8 = letters[char8Random];
    const char9 = letters[char9Random];
    const char10 = numbers[char10Random];
    const char11 = numbers[char11Random];
    const char12 = numbers[char12Random];
    const char13 = symbols[char13Random];
    const char14 = symbols[char14Random];

    const chosenPassword = char1 +  + char13 + char2 + char3 + char14 + char4 + char5 + char6 + char7 + char8 + char9 + char10 + char11 + char12;

    passwordDisplayElement.innerHTML = 'Your generated password is: <code id = "password-out">' + chosenPassword + "</code>";
};
