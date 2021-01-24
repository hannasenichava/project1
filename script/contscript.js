const openModal = document.getElementById('open-modal')
const modal = document.getElementById('modal')
openModal.addEventListener('click' , () => {
modal.style.display = 'block'
})
const close = document.getElementById('close-modal')
close.addEventListener('click', () => {
  modal.style.display = 'none'
})