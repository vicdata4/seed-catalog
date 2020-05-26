import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { mediaQueryTablet } from './utils/constants';
import debounce from 'lodash.debounce';

export class SeedCarousel extends LitElement {
  static get styles() {
    return [
      css`
        .container {
          display: flex;
          flex-flow: row nowrap;
          width: 100%;

          overflow-x: scroll;
          overflow-y: hidden;

          scroll-behavior: smooth;

          scrollbar-width: none;
          scroll-snap-type: x mandatory;
        }

        ::slotted(*) {
          scroll-snap-align: center;
        }

        .container::-webkit-scrollbar {
          display: none;
        }

        .stepper::slotted(*) {
          transition: all 1s;
        }

        @media screen and (min-width: ${unsafeCSS(mediaQueryTablet)}) {}
      `
    ];
  }

  static get properties() {
    return {
      index: { type: Number, attribute: false },
      length: { type: Number, attribute: false },
      cardWidth: { type: Number, attribute: false },
      speed: { type: Number }
    };
  }

  constructor() {
    super();
    this.index = 0;
    this.length = 0;
    this.cardWidth = 0;
    this.speed = 200;

    // window.addEventListener('resize', this.moreThanTwoVisibleCards.bind(this));
  }

  /**
   * Return carousel params
   * clientWidth, cardWidth, scrollLeft and sideSpace
   *
   * @return {Object}
   */
  getCarouselParams() {
    const cardWidth = this.shadowRoot.querySelector('slot:not([name])').assignedElements()[0].clientWidth;
    const carousel = this.shadowRoot.querySelector('.container');
    const { clientWidth, scrollLeft, scrollWidth } = carousel;
    const sideSpace = (clientWidth - cardWidth) / 2;

    return { clientWidth, cardWidth, scrollLeft, sideSpace, scrollWidth };
  }

  /**
   * Set current index property when carousel is scrolling
   * and set the property to the slotted stepper.
   *
   */
  setCurrentIndex() {
    const { scrollLeft, cardWidth, sideSpace, scrollWidth, clientWidth } = this.getCarouselParams();
    this.index = Math.round((scrollLeft + sideSpace) / cardWidth);

    const moreThanTwo = this.moreThanTwoVisibleCards();

    if (moreThanTwo) {
      if (scrollLeft === 0) this.index = 0;
      if ((scrollWidth - clientWidth) === scrollLeft) {
        this.index = this.length - 1;
      }
    }

    this.shadowRoot.querySelector('slot[name=stepper]').assignedElements()[0].index = this.index;
  }

  /**
   * Return true in case more than two cards are visible from the index 0
   *
   * @return {Boolean}
   */
  moreThanTwoVisibleCards() {
    const { cardWidth, clientWidth } = this.getCarouselParams();
    return (cardWidth * 2) < clientWidth;
  }

  /**
   * Wait until slot rendering in order to get the first carousel card width
   */
  async waitUntilSlotRendering() {
    this.shadowRoot.querySelector('slot').assignedElements()[0].updateComplete;
  }

  smoothScroll(start_, end) {
    const distance = end - start_;
    const duration = this.speed;
    let start = null;

    const container = this.shadowRoot.querySelector('.container');

    const linear = function(t, b, c, d) {
      return c * t / d + b;
    };

    const step = function(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;

      container.scrollTo(linear(progress, start_, distance, duration), 0);
      if (progress < duration) window.requestAnimationFrame(step);
    };

    window.requestAnimationFrame(step);
  }

  /**
   * Set carrousel card position via javascript
   * @param {Number} index  Selected index from stepper
   */
  setCarouselPosition(index) {
    const { scrollLeft, cardWidth, sideSpace } = this.getCarouselParams();
    this.index = index;

    const position = (cardWidth * this.index) - sideSpace;

    this.smoothScroll(scrollLeft, position);

    // container.scrollLeft = position;
    this.shadowRoot.querySelector('slot[name=stepper]').assignedElements()[0].index = this.index;
  }

  async firstUpdated() {
    this.length = this.shadowRoot.querySelector('slot:not([name])').assignedElements().length;

    await this.waitUntilSlotRendering();
    this.shadowRoot.querySelector('.container').addEventListener('scroll', debounce(this.setCurrentIndex.bind(this), 5));

    this.moreThanTwoVisibleCards();

    this.addEventListener('set-selected-step', e => {
      this.setCarouselPosition(e.detail);
    });
  }

  render() {
    return html` 
      <div class="container">
        <slot></slot>
      </div>
      <slot name="stepper" class="stepper"></slot>
    `;
  }
}
