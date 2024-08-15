document.addEventListener("DOMContentLoaded", function() {
    let home = document.querySelector("#home");
    let appointment = document.querySelector("#book");
    let about = document.querySelector("#about");
    
    let joinAppointment=document.querySelector("#joinAppointment");

    home.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = "index.html";
    });

    appointment.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = "appointment.html";
    });

    about.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = "about.html";
    });

    

    joinAppointment.addEventListener("click",(event)=>{
      event.preventDefault();
      window.location.href="joinAppointment.html";
    });

   
  });