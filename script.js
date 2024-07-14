document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    if(name && email && message) {
        document.getElementById('formMessage').textContent = 'Thank you for your message, ' + name + '!';
    } else {
        document.getElementById('formMessage').textContent = 'Please fill out all fields.';
        document.getElementById('formMessage').style.color = 'red';
    }
});

document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var email = document.getElementById('newsletterEmail').value;
    
    if(email) {
        document.getElementById('newsletterMessage').textContent = 'Thank you for subscribing!';
    } else {
        document.getElementById('newsletterMessage').textContent = 'Please enter a valid email address.';
        document.getElementById('newsletterMessage').style.color = 'red';
    }
});
