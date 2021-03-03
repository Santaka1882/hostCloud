const button = document.getElementById('navButton')
const navBar = document.getElementById('nav')

button.addEventListener('focus', showNav)
button.addEventListener('focusout', hideNav)

function showNav() {
  navBar.classList.add('show')
}

function hideNav()  {
  navBar.classList.remove('show')
}