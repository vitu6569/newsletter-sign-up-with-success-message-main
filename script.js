const main = document.getElementById("signUpContainer")
const msg = document.getElementById("acknowledgments")
const body = document.getElementById("body")

function emailGetValue() {
const email = document.getElementById("emailSignUp");
var emailValue = email.value;

const emailUser = document.getElementById("emailUser");

if (emailValue) {
    main.classList.add("hidden")
    emailUser.innerHTML = emailValue;
    msg.classList.remove("hidden");
    body.style.background = "none"
  } else {
    alert("Please enter your email address.");
  }
}

function closeMSG() {
    location.reload();
}