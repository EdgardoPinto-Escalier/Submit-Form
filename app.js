 var main = function() {
        $('form').submit(function() { //Here we use the .submit method
            var firstName = $('#first').val();
            var lastName = $('#last').val();
            var email = $('#email').val();
            var password = $("#password").val();
            if (firstName === "") {
                $('.first-name-error').text("Please enter your first name");
            }
            if (lastName === "") {
                $('.last-name-error').text("Please enter your last name");
            }
            if (email === "") {
                $('.email-error').text("Please enter your email address");
            }
            if (password === "") {
                $('.password-error').text("Please enter a password");
            }
            if (email === 'me@example.com') {
                $('.password-error').text("Someone already has that email. Try another?");
            }
            if (password.length < 8) {
                $('.password-error').text("Short passwords are easy to guess. Try one with at least 8 characters.");
            }
            return false;
        });
    };
    $(document).ready(main);
