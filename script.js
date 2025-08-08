alert("Hello User! Welcome to JavaScript");

document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector("button");
    button.addEventListener("click", function() {
        document.querySelector("h1").textContent = "I was manipulated by JavaScript!";
        button.textContent = "Good Job!";
        button.style.backgroundColor = "#B30086";
        button.style.color = "white";
        button.style.fontSize = "15px";
        button.style.padding = "10px 20px";
        button.style.border = "none";
        button.style.borderRadius = "5px";
        button.style.transition = "all 0.4s ease"; 
    });

});