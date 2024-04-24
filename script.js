const radioButtons = document.querySelectorAll('.radio-container input[type="radio"]');

radioButtons.forEach(radioButton => {
  radioButton.addEventListener('click', function() {
    const container = this.parentElement;
    container.classList.toggle('active');
  });
});


const colorBox = document.getElementById('colorBox');
let colorIndex = 0;

colorBox.addEventListener('click', function() {
  colorIndex = (colorIndex + 1) % 4;
  colorBox.className = `color-box color${colorIndex + 1}`;
  colorBox.querySelector('.right-sign').style.display = 'block';
});

const decreaseButton = document.getElementById('decrease');
const increaseButton = document.getElementById('increase');
const amountElement = document.getElementById('amount');

let amount = 1;

// Function to update amount and display
function updateAmount(newAmount) {
  amount = newAmount;
  amountElement.textContent = amount;
}

// Event listener for decrease button
decreaseButton.addEventListener('click', function () {
  if (amount > 1) {
    updateAmount(amount - 1);
  }
});

// Event listener for increase button
increaseButton.addEventListener('click', function () {
  updateAmount(amount + 1);
});