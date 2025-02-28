form.addEventListener("submit", function (e) {
    e.preventDefault();
  
    if (!isValidEmail(userEmailField.value)) {
      userEmailField.classList.add("error");
      return;
    }
  
    const formData = new FormData(form);
  
    launchBtn.setAttribute("disabled", true);
  
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        showGooseAnim();
        setTimeout(() => {
          location.reload();
        }, 3000);
      })
      .catch((error) => console.log("Sending form failed"));
  });