import refs from '../refs'

const backToSite = function (evt) {
  refs.modalBtn.removeEventListener('click', backToSite)
  refs.modal.classList.remove('modal--show')
}

export default backToSite;