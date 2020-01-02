/* eslint-disable */
import { expect, fixture, html } from '@open-wc/testing';
import '../../carousel.js';

describe('Carousel component', () => {
  it('render carousel component', async() => {
    const el = await fixture(html`<seed-carousel></seed-carousel>`);

    expect(el.shadowRoot).not.to.be.null;
  });
});
