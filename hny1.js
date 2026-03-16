// Learn more toggle

document.querySelectorAll(".learnBtn").forEach(btn => {
    btn.addEventListener("click", () => {

        let details = btn.nextElementSibling;

        if (details.style.display === "block") {
            details.style.display = "none"
            btn.textContent = "Learn More"
        }
        else {
            details.style.display = "block"
            btn.textContent = "Hide"
        }

    })
})



// Mood generator

const moods = [
    "Take a short walk outside ☀️",
    "Talk to a friend 💬",
    "Exercise for 10 minutes 🏃",
    "Listen to music 🎧",
    "Finish a small task ✔️"
]

document.getElementById("moodBtn").onclick = function () {

    let random = moods[Math.floor(Math.random() * moods.length)]

    document.getElementById("moodText").textContent = random

}



// Hormone filter

const filters = document.querySelectorAll(".filter")

filters.forEach(button => {

    button.onclick = function () {

        let type = this.dataset.hormone

        document.querySelectorAll(".hormone").forEach(card => {

            if (type === "all" || card.classList.contains(type))
                card.style.display = "block"
            else
                card.style.display = "none"

        })

    }

})



// Dark mode

document.getElementById("modeToggle").onclick = function () {

    document.body.classList.toggle("dark")

}



// Image zoom

document.querySelectorAll("article img").forEach(img => {

    img.onclick = function () {

        if (img.style.transform === "scale(1.5)")
            img.style.transform = "scale(1)"
        else
            img.style.transform = "scale(1.5)"

    }

})



// Form submit

document.getElementById("form").addEventListener("submit", function (e) {

    e.preventDefault()

    alert("Thank you for joining Harmony!")

})