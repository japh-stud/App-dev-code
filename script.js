const messageButton = document.getElementById("messageButton");
const message = document.getElementById("message");

messageButton.addEventListener("click", function () {
    message.innerHTML =
        "Hello! Welcome to Japhet Dipanyo's student profile. Thank you for visiting!" +
        "<p><strong>Date & Time:</strong></p>" +
        "<p>" + new Date().toLocaleString() + "</p>";

});