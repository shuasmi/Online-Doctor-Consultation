function generateAppointmentNumber() {
  return Math.floor(100000 + Math.random() * 900000);
}

// Generate the appointment number and save it to a variable
const appointmentNumber = generateAppointmentNumber();

// Display the appointment number on the page
document.getElementById('appointment-number').innerText = appointmentNumber;

// Save the appointment number to local storage
localStorage.setItem('appointmentNumber', appointmentNumber);

// Redirect to home page
let homeBtn = document.querySelector("#homeBtn");

homeBtn.addEventListener("click", (event) => {
  window.location.href = "index.html";
});
