function generateNumber() {
    const number = Math.floor(Math.random() * 100) + 1;
    document.getElementById('result').textContent = `Your number is: ${number}`;
}
