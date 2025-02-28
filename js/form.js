document.querySelector("form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    try {
        const response = await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        });

        if (response.ok) {
            alert("Message sent successfully!");
            form.reset();
        } else {
            alert("Error sending message.");
        }
    } catch (error) {
        alert("Something went wrong. Please try again.");
    }
});
