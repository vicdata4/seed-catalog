/* eslint-disable */
import { expect, fixture, html } from '@open-wc/testing';
import '../../dropdown.js';

describe('Dropdown component', () => {
  let el, button, dropdown;

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

    button = el.shadowRoot.querySelector('slot[name=button]');
    dropdown = el.shadowRoot.querySelector('.dropdown');
  });
    
  it('render dropdown component', async() => {
    expect(el.shadowRoot).not.to.be.null;
  });

  it('absolute position by default', () => {
    expect(dropdown.style.position).equal('absolute');
  });

  it('hidden dropped contents', () => {
    expect(dropdown.style.maxHeight).to.equal('');
    expect(dropdown.style.height).to.equal('');
  });

  it('show dropped content', () => {
    button.click();

    expect(dropdown.style.maxHeight).to.equal('600px');
    expect(dropdown.style.height).to.equal('auto');
  });

  it('hide dropped content', () => {
    button.click();

    expect(dropdown.style.maxHeight).to.equal('0px');
    expect(dropdown.style.height).to.equal('unset');
  });
});
