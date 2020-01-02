import { expect, fixture, html } from '@open-wc/testing';
import '../../modal.js';

describe('Modal component', () => {
  it('render modal component', async() => {
    const el = await fixture(html`<seed-modal></seed-modal>`);

    expect(el.shadowRoot).not.to.be.null;
  });
});
