// TODO: When the DOM loads, set up event listeners for the registration form
document.addEventListener("DOMContentLoaded", function (event) {

})
// TODO: Create a function to handle the registration form submission
document.addEventListener("submit", async function (event) {
    event.preventDefault()

    let emailForm = document.getElementById("email");
    let cityInput = document.getElementById("city");
    let zip = document.getElementById("zip");
    let state = document.getElementById("state");
    let address = document.getElementById("address");
    let apt = document.getElementById("apartment")
    let pass = document.getElementById("password")

    console.log(emailForm.value, cityInput.value, zip.value, state.value, address.value,)

    const newuser = {email: emailForm.value, password: pass.value}
    console.log(newuser)


    try {
        const response = await fetch('/api/users/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newuser)
        });
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const user = await response.json();
        console.log('New user added:', user);
        
        
      } catch (error) {
        console.error('Error adding user:', error);
      }


    // fetch("users.json")
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);

            
    //     })
})

// 1. Prevent the default form submission
// 2. Gather all form data into an object
// 3. Validate form data (all required fields, email format, etc.)
// 4. Send the data to your API using fetch() with POST method
// 5. Handle the response:
//    - If successful, store user data in localStorage and redirect to home page
//    - If error, display appropriate error message to user

// TODO: Create helper functions for form validation
