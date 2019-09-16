export default class SideNavigation {
  constructor(el) {
    this.container = el;
    this.sidenav = el.querySelector('.side-nav__content');
    this.close = el.querySelector('.side-nav__close');
    this.startPosition = 0;
    this.currentPosition = 0;
    this.isGestureStarted = false;

    this.close.addEventListener('click', this.hide.bind(this));
    this.container.addEventListener('click', this.onContainerClick.bind(this));
    this.container.addEventListener('pointerdown', this.onPointerDown.bind(this));
    this.container.addEventListener('pointermove', this.onPointerMove.bind(this));
    this.container.addEventListener('pointerup', this.onPointerUp.bind(this));
    this.container.addEventListener('pointercancel', this.onPointerUp.bind(this));
    this.container.addEventListener('pointerleave', this.onPointerUp.bind(this));
  }

  hide() {
    this.container.classList.add('side-nav__hidden');
    this.sidenav.classList.add('side-nav__content__hidden');
  }

  show() {
    this.container.classList.remove('side-nav__hidden');
    this.sidenav.classList.remove('side-nav__content__hidden');
  }

  updatePosition() {
    requestAnimationFrame(() => {
      const diff = Math.min(10, this.currentPosition - this.startPosition);
      this.sidenav.style.transform = `translateX(${diff}px)`;
    });
  }

  resetPosition() {
    requestAnimationFrame(() => {
      this.sidenav.style.transform = '';
    });
  }

  disableTransition() {
    this.sidenav.style.transition = 'none';
  }

  enableTransition() {
    this.sidenav.style.transition = '';
  }

  onContainerClick(e) {
    if (e.target === this.container) {
      this.hide();
    }
  }

  onPointerDown(e) {
    this.startPosition = e.pageX;
    this.currentPosition = e.pageX;
    this.isGestureStarted = true;

    this.sidenav.setPointerCapture(e.pointerId);

    this.disableTransition();
  }

  onPointerUp(e) {
    this.currentPosition = e.pageX;
    this.isGestureStarted = false;

    this.sidenav.releasePointerCapture(e.pointerId);

    this.enableTransition();
    this.resetPosition();

    if (this.currentPosition - this.startPosition < -50) {
      this.hide();
    } else {
      this.show();
    }
  }

  onPointerMove(e) {
    if (!this.isGestureStarted) {
      return;
    }

    this.currentPosition = e.pageX;
    this.updatePosition();
  }
}
