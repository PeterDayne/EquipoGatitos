// auth.js

document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

  if (registerForm) {
    registerForm.addEventListener("submit", async function (event) {
      event.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;

      try {
        const response = await fetch("https://reqres.in/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "reqres-free-v1"
          },
          body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
          alert("¡Registro exitoso! ID: " + data.id + ", Token: " + data.token);
        } else {
          alert("Error en el registro: " + (data.error || "Verifica tus datos."));
        }
      } catch (error) {
        alert("Error de conexión.");
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", async function (event) {
      event.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;

      try {
        const response = await fetch("https://reqres.in/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "reqres-free-v1"
          },
          body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
          alert("¡Inicio de sesión exitoso! Token: " + data.token);
        } else {
          alert("Error al iniciar sesión: " + (data.error || "Verifica tus datos."));
        }
      } catch (error) {
        alert("Error de conexión.");
      }
    });
  }
});
