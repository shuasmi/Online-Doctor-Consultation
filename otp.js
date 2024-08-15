document.getElementById('otpSubmit').addEventListener('click', function() {
    const userOtp = document.getElementById('otpNum').value;
    const storedOtp = localStorage.getItem('otp');

    if (userOtp === storedOtp) {
        // Remove OTP and email from local storage
        localStorage.removeItem('otp');
        //localStorage.removeItem('email');
      window.location.href = 'success.html';
    } else {
      alert('Incorrect OTP. Please try again.');
    }
  });