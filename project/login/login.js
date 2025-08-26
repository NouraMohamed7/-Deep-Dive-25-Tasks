const form = document.getElementById("form");
const email = document.getElementById("email");
const username = document.getElementById("name");
const pass = document.getElementById("pass");
const cPass = document.getElementById("c-pass");
const message = document.getElementById("message");

async function LoginUser(email, pass, username) {
    const res = await fetch("https://test-api-v1-vert.vercel.app/v1/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email.value,
            username: username.value,
            password: pass.value,
        })
    });

    if (!res.ok) {
        return  "An error occurred" ;
    }
    const data = await res.json();
    return data;
}

form.addEventListener("submit", async function (e) {
    if (pass.value !== cPass.value) {
        message.textContent = "Passwords do not match.";
        message.style.color = "red";
        return;
    }

    const login = await LoginUser(email, pass, username);

    if (login.error) {
        message.textContent = login.error;
        message.style.color = "red";
    } else {
        message.textContent = "Login successful!";
        message.style.color = "green";
        console.log(login);
    }
});
