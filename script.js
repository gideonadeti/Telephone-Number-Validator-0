const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

checkBtn.addEventListener("click", () => {
    const phoneNumber = userInput.value.trim(); // Trim to remove leading/trailing spaces

    if (phoneNumber === "") {
        displayMessage("Please provide a telephone number", false);
    } else {
        validateTelephoneNumber(phoneNumber);
    }
});

clearBtn.addEventListener("click", () => {
    userInput.value = "";
    clearMessage();
});

const validateTelephoneNumber = (number) => {
    // Regular expression for a valid US phone number
    const phoneRegex = /^(1[\s\-]?)?(\([0-9]{3}\)|[0-9]{3})[\s\-]?[0-9]{3}[\s\-]?[0-9]{4}$/;

    // Check if the input matches the regex
    if (phoneRegex.test(number)) {
        displayMessage(`Valid US number: ${number}`, true);
    } else {
        displayMessage('Invalid US number. Please enter a valid format.', false);
    }
};

const displayMessage = (message, isValid) => {
    resultsDiv.textContent = message;
    resultsDiv.style.color = isValid ? 'green' : 'red';
};

const clearMessage = () => {
    resultsDiv.textContent = "";
};
