const button = document.getElementById('navButton')
const navBar = document.getElementById('nav')
const main = document.getElementById('main')

const removeShow = () => {
  navBar.classList.remove('show')
  counter = 1
}
const addShow = () => navBar.classList.add('show')

main.addEventListener('click', removeShow)

let counter = 1

button.onclick = () => {
  console.log(counter)

  if(counter === 1) {
    addShow()
    counter = 0
  } else if (counter === 0) {
    removeShow()
  }
}