import SideNavigation from './SideNavigation';

const el = document.querySelector('.side-nav');
const sidenav = new SideNavigation(el);

document
    .querySelector('.header__show-menu')
    .addEventListener('click', sidenav.show);
