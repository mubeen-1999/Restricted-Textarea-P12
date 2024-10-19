const userInput = document.getElementById('userInput');
const charCount = document.getElementById('charCount');
const maxchars = 100;

userInput.addEventListener('input', function(){

    const currlength = userInput.value.length;
    const maxlength = userInput.getAttribute('maxlength');

    charCount.textContent = currlength + ' / ' + maxlength;

    if (currlength === parseInt(maxlength)) {
        userInput.classList.add('limit-reached'); // Add class when limit is reached
        charCount.classList.add('limit-reached'); // Change span color when limit is reached
    } else {
        userInput.classList.remove('limit-reached'); // Remove class when below limit
        charCount.classList.remove('limit-reached'); // Reset span color when below limit
    }
        
    


})