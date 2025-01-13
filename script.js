 const inputField = document.getElementById('nameField');
      
inputField.addEventListener('input', function () {
  // Get the width of the input field and its content
  const inputWidth = inputField.offsetWidth;
  const scrollWidth = inputField.scrollWidth;

  // If the content exceeds the input field's width, stop further input
  if (scrollWidth > inputWidth) {
       inputField.value = inputField.value.substring(0, inputField.value.length - 1); // Prevent adding more characters
      // alert('Text limit reached!');
  }
});


let links = document.querySelector(".login-button");

  links.addEventListener('click', ()=> {
    // links.classList.remove("active");
    document.querySelector(".form-box").classList.add('active');
  });


  let iconClose = document.querySelector(".icon-close .fa-solid");
 
  iconClose.addEventListener('click', ()=> {
    // links.classList.remove("active");
    document.querySelector(".form-box").classList.remove('active');
  });














