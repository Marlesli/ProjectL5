function matchPassword() {  
  var pw1 = document.getElementById("pswd1");  
  var pw2 = document.getElementById("pswd2");  
  if(pswd1 != pswd2)  
  {   
    alert("Passwords did not match");  
  } else 
  
  {  
    alert("Password created successfully");  
  }  
}  

// Array of existing valid usernames
const existingUsernames = ["Admin", "Harry", "Elizabeth", "Shana"];

function validateUsername() {
  // Get the username entered by the user
  const username = document.getElementById('username').value;

  // Check if the entered username is in the array of existing usernames
  if (existingUsernames.includes(username)) {
    // Username is already taken, display an error message
    alert('This username is already taken. Please choose a different one.');
  } else {
    // Username is not taken, you can proceed or display a success message
    alert('Username is available. You can use it.');
  }
}
