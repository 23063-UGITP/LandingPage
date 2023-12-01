document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('subscribe-email').value;

    var status = document.getElementById('subscription-status');

    
    status.textContent = "You have successfully subscribed to our newsletter with the email: " + email;
    status.style.color = "green";
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    var status = document.getElementById('contact-status');

  
    status.textContent = "Thank you " + name + " for sharing your details. We will reach out to you on your mail id: " + email;
    status.style.color = "green";
});
