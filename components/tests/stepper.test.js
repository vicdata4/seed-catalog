import { expect, fixture, html } from '@open-wc/testing';
import '../../stepper.js';

describe('Stepper component', () => {
  it('render stepper component', async() => {
    const el = await fixture(html`<seed-stepper></seed-stepper>`);

    expect(el.shadowRoot).not.to.be.null;
  });
});
