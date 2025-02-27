const toggleButton = document.getElementById("theme-switch");
const body = document.body;


const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
    body.classList.add("light-mode");
    toggleButton.textContent = "🌙";
}


toggleButton.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "dark");
    toggleButton.textContent = "🌙";
    } else {
    localStorage.setItem("theme", "light");
    toggleButton.textContent = "☀️";
    }
});
