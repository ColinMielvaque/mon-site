let score = 0;
const btn = document.getElementById("btn");
const scoreText = document.getElementById("score");

btn.addEventListener("click", () => {
    score++;
    scoreText.textContent = score;
});
