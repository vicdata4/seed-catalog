import { expect, fixture, html } from '@open-wc/testing';
import '../../collapse.js';

describe('Collapse component', () => {
  it('render collapse component', async() => {
    const el = await fixture(html`<seed-collapse></seed-collapse>`);

    expect(el.shadowRoot).not.to.be.null;
  });
});
