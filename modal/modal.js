const closeButton = document.querySelector('.close_button')
const modal = document.querySelector('dialog')
const form = document.querySelector('form')

modal.show()

closeButton.addEventListener('click', () => {
    modal.classList.add('animate__fadeOutDown')
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    modal.classList.add('animate__fadeOutDown')
})