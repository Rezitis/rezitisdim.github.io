
let firstClickDone = false;
const correctCode = "σουσου";

// Function to handle the first click on the gift box
function firstClick() {
    if (!firstClickDone) {
        document.getElementById('gift-box').querySelector('.text').innerText = "πρεπει να βεις τον κωδικο";
        document.getElementById('code-prompt').classList.remove('hidden');
        firstClickDone = true;
    }
}

// Function to check the entered code
function checkCode() {
    const userInput = document.getElementById('code-input').value;
    if (userInput === correctCode) {
        openGift();
        displayMessage();
    } else {
        alert("Incorrect code. Try again!");
    }
}

// Function to open the gift box
function openGift() {
    const giftBox = document.getElementById('gift-box');
    giftBox.style.transition = 'transform 1s';
    giftBox.style.transform = 'rotateY(180deg)';
    
    setTimeout(() => {
        giftBox.style.display = 'none';
    }, 1000);
}

// Function to display the message after opening the gift
function displayMessage() {
    document.getElementById('message').classList.remove('hidden');
}

// Event listener for the initial click on the gift box
document.getElementById('gift-box').addEventListener('click', firstClick);
