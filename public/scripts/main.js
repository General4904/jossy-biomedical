// Script
console.log("Hello world");

// Form validation
const form = document.getElementById("form");

if (form) {
  const firstname = document.getElementById("firstname");
  const lastname = document.getElementById("lastname");
  const middlename = document.getElementById("middlename");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;

    const lastnameValue = lastname.value.trim();
    const firstnameValue = firstname.value.trim();
    const middlenameValue = middlename.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();

    //   Name valdation
    if (
      firstnameValue === "" ||
      lastnameValue === "" ||
      middlenameValue === "" ||
      emailValue === "" ||
      phoneValue === ""
    ) {
      firstname.style.border = "1px solid red";
      lastname.style.border = "1px solid red";
      middlename.style.border = "1px solid red";
      email.style.border = "1px solid red";
      phone.style.border = "1px solid red";
      valid = false;
      firstname.focus();
    }

    if (valid) {
      fetch("/app/registerApplicant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: firstnameValue,
          lastname: lastnameValue,
          middlename: middlenameValue,
          email: emailValue,
          phone: phoneValue,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            window.location.href = "./registrationResponse.html?status=success";
          } else {
            window.location.href = "./registrationResponse.html?status=error";
          }
        })
        .catch((error) => {
          console.error(error);
          window.location.href = "./registrationResponse.html?status=error";
        });
    }
  });
}

// Admin page access
let logoClicks = 0;
const logo = document.getElementById("logo");

logo.addEventListener("click", () => {
  logoClicks++;

  if (logoClicks === 3) {
    window.location.href = "/admin.html";
  }

  setTimeout(() => {
    logoClicks = 0;
  }, 3000);
});
