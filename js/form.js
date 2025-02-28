document.querySelector("form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    console.log("FormData:", formData); // Перевіряємо дані форми
    const urlParams = new URLSearchParams(formData).toString();
    console.log("URL Params:", urlParams); // Перевіряємо, що відправляється

    try {
        const response = await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: urlParams,
        });

        console.log("Response Status:", response.status); // Дивимось статус відповіді

        if (response.ok) {
            alert("Message sent successfully!");
            form.reset();
        } else {
            alert("Error sending message.");
        }
    } catch (error) {
        console.error("Fetch error:", error); // Виводимо помилки у консоль
        alert("Something went wrong. Please try again.");
    }
});
