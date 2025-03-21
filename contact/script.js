function showSuccessMessage(event) {
    event.preventDefault();

    // Basic form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name && email && subject && message) {
        document.getElementById('success-message').style.display = 'block';
        document.getElementById('contactForm').reset();

        // Hide success message after 5 seconds
        setTimeout(function () {
            document.getElementById('success-message').style.display = 'none';
        }, 5000);
    }
}
    </script >
