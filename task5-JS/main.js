

// Use e.preventDefault() to stop the page from refreshing when submitting the form.

// Create an empty div with an id = "message" at the top of your HTML.

//     Use.innerHTML to insert the welcome message.


// Style the message with some CSS(background, padding, border - radius).

const firstName = document.getElementById("fname");
const surname = document.getElementById('sname');
const email = document.getElementById('email');
const password = document.getElementById('pass');
const gender = document.getElementById('gender');
const confirmPass = document.getElementById('conpass');
const btn = document.getElementById('btn');
const message = document.getElementById('message')


btn.addEventListener("click", function (e) {
    e.preventDefault();


    message.innerHTML = `
    <div class="card">
      <h2>Welcome, ${firstName.value} ${surname.value}!</h2>
      <p>Email: ${email.value}</p>
      <p>Gender: ${gender.value}</p>
      <p> successfully created.</p>
    </div>
  `;
});







