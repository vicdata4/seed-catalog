/* import { expect, fixture, html } from '@open-wc/testing';
import '../../carousel-css.js';
import '../../carousel-stepper.js';

describe('Carousel default mode', () => {
  let el, stepper;

  before(async() => {
    const component = html`
      <seed-carousel-css>
        <div class="custom-class">Carousel 1</div>
        <div class="custom-class">Carousel 2</div>
        <div class="custom-class">Carousel 3</div>
        <div class="custom-class">Carousel 4</div>
        <seed-carousel-stepper slot="stepper"></seed-carousel-stepper>
      </seed-carousel-css>
    `;

    el = await fixture(component);
    stepper = el.shadowRoot.querySelector('slot[name=seed-carousel-stepper');
  });

  it('render carousel component', async() => {
    expect(el.shadowRoot).not.to.be.null;
  });

  it('render carousel component', async() => {
    expect(stepper).not.to.be.null;
  });
});

*/
