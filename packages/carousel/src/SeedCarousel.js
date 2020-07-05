import { LitElement, html, css, unsafeCSS } from 'lit-element';
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

        ::slotted(img) {
          height: intrinsic;
        }

        .container::-webkit-scrollbar {
          display: none;
        }

        @media screen and (min-width: ${unsafeCSS('768px')}) {}
      `
    ];
  }

  static get properties() {
    return {
      index: { type: Number, attribute: false },
      length: { type: Number, attribute: false },
      speed: { type: Number }
    };
  }

  constructor() {
    super();
    this.index = 0;
    this.length = 0;
    this.speed = 200;
  }

  /**
   * Return carousel params
   * clientWidth, cardWidth, scrollLeft and marginLeft
   *
   * @return {Object}
   */
  getCarouselParams() {
    const cardWidth = this.shadowRoot.querySelector('slot:not([name])').assignedElements()[0].clientWidth;
    const carousel = this.shadowRoot.querySelector('.container');
    const { clientWidth, scrollLeft, scrollWidth } = carousel;
    const marginLeft = (clientWidth - cardWidth) / 2;

    return { clientWidth, cardWidth, scrollLeft, marginLeft, scrollWidth };
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
   * Set current index property when carousel is scrolling
   * and set the property to the slotted stepper.
   *
   */
  setIndexWhenScrolling() {
    const { scrollLeft, cardWidth, marginLeft, scrollWidth, clientWidth } = this.getCarouselParams();
    this.index = Math.round((scrollLeft + marginLeft) / cardWidth);

    if ((cardWidth * 2) < clientWidth) {
      if (scrollLeft === 0) this.index = 0;
      if ((scrollWidth - clientWidth) === scrollLeft) {
        this.index = this.length - 1;
      }
    }

    this.shadowRoot.querySelector('slot[name=stepper]').assignedElements()[0].index = this.index;
  }

  /**
   * Set carrousel card position to selected index
   * @param {Number} index  Selected index from stepper
   */
  setPositionByIndex(index) {
    const { scrollLeft, cardWidth, marginLeft } = this.getCarouselParams();

    if (this.index !== index) {
      this.index = index;

      const position = (cardWidth * this.index) - marginLeft;
      this.smoothScroll(scrollLeft, position);
    }
  }

  /**
   * Wait until slot rendering in order to get the first carousel card width
   */
  async waitUntilSlotRendering() {
    this.shadowRoot.querySelector('slot:not([name])').assignedElements()[0].updateComplete;
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('.container').removeEventListener('scroll', this.setIndexWhenScrolling);
    super.disconnectedCallback();
  }

  async firstUpdated() {
    this.length = this.shadowRoot.querySelector('slot:not([name])').assignedElements().length;

    await this.waitUntilSlotRendering();
    this.shadowRoot.querySelector('.container').addEventListener('scroll', debounce(this.setIndexWhenScrolling.bind(this), 5));

    this.addEventListener('set-selected-step', e => {
      this.setPositionByIndex(e.detail);
    });
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
