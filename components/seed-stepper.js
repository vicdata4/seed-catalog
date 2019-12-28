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
          padding: 1px 7px 2px;
        }

        .square {
          margin: 0;
          border-radius: unset;
        }
      `
    ];
  }

  static get properties() {
    return {
      index: { type: Number },
      size: { type: Number, reflect: true },
      array: { type: Array, attribute: false },
      square: { type: Boolean },
      colorBack: { type: String },
      colorActive: { type: String }
    };
  }

  constructor() {
    super();
    this.index = 0;
    this.square = false;
    this.size = 0;
    this.array = [];

    this.colorBack = this.colorBack || 'rgba(255,255,255,.5)';
    this.colorActive = this.colorActive || 'white';
  }

  /**
    * Set new index and dispatchEvent(e)
    * @param {Number} index  Selected index
    */
  setPosition(index) {
    this.dispatchEvent(new CustomEvent('set-dot', { detail: index, composed: true }));
  }

  attributeChangedCallback() {
    super.connectedCallback();
    this.array = new Array(this.size).fill(empty);
  }

  render() {
    return html`
      ${this.array.map((x, i) => html`
        <button
          class="dot${this.square ? ' square' : empty}"
          @click="${() => this.setPosition(i)}" id="${`a${i}`}"
          .style="background-color: ${i === this.index ? this.colorActive : this.colorBack}"
          aria-label="${i}"
          tabindex="0"
        ></button>
      `)}
    `;
  }
}
