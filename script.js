// Активний колір для малювання
let currentColor = 'black';
let isDrawing = false; // Відстежує, чи натиснута клавіша миші

// Створення початкових значень кольорів
const defaultColors = [
  "#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff9900", 
  "#9900ff", "#00ffff", "#ff00ff", "#654321", "#808080", 
  "#000000", "#ffffff"
];

// Встановлення початкових значень кольорів
document.querySelectorAll('.custom-color').forEach((customColorInput, index) => {
  customColorInput.value = defaultColors[index];
});

// Додавання підтримки для власних кольорів
document.querySelectorAll('.custom-color').forEach(customColorInput => {
  customColorInput.addEventListener('input', () => {
    currentColor = customColorInput.value;
  });

  // Змінювати активний колір при кліку
  customColorInput.addEventListener('click', () => {
    currentColor = customColorInput.value;
  });
});

// Створення сітки пікселів
const pixelGrid = document.querySelector('.pixel-grid');
for (let i = 0; i < 100 * 70; i++) {
  const pixel = document.createElement('div');
  pixel.classList.add('pixel');

  // Додавання події для малювання
  pixel.addEventListener('mousedown', () => {
    isDrawing = true;
    pixel.style.backgroundColor = currentColor;
  });

  // Малювання при переміщенні миші
  pixel.addEventListener('mouseover', () => {
    if (isDrawing) {
      pixel.style.backgroundColor = currentColor;
    }
  });

  pixelGrid.appendChild(pixel);
}

// Відпускання миші завершує малювання
document.addEventListener('mouseup', () => {
  isDrawing = false;
});

// Додавання події для скидання налаштувань кольорів
document.getElementById('resetButton').addEventListener('click', () => {
  document.querySelectorAll('.custom-color').forEach((customColorInput, index) => {
    customColorInput.value = defaultColors[index];
  });
});
