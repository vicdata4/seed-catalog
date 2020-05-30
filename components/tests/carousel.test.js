import { expect, fixture, html } from '@open-wc/testing';
import '../../carousel.js';
import '../../stepper.js';

describe('Carousel default mode', () => {
  let el, stepper;

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
    await el.updateComplete;
    stepper = el.shadowRoot.querySelector('slot[name=stepper]').assignedElements().length;
  });

  it('render carousel component', async() => {
    expect(el.shadowRoot).not.to.be.null;
  });

  it('No slotted stepper', async() => {
    expect(stepper).equal(0);
  });

  it('carousel length', async() => {
    expect(el.length).equal(4);
  });
});

describe('Carousel arrows stepper', () => {
  let el, stepper;
  let stepperRef;

  before(async() => {
    const component = html`
      <seed-carousel>
        <div class="custom-class">Carousel 1</div>
        <div class="custom-class">Carousel 2</div>
        <div class="custom-class">Carousel 3</div>
        <div class="custom-class">Carousel 4</div>
        <div class="custom-class">Carousel 5</div>
        <seed-stepper slot="stepper"></seed-stepper>
      </seed-carousel>
    `;

    el = await fixture(component);
    stepperRef = el.shadowRoot.querySelector('slot[name=stepper]');
    stepper = stepperRef.assignedElements().length;
  });

  it('render carousel component', () => {
    expect(el.shadowRoot).not.to.be.null;
  });

  it('Confirm slotted stepper', () => {
    expect(stepper).equal(1);
  });

  it('carousel length and default index', () => {
    expect(el.index).to.equal(0);
    expect(el.length).to.equal(5);
  });

  it('click to stepper dot', () => {
    stepperRef.assignedElements()[0].shadowRoot.querySelectorAll('button')[2].click();
    expect(el.index).to.equal(2);
  });

  it('dispatch touch move event', () => {
    const ev = new Event('touchmove');
    ev.touches = [{ clientX: 800, clientY: 0 }];
    stepperRef.assignedElements()[0].dispatchEvent(ev);
  });
});
