const adviceId = document.querySelector(".advice-number")
const adviceText = document.querySelector(".advice-text")
const dice = document.querySelector(".dice")

function fetchAdviceData() {
    fetch("https://api.adviceslip.com/advice")
        .then(res => res.json())
        .then(data => {
            adviceId.textContent = data.slip.id
            adviceText.textContent = data.slip.advice
        })
}

window.addEventListener("load", () => {
    fetchAdviceData()
})

dice.addEventListener("click", () => {
    fetchAdviceData()
})
