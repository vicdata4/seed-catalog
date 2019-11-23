import { LitElement, html, css } from 'lit-element';
import { touchGestures } from './utils/carouselUtils';
import { seedButtonStyle } from '../styles';

/** */
export class SeedCarousel extends LitElement {
/* eslint-disable require-jsdoc */
  static get styles() {
    return [
      seedButtonStyle,
      css`
        :host {
        
            
          display: flex;
          flex-flow: row nowrap;
          height: auto;
          width: 100%;
          margin: 0;
          overflow: hidden;
          min-height: 200px;
          
        }

        :host > * {
          max-width: 100%;
        }

        .slider-container {
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

        .arrow-container {
          display: none;
          justify-content: center;
          z-index: 1;
          background-color: black;
        }

        .arrow {
          width: 100%;
          background: rgba(179, 79, 92, .6);
          border-color: white;
          border: none;
          cursor: pointer;
        }

        .rotate-left {
          transform: rotate(90deg);
        }

        .rotate-right {
          transform: rotate(-90deg);
        }

        button:active {
          border: none;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0,0,0,0);
          border: 0;
        }

        @media screen and (min-width: 768px) {
          
          .arrow-container {
            display: grid;
            align-items: center;
            flex-basis: 40px;
            height: auto;
          }
        }

        @media screen and (min-width: 1050px) {
          slide-dots {
            z-index: 1;
            position: relative;
            margin-bottom: -50px;
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      coordinate: { type: Number },
      index: { type: Number },
      card: { type: String },
      speed: { type: String },
      auto: { type: Boolean },
      interval: { type: Number },
      isRunning: { type: Boolean },
      minTouchLength: { type: Number },
      minTouchAngle: { type: Number },
    };
  }

  constructor() {
    super();
    this.coordinate = 0;
    this.index = 0;
    this.cards = [{},{},{},{}];
    this.animationSpeed = 0.8;
    this.auto = true;
    this.interval = 8000;
    this.intervalRef = null;
    this.isRunning = false;
    this.minTouchLength = 70;
    this.minTouchAngle = 30;
    this._focusEventsActive = [];
    this.EVENTS = {
      mouseenter: 'mouse',
      mouseleave: 'mouse',
      focusin: 'focus',
      focusout: 'focus',
    };

    this.addEventListener('stopInterval', () => {
      clearInterval(this.intervalRef);
      this.isRunning = false;
    });

    this.addEventListener('resetInterval', () => {
      this.isRunning = true;
      if (this.auto) this._startAutoplay();
    });

    this.addEventListener('setPosition', this.setNewPosition);

    this.addEventListener('focusin', this._stopAutoplay.bind(this));
    this.addEventListener('mouseenter', this._stopAutoplay.bind(this));
    this.addEventListener('mouseleave', this.startInterval.bind(this));
    this.addEventListener('focusout', this.startInterval.bind(this));
  }

  render() {
    return html`
            <div class="arrow-container">
              <button id="left" aria-label="left" class="sd-icon circle black" @click="${() => this.showNext(false)}"><i class="material-icons">keyboard_arrow_left</i></button>
            </div>
                
            <div
              id="slide"
              class="slider-container"
              .style="${`transform: translateX(${this.coordinate}px); transition: transform ${this.animationSpeed}s`}"
            >
              <slot></slot>
            </div>

            <div class="arrow-container">
              <button id="right" aria-label="right" class="sd-icon circle black" @click="${() => this.showNext(true)}"><i class="material-icons">keyboard_arrow_right</i></button>
            </div>
    `;
  }

  firstUpdated() {
    touchGestures(this, '#slide');

    window.addEventListener('resize', this.setCoordinate.bind(this));
    if (this.auto) this.setAutoInterval();
  }

  /* eslint-enable require-jsdoc */

  /**
    * Show next card
    *  @param {Boolean} way set index and coordinate to show the next card (true = way/right, false = way/left)
    */
  showNext(way) {
    this.setIndex(way);
    this.setCard();
  }

  /**
    * Show next card
    */
  _next() {
    this.showNext(true);
  }

  /**
    * Show prev card
    */
  _prev() {
    this.showNext(false);
  }

  /**
    * Show next card
    */
  setCard() {
    if (!this.isRunning) this.isRunning = true;
    this.setCoordinate();
    if (this.auto) this._startAutoplay();
  }

  /**
    * Set current index
    *  @param {Boolean} way set current index (array index / current element)
    */
  setIndex(way) {
    if (this.index === this.cards.length - 1 && way) {
      this.index = 0;
    } else if (this.index === 0 && !way) {
      this.index = this.cards.length - 1;
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
      if (this._isIntersecting) {
        this.showNext(true);
      }
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
    this.isRunning = false;
    this.auto = false;
  }

  /**
   * Start the carousel interval
   * @param {Event} event Event object
   */
  startInterval(event) {
    this._focusEventsActive = this._focusEventsActive.filter((ev) => ev !== this.EVENTS[event.type]);
    if (this._focusEventsActive.length === 0) {
      this._startAutoplay();
      this.auto = true;
    }
  }
}
customElements.define('seed-carousel', SeedCarousel);
