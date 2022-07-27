import 'lightbox2';

import './styles/main.scss';
import './scripts/html-chunks/html-chunked';
import './scripts/checkingWebp';

import refs from './scripts/refs';

import showFixedHeader from './scripts/handlers/showFixedHeader';
import navLinkScrolling from './scripts/handlers/navLinkScrolling';
import submitCallbackForm from './scripts/handlers/submitCallbackForm';

window.addEventListener('scroll', showFixedHeader);

refs.navigation.addEventListener('click', navLinkScrolling)
refs.home.addEventListener('click', navLinkScrolling)

refs.callbackForm.addEventListener('submit', submitCallbackForm)