/* eslint-disable */
import { expect, fixture, html } from '@open-wc/testing';
import '../../dropdown.js';

describe('Dropdown component', () => {
  let el;
  before(async () => {
    el = await fixture(html`
        <seed-dropdown>
            <button slot="button">Dropdown</button>
            <p slot="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam,
              eget viverra diam. Donec euismod mattis dignissim.
            </p>
        </seed-dropdown>
    `);
  });
    
  it('render dropdown component', async() => {
    expect(el.shadowRoot).not.to.be.null;
  });

  it('absolute position as default', async() => {
    expect(el.shadowRoot.querySelector('.dropdown').style.position).equal('absolute');
  });
});
