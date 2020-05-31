import { expect, fixture, html, aTimeout } from '@open-wc/testing';
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
        <div style="width: 100%; height: 100px;">Carousel 1</div>
        <div style="width: 100%; height: 100px;">Carousel 2</div>
        <div style="width: 100%; height: 100px;">Carousel 3</div>
        <div style="width: 100%; height: 100px;">Carousel 4</div>
        <div style="width: 100%; height: 100px;">Carousel 5</div>
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

  it('click to stepper dot', async() => {
    stepperRef.assignedElements()[0].shadowRoot.querySelectorAll('button')[2].click();
    await aTimeout(1000);
    expect(el.index).to.equal(2);
  });

  it('carousel scroll left', async() => {
    el.shadowRoot.querySelector('.container').scrollLeft = -200;
    el.setIndexWhenScrolling();
    await el.updateComplete;
  });
});
