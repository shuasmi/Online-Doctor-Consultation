/*
let bookAppoint = document.querySelector("#appointmentSubmit");

bookAppoint.addEventListener("click", (event) => {
    // Prevent form from submitting
    event.preventDefault();

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;

    // Name validation: not empty and at least 3 characters
    if (name === "") {
        alert("Please enter your name.");
        return false;
    }
    if (name.length < 3) {
        alert("Name must be at least 3 characters long.");
        return false;
    }

    // Email validation: not empty and correct format
    if (email === "") {
        alert("Please enter your email.");
        return false;
    }
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Date validation
    if (date === "") {
        alert("Please select a date.");
        return false;
    }

    // Time validation
    if (time === "") {
        alert("Please select a time.");
        return false;
    }

    
    
    // If all validations pass, you can submit the form here or perform other actions

     // Generate a 4-digit OTP
     var otp = Math.floor(1000 + Math.random() * 9000);

     // Store the OTP and email in localStorage
     localStorage.setItem("otp", otp);
     localStorage.setItem("email", email);
 
     // Prepare email parameters
     var templateParams = {
         to_email: email,
         otp: otp
     };
 
     // Send the OTP via EmailJS
     emailjs.send('service_g8ixveg', 'template_1u6si39', templateParams)
     .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
         window.location.href = "Verify.html";
     }, function(error) {
         console.log('FAILED...', error);
         alert("Failed to send OTP. Please try again.");
     });
});
*/

let bookAppoint = document.querySelector("#appointmentSubmit");

bookAppoint.addEventListener("click", (event) => {
    // Prevent form from submitting
    event.preventDefault();

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;

    // Name validation: not empty and at least 3 characters
    if (name === "") {
        alert("Please enter your name.");
        return false;
    }
    if (name.length < 3) {
        alert("Name must be at least 3 characters long.");
        return false;
    }

    // Email validation: not empty and correct format
    if (email === "") {
        alert("Please enter your email.");
        return false;
    }
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Date validation
    if (date === "") {
        alert("Please select a date.");
        return false;
    }

    // Time validation
    if (time === "") {
        alert("Please select a time.");
        return false;
    }

    // Check if the date and time are already booked
    var bookedAppointments = JSON.parse(localStorage.getItem("bookedAppointments")) || [];
    var isBooked = bookedAppointments.some(appointment => appointment.date === date && appointment.time === time);

    if (isBooked) {
        alert("This time slot is already booked. Please choose another time.");
        return false;
    }

    // Save the new appointment in local storage
    bookedAppointments.push({ date: date, time: time });
    localStorage.setItem("bookedAppointments", JSON.stringify(bookedAppointments));

    // Generate a 4-digit OTP
    var otp = Math.floor(1000 + Math.random() * 9000);

    // Store the OTP and email in localStorage
    localStorage.setItem("otp", otp);
    localStorage.setItem("email", email);

    // Prepare email parameters
    var templateParams = {
        to_email: email,
        otp: otp
    };

    // Send the OTP via EmailJS
    emailjs.send('service_g8ixveg', 'template_1u6si39', templateParams)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        window.location.href = "Verify.html";
    }, function(error) {
        console.log('FAILED...', error);
        alert("Failed to send OTP. Please try again.");
    });
});
