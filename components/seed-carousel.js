import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { carouselUtils } from './utils/carousel';
import { empty, mediaQueryTablet } from './utils/constants';
import { seedStyle } from '../styles';
import './seed-stepper.js';

/** */
export class SeedCarousel extends LitElement {
/* eslint-disable require-jsdoc */
  static get styles() {
    return [
      seedStyle,
      css`
        :host {
          position: relative;
          display: flex;
          flex-flow: row nowrap;
          width: 100%;
          height: auto;
          margin: 0;
          overflow: hidden;
          /*max-width: 100%;*/
          min-height: 200px;
        }

        .container {
            flex: 1 1 0;
            width: inherit;
            display: flex;
            flex-flow: row nowrap;
            height: auto;
            width: 100%;
            margin: 0;
            min-height: 200px;
        }

        ::slotted(div) {
          min-width: 100%;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          color: grey;
          transform: translateX(0);
          transition: transform .8s;
        }

        ::slotted(img) {
          max-width: 100%;
          height: auto;
        }

        .arrow-btn {
          display: none;
          height: 100%;
        }

        button:active {
          border: none;
        }

        seed-stepper {
            position: absolute;
            bottom: 0;
        }

        @media screen and (min-width: ${unsafeCSS(mediaQueryTablet)}) {
          .arrow-btn {
            position: absolute;
            display: flex;
            right: 0;
            justify-content: center;
            align-items: center;
            z-index: 1;
            background-color: transparent;
            border: 1px solid green;
            min-height: inherit;
            cursor: pointer;
            border: none;
          }

          .arrow-btn-left {
              left: 0;
              right: unset;
          }
        }
      `
    ];
  }

  static get properties() {
    return {
      coordinate: { type: Number },
      index: { type: Number },
      nCards: { type: Number },
      speed: { type: Number },
      auto: { type: Boolean, attribute: 'auto' },
      arrows: { type: Boolean, attribute: 'arrows' },
      stepper: { type: Boolean, attribute: 'stepper' },
      square: { type: Boolean, attribute: 'square' },
      interval: { type: Number },
      minTouchLength: { type: Number },
      minTouchAngle: { type: Number }
    };
  }

  constructor() {
    super();
    this.coordinate = 0;
    this.index = 0;
    this.nCards = 0;
    this.speed = 0.8;
    this.interval = 5000;
    this.intervalRef = null;
    this.minTouchLength = 70;
    this.minTouchAngle = 30;
    this._focusEventsActive = [];
    this.EVENTS = {
      mouseenter: 'mouse',
      mouseleave: 'mouse',
      focusin: 'focus',
      focusout: 'focus'
    };

    this.addEventListener('set-dot', this.setNewPosition);
    this.addEventListener('focusin', this._stopAutoplay.bind(this));
    this.addEventListener('mouseenter', this._stopAutoplay.bind(this));
    this.addEventListener('mouseleave', this.startInterval.bind(this));
    this.addEventListener('focusout', this.startInterval.bind(this));
  }

  showArrows() {
    return this.arrows
      ? html`
          <button
              id="left"
              aria-label="left"
              class="arrow-btn arrow-btn-left"
              @click="${this._prev}">
              <i class="material-icons lg">keyboard_arrow_left</i>
          </button>
          <button
              id="right"
              aria-label="right"
              class="arrow-btn"
              @click="${this._next}">
              <i class="material-icons lg">keyboard_arrow_right</i>
          </button>
       `
      : empty;
  }

  showStepper() {
    return this.stepper ? html`
        <seed-stepper
          .size="${this.nCards}"
          .index="${this.index}"
          .colorBack="${'rgba(255,255,255,.5)'}"
          .square="${this.square}">
        </seed-stepper>
     ` : empty;
  }

  render() {
    return html` 
      ${this.showArrows()}
      <div
        id="slide"
        class="container"
        .style="${`
            transform: translateX(${this.coordinate}px);
            transition: transform ${this.speed}s`}"
      >
        <slot></slot>
      </div>
      ${this.showStepper()}
    `;
  }

  firstUpdated() {
    carouselUtils(this, '#slide');

    this.nCards = this.getNCards();

    window.addEventListener('resize', this.setCoordinate.bind(this));
    if (this.auto) this.setAutoInterval();
  }

  showNext(way) {
    this.setIndex(way);
    this.setCard();
  }

  _next() {
    this.showNext(true);
  }

  _prev() {
    this.showNext(false);
  }

  setCard() {
    this.setCoordinate();
    if (this.auto) this._startAutoplay();
  }

  getNCards() {
    const divs = this.querySelectorAll('div');
    const imgs = this.querySelectorAll('img');
    return divs.length + imgs.length;
  }

  setIndex(way) {
    const cards = this.getNCards();

    if (this.index === cards - 1 && way) {
      this.index = 0;
    } else if (this.index === 0 && !way) {
      this.index = cards - 1;
    } else if (way) {
      this.index++;
    } else {
      this.index--;
    }
  }

  /**
    * Set current card by coordinate
    */
  setCoordinate() {
    this.coordinate = -(this.shadowRoot.querySelector('#slide').clientWidth * this.index);
  }

  /**
    * Set carrousel interval in milliseconds
    */
  setAutoInterval() {
    this.intervalRef = setInterval(() => {
      this.showNext(true);
    }, this.interval);
  }

  /**
    * Reset setIInterval()
    */
  _startAutoplay() {
    clearInterval(this.intervalRef);
    this.setAutoInterval();
  }

  /**
    * @param {Number} index Set selected index / card
    */
  setNewPosition(index) {
    this.index = index.detail;
    this.setCard();
  }

  /**
    * Stop carousel interval indefinitely
    * @param {Event} event Event object
    */
  _stopAutoplay(event) {
    this._focusEventsActive.push(this.EVENTS[event.type]);
    clearInterval(this.intervalRef);
  }

  /**
   * Start the carousel interval
   * @param {Event} event Event object
   */
  startInterval(event) {
    this._focusEventsActive = this._focusEventsActive.filter((ev) => ev !== this.EVENTS[event.type]);
    if (this._focusEventsActive.length === 0 && this.auto) {
      this._startAutoplay();
    }
  }
}
