/* ================= AUTH MODAL ================= */

const authModal = document.getElementById("authModal");

const loginForm = document.getElementById("loginForm");

const registerForm = document.getElementById("registerForm");


function openLogin() {

    authModal.classList.add("show");

    showLogin();

}


function openRegister() {

    authModal.classList.add("show");

    showRegister();

}


function closeAuth() {

    authModal.classList.remove("show");

}


function showLogin() {

    loginForm.classList.add("active");

    registerForm.classList.remove("active");

}


function showRegister() {

    registerForm.classList.add("active");

    loginForm.classList.remove("active");

}


/* ================= PASSWORD ================= */

function togglePassword(inputId) {

    const input = document.getElementById(inputId);

    if (input.type === "password") {

        input.type = "text";

    } else {

        input.type = "password";

    }

}


/* ================= LOGIN ================= */

function loginUser() {

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;
    const accountType = document.querySelector(
        'input[name="accountType"]:checked'
    );

    // Basic validation
    if (email === "" || password === "") {
        alert("Please enter your email and password.");
        return;
    }

    if (!accountType) {
        alert("Please select Student or Teacher.");
        return;
    }

    const selectedType = accountType.value;

    // Save login information
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userType", selectedType);
    localStorage.setItem("isLoggedIn", "true");

    // Redirect according to account type
    if (selectedType === "student") {

        window.location.href = "dashboard.html";

    } else if (selectedType === "teacher") {

        window.location.href = "teacher-dashboard.html";

    }

}


/* ================= REGISTER ================= */

function registerUser() {

    const name =
        document.getElementById("registerName").value.trim();

    const email =
        document.getElementById("registerEmail").value.trim();

    const password =
        document.getElementById("registerPassword").value.trim();


    if (name === "" || email === "" || password === "") {

        alert("Please fill all required fields.");

        return;

    }


    alert(
        "Registration UI is working!\n\nDatabase connection will be added later."
    );

}


/* ================= EXAM ================= */

function startExam() {

    alert(
        "Exam module will be connected in the next step."
    );

}


function viewQuestions() {

    alert(
        "Question Bank will be connected in the next step."
    );

}


/* ================= CLOSE ON OUTSIDE CLICK ================= */

window.addEventListener("click", function(event) {

    if (event.target === authModal) {

        closeAuth();

    }

});


/* ================= ESC KEY ================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeAuth();

    }

});