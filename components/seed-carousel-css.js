import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { mediaQueryTablet } from './utils/constants';
import { seedStyle } from '../styles';

export class SeedCarouselCss extends LitElement {
  static get styles() {
    return [
      seedStyle,
      css`
        :host {
        }

        .container {
          display: flex;
          flex-flow: row nowrap;

          overflow-x: scroll;
          overflow-y: hidden;

          scroll-snap-type: x mandatory;
          /* scroll-padding: 0px; */
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
      length: { type: Number, attribute: false }
    };
  }

  constructor() {
    super();

    this.index = 0;
    this.length = 0;

    window.addEventListener('resize', this.setCurrentCardPosition.bind(this));
  }

  setCurrentIndex() {
    console.log('current index');
  }

  setCurrentCardPosition() {
    console.log('current card position');
  }

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
    // this.shadowRoot.querySelector('.container').addEventListener('scroll', this.setCurrentIndex.bind(this));
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
