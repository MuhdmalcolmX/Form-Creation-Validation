document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");

    const form = document.getElementById ('registration-form');

    const feedbackDiv = document.getElementById ('form-feedback');

    //function loaded () {
        // form.addEventListener('submit', (event) {
        //     event.preventDefault(); // Prevents the default form submission
        //     // Custom validation and submission logic here

        //     var username = document.getElementById('username').value.trim();
        //     var email = document.getElementById('email').value.trim();
        //     var password = document.getElementById('password').value.trim();

        //     var isValid = true;
        //     var messages = ["messages", "push", "isValid"];

        //     if (username < 3) {
        //         isValid = true
        //     } else {

        //     }


        // });
    //}

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
  
        // Validate username
        const username = document.getElementById('username').value.trim();
        const usernameError = document.getElementById('usernameError');

        const email = document.getElementById('email').value.trim();
        const emailError = document.getElementById('emailError');

        const password = document.getElementById('password').value.trim();
        const passwordError = document.getElementById('passwordError');

        var isValid = true;
        //var messages = ["messages", "push", "isValid"];
        var messages = ['Username must be at least 3 characters long.', 'Please enter a valid email address.', 'Password must be at least 8 characters long.'];

        // Validate username
        if (username.length < 3) {
            isValid = false;
            feedbackDiv.textContent = messages[0];
          return;
        } else {
            feedbackDiv.textContent = '';
        }
  
        // Validate email
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
            isValid = false;
            feedbackDiv.textContent = messages[1];
          return;
        } else {
            feedbackDiv.textContent = '';
        }
  
        // Validate password
        if (password.length < 8) {
            isValid = false;
            feedbackDiv.textContent = messages[2];
          return;
        } else {
            feedbackDiv.textContent = '';
        }


        if (isValid = false) {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545";
            feedbackDiv.style.display = "block";
            
        } else {
            feedbackDiv.textContent = 'Registration successful';
            feedbackDiv.style.color = "#28a745";
            feedbackDiv.style.display = "block";
        }
  
        // If all validations pass, submit the form
        form.submit();
      });

});








  

