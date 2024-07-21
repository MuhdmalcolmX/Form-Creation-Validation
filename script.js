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
            isValid
            feedbackDiv.textContent = 'Username must be at least 3 characters long.';
          return;
        } else {
            feedbackDiv.textContent = '';
        }
  
        // Validate email
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
            feedbackDiv.textContent = 'Please enter a valid email address.';
          return;
        } else {
            feedbackDiv.textContent = '';
        }
  
        // Validate password
        if (password < 8) {
            feedbackDiv.textContent = 'Password must be at least 8 characters long.';
          return;
        } else {
            feedbackDiv.textContent = '';
        }
  
        // If all validations pass, submit the form
        form.submit();
      });

});








  

