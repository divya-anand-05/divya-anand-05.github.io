//show the button when scrolling down
window.addEventListener("scroll",()=>{
    const button = document.getElementById("backToTop");
    if(window.scrollY>200){
        button.style.display = "flex";

    }
    else {
        button.style.display = "none";
    }
});
//scroll smoothly to the top when button is clicked
document.getElementById("backToTop").addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});
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


//welcome transition




const welcomeText = document.getElementById('welcome-text');
const letters = welcomeText.textContent.split('');
welcomeText.innerHTML = ''; // Clear the original text

letters.forEach((letter, index) => {
    const span = document.createElement('span');
    span.textContent = letter;
    welcomeText.appendChild(span);

    // Add class to make space for spaces in text
    if (letter === ' ') {
        span.style.display = 'inline-block'; // Keep space visible
        span.style.width = '0.5em'; // Adjust width for spacing
    } else {
        // Delay each letter's transition
        setTimeout(() => {
            span.classList.add('show');
        }, index * 200); // Adjust the delay time as needed
    }
});

//menu bar nav list

const mobileMenu = document.getElementById('mobile-menu');
const menuList = document.querySelector('nav ul');
const menuItems = document.querySelectorAll('nav ul li');

mobileMenu.addEventListener('click', () => {
    menuList.classList.toggle('show');

    if (menuList.classList.contains('show')) {
        menuItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1'; // Show item
                item.style.transform = 'translateY(0)'; // Move to original position
            }, index * 100); // Delay each item by 100ms
        });
    } else {
        menuItems.forEach((item) => {
            item.style.opacity = '0'; // Hide item
            item.style.transform = 'translateY(-10px)'; // Move slightly up
        });
    }
});

