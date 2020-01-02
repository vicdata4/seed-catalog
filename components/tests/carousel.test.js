import { expect, fixture, html } from '@open-wc/testing';
import '../../carousel.js';

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
  let el, stepper, arrows;

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

  it('click arrow left two times and go to the last element', () => {
    arrows[0].click();
    arrows[0].click();
    expect(el.index).to.equal(4);
  });

  it('click to stepper dot', () => {
    stepper.shadowRoot.querySelectorAll('button')[2].click();
    expect(el.index).to.equal(2);
  });
});
