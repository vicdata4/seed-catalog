import { LitElement, html, css } from 'lit-element';
import { empty } from './utils/constants';
import { seedStyle } from '../styles';

/** */
export class SeedStepper extends LitElement {
/* eslint-disable require-jsdoc */
  static get styles() {
    return [
      seedStyle,
      css`
        :host {
          width: 100%;
          display: flex;
          justify-content: center;
          flex-flow: row nowrap;
          padding-top: 20px;
          padding-bottom: 20px;
        }

        .dot {
          width: 15px;
          height: 15px;
          margin: 5px;
          border-radius: 100%;
          border: none;
          cursor: pointer;
          transition: background-color .7s;
        }

        .square {
          margin: 0;
          border-radius: unset;
        }

        .active {
          background-color: white !important;
        }
      `
    ];
  }

  static get properties() {
    return {
      index: { type: Number },
      size: { type: Number, reflect: true },
      dotsArray: { type: Array },
      colorActive: { type: String },
      colorBack: { type: String },
      square: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.index = 0;
    this.square = false;
    this.size = 0;
    this.dotsArray = [];
    this.colorActive = '#d8336d';
    this.colorBack = 'rgba(255,255,255,.5)';
  }

  render() {
    return html`
      ${this.dotsArray.map((x, i) => html`
        <button
            tabindex="0"
            @click="${() => this.setPosition(i)}" id="${`a${i}`}"
            class="dot ${this.square ? 'square' : empty}"
            .style="
                background-color: ${this.colorBack}
            "
            aria-label="${i}">
        </button>
      `)}
    `;
  }

  firstUpdated() {
    const square = this.square ? ' square' : empty;
    this.setActive(this.index, `dot${square} active`);
  }

  /**
  * Update index and dots
  * @param {Number} changedProps Update active class when the index changes
  */
  updated(changedProps) {
    const square = this.square ? ' square' : empty;
    if (this.index || changedProps.get('index')) {
      this.setActive(this.index, `dot${square} active`);
      this.setActive(changedProps.get('index'), `dot${square}`);
    }
  }

  attributeChangedCallback() {
    const n = this.size;
    const abc = new Array(n).fill(empty);
    this.dotsArray = abc;
  }
  /* eslint-enable require-jsdoc */

  /**
    * Set active class
    * @param {Number} i  Assign default index (0)
    * @param {String} mod Assign active class (dot active)
    */
  setActive(i, mod) {
    const currentDot = this.shadowRoot.querySelector(`#a${i}`);
    if (currentDot) currentDot.classList = mod;
  }

  /**
    * Set new index and dispatchEvent to smarters-reviews component
    * @param {Number} index  Selected index
    */
  setPosition(index) {
    this.dispatchEvent(new CustomEvent('set-dot', { detail: index, composed: true }));
  }
}
