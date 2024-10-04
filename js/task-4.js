const form = document.querySelector("form");

const handleSubmit = (event) => {
  event.preventDefault();

  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  } else {
    const userData = {
      email,
      password,
    };

    console.log(userData);

    form.reset();
  }
};

form.addEventListener("submit", handleSubmit);
