document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission

        var form = e.target;
        var data = new FormData(form);

        fetch('https://script.google.com/macros/s/AKfycbyWCeH_dxp8M4jduwsH5tG_NJcN9n_NE4Ad6H99o5l-1ADwUnxWZzsx8ExclO_Xm5-rAQ/exec', {
            method: 'POST',
            body: data
        }).then(response => response.text())
        .then(data => {
            console.log(data);
            alert('Your message has been sent successfully!');
            form.reset(); // Reset the form after submission
        }).catch(error => {
            console.error(error);
            alert('There was an error sending your message.');
        });
    });
});
