function factorial(n) {
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }

    return fact;
}

function calculate() {

    let lambda = Number(document.getElementById("lambda").value);
    let x = Number(document.getElementById("x").value);
    let sent = Number(document.getElementById("sent").value);
    let received = Number(document.getElementById("received").value);

    if (lambda < 0 || x < 0 || sent <= 0 || received < 0) {
        alert("Please enter valid positive values.");
        return;
    }

    if (received > sent) {
        alert("Packets Received cannot be greater than Packets Sent.");
        return;
    }

    let probability =
        (Math.exp(-lambda) * Math.pow(lambda, x)) / factorial(x);

    let loss = sent - received;

    let success = (received / sent) * 100;

    let failure = (loss / sent) * 100;

    document.getElementById("probability").innerHTML =
    probability.toFixed(4);

document.getElementById("loss").innerHTML =
    loss;

document.getElementById("success").innerHTML =
    success.toFixed(2) + "%";

document.getElementById("failure").innerHTML =
    failure.toFixed(2) + "%";
    localStorage.setItem("sent", sent);
localStorage.setItem("received", received);
localStorage.setItem("loss", loss);

localStorage.setItem("success", success);
localStorage.setItem("failure", failure);
localStorage.setItem("probability", probability);

window.location.href = "dashboard.html";
}