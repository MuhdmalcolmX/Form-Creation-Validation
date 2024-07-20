document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    const form = document.getElementById ('registration-form');

    const feedbackDiv = document.getElementById ('form-feedback');

    //function loaded () {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevents the default form submission
            // Custom validation and submission logic here

            var username = document.getElementById('username').value.trim();
            var email = document.getElementById('email').value.trim();
            var password = document.getElementById('password').value.trim();

            var isValid = true;
            var messages = ["messages", "push", "isValid"];


        });
    //}

});








  

