document.addEventListener("DOMContentLoaded", (event) => {
    // console.log("DOM fully loaded and parsed");
    const form = document.getElementById ('registration-form');

    const feedbackDiv = document.getElementById ('form-feedback');

  });

function loaded() {
    form.addEventListener("submit", function(event) {
            event.preventDefault();
            // this.id will show "form"
            alert(this.id);
            alertGrade(this.id);},
            false);
}