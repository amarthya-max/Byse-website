document.getElementById('contact_form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);
    const resultDiv = document.getElementById('result');

    fetch('send_email.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        resultDiv.innerHTML = data; // Display the response message
    })
    .catch(error => {
        resultDiv.innerHTML = 'There was an error submitting the form. Please try again.';
    });
});
