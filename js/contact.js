(function() {

    let form = document.querySelector('#contact-form');
    let emailInput = document.querySelector('#contact-email');
    let passwordInput = document.querySelector('#contact-message');

    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);
    
    // This will be called by both validateEmail and validatePassword
    function showErrorMessage(input, message) {

	console.log('showErrorMessage called for:', input.id);

	// input is needed as an arg because we're appending to its parent
	let container = input.parentElement; // The .input-wrapper
	
	// Check if there is an existing eror and remove existing error
	let error = container.querySelector('.error-message');
	if (error) {
	    container.removeChild(error);
	}

	// Add  error message
	if (message) {
	    let error = document.createElement('div');
	    error.classList.add('error-message');
	    error.innerText = message;
	    container.appendChild(error);
	}
    }
    
    function validateEmail() {
	
	let value = emailInput.value;

	if (!value) {
	    showErrorMessage(emailInput, 'I do need your email to get back to you.');
	    return false;
	}

	if (value.indexOf('@') === -1) {
	    showErrorMessage(emailInput, 'Heya. Please enter a real email address :(');
	    return false;
	}

	if (value.indexOf('.') === -1) {
	    showErrorMessage(emailInput, 'Heya. Please enter a real email address :(');
	    return false;
	}

	showErrorMessage(emailInput, null);
	return true;
    }
    
    function validatePassword() {
	
	let value = passwordInput.value;

	if (!value) {
	    showErrorMessage(passwordInput, 'Forget something? :)');
	    return false;
	}

	if (value.length < 8) {
	    showErrorMessage(passwordInput, 'The message needs to be at least 8 characters long.');
	    return false;
	}
	
	showErrorMessage(passwordInput, null);
	return true;
    }

    function validateForm() {
	let isValidEmail = validateEmail();
	let isValidPassword = validatePassword();
	return isValidEmail && isValidPassword;
    }
    
    form.addEventListener('submit', (event) => {
	
	event.preventDefault(); // Do not submit to the server

	if (validateForm()) {
	    alert('Success!');
	}
    })
})();
