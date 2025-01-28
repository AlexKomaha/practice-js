function showForm(formNode) {

  // const elements = formNode;

  // const data = Array.from(elements)
  //   .filter( (item) => !!item.name )
  //   .map(element => {
  //     const { name, type } = element;
  //     const value = type === 'checkbox' ? element.checked : element.value;

  //     return { name, value }
  // });

  return new FormData(formNode)
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  showForm(form)

  const data = Array.from(showForm(form).entries())

  Email.send({
    Host : "smtp.mailendo.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : `Your name is: ${data[0][1]}; <br/>
    And age: ${data[2][1]}`
  }).then(
  message => alert(message)
  );
}

const form = document.getElementById('form');
form.addEventListener('submit', handleFormSubmit);

// const test = document.querySelector('.test');
// const test21 = test.checked ? "Выбран" : "Не выбран"
// console.log(test21);
