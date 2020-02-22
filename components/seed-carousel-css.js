import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { mediaQueryTablet } from './utils/constants';
import debounce from 'lodash.debounce';

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

          scroll-snap-type: x mandatory;
        }

        ::slotted(*) {
          scroll-snap-align: center;
        }

        @media screen and (min-width: ${unsafeCSS(mediaQueryTablet)}) {
        }
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

    window.addEventListener('resize', this.setCurrentCardPosition.bind(this));
  }

  getCarouselParams() {
    const cardWidth = this.shadowRoot.querySelector('slot').assignedElements()[0].clientWidth;
    const carousel = this.shadowRoot.querySelector('.container');
    const { scrollWidth, clientWidth, scrollLeft } = carousel;
    const sideSpace = (clientWidth - cardWidth) / 2;

    return { scrollWidth, clientWidth, cardWidth, scrollLeft, sideSpace };
  }

  setCurrentIndex() {
    const { scrollLeft, cardWidth } = this.getCarouselParams();
    this.index = Math.round(scrollLeft / cardWidth);
    this.shadowRoot.querySelector('slot[name=stepper]').assignedElements()[0].index = this.index + 1;
  }

  setCurrentCardPosition() {
    // wip
  }

  updateCarouselState() { }

  renderStepper() {
    return html`
      <slot name="stepper"></slot>
    `;
  }

  async waitUntilSlotRendering() {
    this.shadowRoot.querySelector('slot').assignedElements()[0].updateComplete;
  }

  async firstUpdated() {
    this.length = this.shadowRoot.querySelector('slot').assignedElements().length;

    await this.waitUntilSlotRendering();
    this.shadowRoot.querySelector('.container').addEventListener('scroll', debounce(this.setCurrentIndex.bind(this), 50));
  }

  render() {
    return html` 
      <div class="container">
        <slot></slot>
      </div>
      ${this.renderStepper()}
    `;
  }
}
