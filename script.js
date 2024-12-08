// �������� ���� ��� ���������
let currentColor = 'black';
let isDrawing = false; // ³������, �� ��������� ������ ����

// ��������� ���������� ������� �������
const defaultColors = [
  "#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff9900", 
  "#9900ff", "#00ffff", "#ff00ff", "#654321", "#808080", 
  "#000000", "#ffffff"
];

// ������������ ���������� ������� �������
document.querySelectorAll('.custom-color').forEach((customColorInput, index) => {
  customColorInput.value = defaultColors[index];
});

// ��������� �������� ��� ������� �������
document.querySelectorAll('.custom-color').forEach(customColorInput => {
  customColorInput.addEventListener('input', () => {
    currentColor = customColorInput.value;
  });

  // �������� �������� ���� ��� ����
  customColorInput.addEventListener('click', () => {
    currentColor = customColorInput.value;
  });
});

// ��������� ���� ������
const pixelGrid = document.querySelector('.pixel-grid');
for (let i = 0; i < 100 * 70; i++) {
  const pixel = document.createElement('div');
  pixel.classList.add('pixel');

  // ��������� ��䳿 ��� ���������
  pixel.addEventListener('mousedown', () => {
    isDrawing = true;
    pixel.style.backgroundColor = currentColor;
  });

  // ��������� ��� ��������� ����
  pixel.addEventListener('mouseover', () => {
    if (isDrawing) {
      pixel.style.backgroundColor = currentColor;
    }
  });

  pixelGrid.appendChild(pixel);
}

// ³��������� ���� ������� ���������
document.addEventListener('mouseup', () => {
  isDrawing = false;
});

// ��������� ��䳿 ��� �������� ����������� �������
document.getElementById('resetButton').addEventListener('click', () => {
  document.querySelectorAll('.custom-color').forEach((customColorInput, index) => {
    customColorInput.value = defaultColors[index];
  });
});
