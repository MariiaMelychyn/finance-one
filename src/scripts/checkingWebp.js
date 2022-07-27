import refs from './refs'

function support_format_webp() {
  const elem = document.createElement('canvas');

  if (!!(elem.getContext && elem.getContext('2d'))) {
    // was able or not to get WebP representation
    return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
  }
  else {
    // very old browser like IE 8, canvas not supported
    return false;
  }
}

if (support_format_webp()) {
  refs.mainScreen.classList.add('main-screen--support-webp');
  refs.aboutUsImage.classList.add('individual-solution__image--support-webp');
  refs.blogPostImage.classList.add('blog-post__image--support-webp');
  refs.contactsImage.classList.add('contact__image--support-webp');
} else {
  refs.mainScreen.classList.add('main-screen--support-jpg');
  refs.aboutUsImage.classList.add('individual-solution__image--support-jpg');
  refs.blogPostImage.classList.add('blog-post__image--support-jpg');
  refs.contactsImage.classList.add('contact__image--support-jpg');
}