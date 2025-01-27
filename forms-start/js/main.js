function showForm(formNode) {

  const elements = formNode;

  const data = Array.from(elements)
    .filter( (item) => !!item.name )
    .map(element => {
      const { name, value } = element;
      return { name, value }
  });
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  showForm(form)

}

const form = document.getElementById('form');
form.addEventListener('submit', handleFormSubmit);
