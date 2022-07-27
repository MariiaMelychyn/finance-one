import refs from '../refs';

const navLinkScrolling = function (evt) {
  evt.preventDefault();
  setTimeout(() => {
    const node = evt.target.nodeName;

    if (node !== "A" && node !== "SPAN") return;
    let hash;
    node === "SPAN" ? hash = "#home" : hash = evt.target.attributes[0].value;

    const linkTo = document.querySelector(hash).offsetTop;

    const scrollHeight =
      linkTo - refs.siteHeader.clientHeight;
    window.scrollTo({
      top: scrollHeight,
      behavior: 'smooth',
    });
  }, 300);
}

export default navLinkScrolling;