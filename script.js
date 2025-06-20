let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  e.prompt(); // Esto mostrará el diálogo de instalación
});
