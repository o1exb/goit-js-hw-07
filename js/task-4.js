document
  .querySelector('.login-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    let form = event.target;
    let email = form.elements.email.value.trim();
    let password = form.elements.password.value.trim();

    if (!email || !password) {
      alert('All form fields must be filled in');
      return;
    }

    let formData = {
      email: email,
      password: password,
    };

    console.log(formData);
    form.reset();
  });
