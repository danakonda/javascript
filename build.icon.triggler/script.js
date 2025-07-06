const buttons = document.querySelectorAll('.favorite-icon');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('filled')) {
      button.classList.remove('filled');
      button.innerHTML = '&#9825;'; // empty heart
    } else {
      button.classList.add('filled');
      button.innerHTML = '&#10084;'; // filled heart
    }
  });
});

