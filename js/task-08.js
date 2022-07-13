const formEl = document.querySelector('.login-form')

formEl.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
  event.preventDefault()
  const {
    elements: { email, password }
  } = event.currentTarget
  
  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!")
    return
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  formEl.reset()
}


