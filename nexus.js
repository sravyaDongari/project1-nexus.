const forms = document.querySelector(".forms"),
    pwShowHide = document.querySelectorAll(".eye-icon"),
    links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach(password => {
            if (password.type === "password") {
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })

    })
})

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault(); // Preventing form submit
        forms.classList.toggle("show-signup");
    })
})

const loginForm = document.querySelector(".form.login form");

loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = this.querySelector(".input[type=email]").value;
    const password = this.querySelector(".password").value;

    // Check if the password is the first 6 letters of the email
    const firstSixLetters = email.slice(0, 6);
    if (password === firstSixLetters) {
        alert("Login successful!");
        // You can redirect or perform other actions for successful login
    } else {
        alert("Login failed.");
    }
});
