import { expect, fixture, html } from '@open-wc/testing';
import '../../carousel.js';
import { updateXPosition } from '../utils/carousel';

describe('Carousel default mode', () => {
  let el, stepper, arrows;

  before(async() => {
    const component = html`
      <seed-carousel>
        <div class="custom-class">Carousel 1</div>
        <div class="custom-class">Carousel 2</div>
        <div class="custom-class">Carousel 3</div>
        <div class="custom-class">Carousel 4</div>
      </seed-carousel>
    `;

    el = await fixture(component);
    stepper = el.shadowRoot.querySelector('seed-stepper');
    arrows = el.shadowRoot.querySelectorAll('.arrow-btn');
  });

  it('render carousel component', async() => {
    expect(el.shadowRoot).not.to.be.null;
  });

  it('arrows and stepper hidden by default', async() => {
    expect(stepper).to.be.null;
    expect(arrows.length).to.equal(0);
  });
});

describe('Carousel arrows stepper', () => {
  let el, stepper, arrows, slide;

  before(async() => {
    const component = html`
      <seed-carousel arrows stepper>
        <div class="custom-class">Carousel 1</div>
        <div class="custom-class">Carousel 2</div>
        <div class="custom-class">Carousel 3</div>
        <div class="custom-class">Carousel 4</div>
        <div class="custom-class">Carousel 5</div>
      </seed-carousel>
    `;

    el = await fixture(component);
    stepper = el.shadowRoot.querySelector('seed-stepper');
    arrows = el.shadowRoot.querySelectorAll('.arrow-btn');
    slide = el.shadowRoot.querySelector('#slide');
  });

  it('render carousel component', () => {
    expect(el.shadowRoot).not.to.be.null;
  });

  it('show arrows and stepper', () => {
    expect(stepper).not.to.be.null;
    expect(arrows.length).to.equal(2);
  });

  it('carousel length and default index', () => {
    expect(el.index).to.equal(0);
    expect(el.cardsLength).to.equal(5);
  });

  it('click arrow right and set index to 1', () => {
    arrows[1].click();
    expect(el.index).to.equal(1);
  });

  it('click arrow left two times and one arrow left', () => {
    arrows[0].click();
    arrows[0].click();
    arrows[1].click();
    expect(el.index).to.equal(0);
  });

  it('click to stepper dot', () => {
    stepper.shadowRoot.querySelectorAll('button')[2].click();
    expect(el.index).to.equal(2);
  });

  it('update x position', async() => {
    updateXPosition(null, el, '#slide');
    await el.updateComplete;
    expect(el.shadowRoot).not.to.be.null;
  });

  it('distpatch touch start event', async() => {
    const ev = new Event('touchstart');
    ev.touches = [{ clientX: 200, clientY: 200 }];
    slide.dispatchEvent(ev);
  });

  it('dispatch touch move event', () => {
    const ev = new Event('touchmove');
    ev.touches = [{ clientX: 200, clientY: 200 }];
    slide.dispatchEvent(ev);
  });

  it('ditpatch touch end event', () => {
    const ev = new Event('touchend');
    ev.changedTouches = [{ clientX: 200, clientY: 200 }];
    slide.dispatchEvent(ev);
  });

  it('ditpatch touch end event X higher than Y', () => {
    const ev = new Event('touchend');
    ev.changedTouches = [{ clientX: 400, clientY: 200 }];
    slide.dispatchEvent(ev);
  });

  it('ditpatch touch end event Y higher than X', () => {
    const ev = new Event('touchend');
    ev.changedTouches = [{ clientX: 200, clientY: 400 }];
    slide.dispatchEvent(ev);
  });
});

describe('Carousel auto', () => {
  let el;

  before(async() => {
    const component = html`
      <seed-carousel auto>
        <div class="custom-class">Carousel 1</div>
        <div class="custom-class">Carousel 2</div>
        <div class="custom-class">Carousel 3</div>
        <div class="custom-class">Carousel 4</div>
        <div class="custom-class">Carousel 5</div>
      </seed-carousel>
    `;

    el = await fixture(component);
  });

  it('render carousel component', () => {
    expect(el.shadowRoot).not.to.be.null;
  });

  it('mouseleave event', () => {
    const ev = new Event('mouseleave');
    el.dispatchEvent(ev);
  });
});
