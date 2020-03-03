import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { mediaQueryTablet } from './utils/constants';
import debounce from 'lodash.debounce';

/****************
WORK IN PROGRESS
****************/
export class SeedCarouselCss extends LitElement {
  static get styles() {
    return [
      css`
        .container {
          display: flex;
          flex-flow: row nowrap;
          width: 100%;

          overflow-x: scroll;
          overflow-y: hidden;

          scrollbar-width: none;
          scroll-snap-type: x mandatory;
        }

        ::slotted(*) {
          scroll-snap-align: center;
        }

        .container::-webkit-scrollbar {
          display: none;
        }

        @media screen and (min-width: ${unsafeCSS(mediaQueryTablet)}) {}
      `
    ];
  }

  static get properties() {
    return {
      index: { type: Number, attribute: false },
      length: { type: Number, attribute: false },
      cardWidth: { type: Number, attribute: false }
    };
  }

  constructor() {
    super();
    this.index = 0;
    this.length = 0;
    this.cardWidth = 0;

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
    const { scrollLeft, cardWidth, sideSpace } = this.getCarouselParams();
    this.index = Math.round((scrollLeft + sideSpace) / cardWidth);

    const moreThanTwo = this.moreThanTwoVisibleCards();

    if (moreThanTwo) {
      if (scrollLeft === 0) this.index = 0;
      if (this.index === this.length - 1) this.index = this.length;
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

  async firstUpdated() {
    this.length = this.shadowRoot.querySelector('slot:not([name])').assignedElements().length;

    await this.waitUntilSlotRendering();
    this.shadowRoot.querySelector('.container').addEventListener('scroll', debounce(this.setCurrentIndex.bind(this), 50));

    this.moreThanTwoVisibleCards();
  }

  render() {
    return html` 
      <div class="container">
        <slot></slot>
      </div>
      <slot name="stepper"></slot>
    `;
  }
}
