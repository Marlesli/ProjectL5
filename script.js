function checkPassword(Form) { 
    password1 = Form.password1.value; 
    password2 = Form.password2.value; 

    // If password not entered 
    if (password1 == '') 
        alert ("Please enter Password"); 

    // If confirm password not entered 
    else if (password2 == '') 
        alert ("Please enter confirm password"); 

    // return False if unmatched.     
    else if (password1 != password2) { 
        alert ("Passwords did not match: Please try again...") 
        return false; 
    } 

    // If same return True if match. 
    else{ 
        alert("Passwords Match: You may proceed") 
        return true; 
    } 
} 


const existingUsernames = ["Admin", "Harry", "Elizabeth", "Shana"];

function isUsernameAvailable(username) {
  return !existingUsernames.includes(username);
}

function checkUsernameAvailability() {
  const usernameToCheck = document.getElementById('username').value;
  const message = document.getElementById('availabilityMessage');

  if (isUsernameAvailable(usernameToCheck)) {
    message.textContent = `Username "${usernameToCheck}" is available.`;
  } else {
    message.textContent = `Username "${usernameToCheck}" is already taken.`;
  }
}

