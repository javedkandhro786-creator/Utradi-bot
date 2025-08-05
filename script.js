
function getSignal() {
    const signal = Math.random() > 0.5 ? "BUY" : "SELL";
    document.getElementById("signal").textContent = signal;
}

function toggleTheme() {
    document.body.classList.toggle("light-mode");
}
