import header from '../../html/header.html';

import featuresList from '../../html/featured-list.html';
import individualSolution from '../../html/individual-solution.html';
import cases from '../../html/cases.html';
import blogPost from '../../html/blog-post.html';
import team from '../../html/team.html';
import contact from '../../html/contact.html';

import siteFooter from '../../html/footer.html';
import submitModal from '../../html/submit-modal.html'

const markup = [
  header,
  '<main>',
  featuresList,
  individualSolution,
  cases,
  blogPost,
  team,
  contact,
  '</main>',
  siteFooter,
  submitModal
];

const body = document.querySelector('body');

body.innerHTML = markup.join('');