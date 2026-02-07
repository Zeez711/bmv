const messages = [
  "No My Ghala😼",
" the kitten said mewooo… don’t do this to your Ziad! 😿",
  "My Gahla… are you sure? 😔",
  "My Ghala pleaseee 💗",
  "What if I buy you food? 😋",
  "Tiny kitten is crying now 😭🐾",
  "Ok ok… last chance, My Ghala 😔",
  "MEWOOO PLEASEEE 😾💘",
  "I’ll be extra sad… mewooo 😿",
  "Just kidding — say yes, My Ghala ❤️🐾"
];


let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}