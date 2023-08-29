const textArea = document.getElementById("message");
const charCount = document.getElementById("charCount");
const maxChars = 500; // Set your desired maximum character limit

textArea.addEventListener("input", () => {
  const currentChars = textArea.value.length;
  charCount.textContent = `${currentChars} / ${maxChars}`;

  if (currentChars > maxChars) {
    textArea.value = textArea.value.slice(0, maxChars); // Truncate input
  }
});

document.getElementById("form").addEventListener("submit", function (e) {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  if (name.value.trim() === "") {
    name.style.borderColor = "red";
    e.preventDefault(); // Prevent form submission
  }

  if (email.value.trim() === "") {
    email.style.borderColor = "red";
    e.preventDefault(); // Prevent form submission
  } else if (!isValidEmail(email.value)) {
    alert("Invalid email format");
    email.style.borderColor = "red";

    e.preventDefault(); // Prevent form submission
  }

  if (message.value.trim() === "") {
    message.borderColor = "red";
    e.preventDefault();
  } else if (message.value.trim() > 301) {
    alert("Message Field Cannot Be more than 300 Characters");
    message.borderColor = "red";

    e.preventDefault();
  }
});

function isValidEmail(email) {
  // Use a regular expression or other validation method to check email format
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
