const button = document.getElementById('navButton')
const navBar = document.getElementById('nav')
const main = document.getElementById('main')

let counter = 1

const removeShow = () => {
  navBar.classList.remove('show')
  main.classList.remove('dark')
  counter = 1
}
const addShow = () => {
  navBar.classList.add('show')
  main.classList.add('dark')
}

main.addEventListener('click', removeShow)

button.onclick = () => {
  if(counter === 1) {
    addShow()
    counter = 0
  } else if (counter === 0) {
    removeShow()
  }
}