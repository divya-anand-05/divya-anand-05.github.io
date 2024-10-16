document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevents the default form submission

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Here you can add code to handle form submission, e.g., sending an email
        alert(`Thank you for your message, ${name}! We'll get back to you at ${email}.`);
       
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                // Remove 'active' class from all links
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
        
                // Add 'active' class to the clicked link
                this.classList.add('active');
            });
        });
         
        // Optionally, clear the form
        form.reset();
    });
});
