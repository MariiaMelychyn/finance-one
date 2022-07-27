import throttle from 'lodash.throttle'
import refs from '../refs'

let headerHeight;
let addedClass;

const currentWidth = document.documentElement.clientWidth;
if (currentWidth > 768) {
  headerHeight = 70;
  addedClass = 'baner--fake-header-desktop'
} else {
  headerHeight = 170;
  addedClass = 'baner--fake-header-mobile';
}

const showFixedHeader = throttle(() => {
  const currentScroll = window.scrollY;
  if (currentScroll > headerHeight) {
    refs.siteHeader.classList.add('header--fixed');
    refs.baner.classList.add(addedClass);
  } else {
    refs.siteHeader.classList.remove('header--fixed')
    refs.baner.classList.remove(addedClass);
  }
}, 100);

export default showFixedHeader;