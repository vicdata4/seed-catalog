import { expect, fixture, html } from '@open-wc/testing';
import { spy } from 'sinon';
import '../index.js';

describe('Dropdown component', () => {
  let el, button, dropdown;

  before(async() => {
    el = await fixture(html`
      <seed-dropdown>
        <button slot="button">Dropdown</button>
        <p slot="content">Lorem ipsum</p>
      </seed-dropdown>
    `);

    button = el.shadowRoot.querySelector('slot[name=button]');
    dropdown = el.shadowRoot.querySelector('.dropdown');
  });

  it('render dropdown component', async() => {
    expect(el.shadowRoot).not.to.be.null;
  });

  it('default dropdown properties and attributes', () => {
    expect(el.backgroundColor).to.equal('white');
    expect(el.rotate).to.be.false;
    expect(el.clickout).to.be.false;
    expect(el.collapse).to.be.false;
    // expect(el.maxWidth).to.equal('unset');
    expect(dropdown.style.position).equal('absolute');
  });

  it('unsetted dropdown attributes by default', () => {
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

  it('collapse mode equal true', async() => {
    el.collapse = true;
    await el.updateComplete;

    expect(dropdown.style.position).equal('relative');
  });

  it('dispatch event when click on collapse mode', async() => {
    const submitSpy = spy();
    const collapse = await fixture(html`
      <seed-dropdown collapse @set-collapse=${() => submitSpy()}>
        <button slot="button">Dropdown</button>
        <div slot="content">Lorem ipsum</div>
      </seed-dropdown>
    `);

    const btn = collapse.shadowRoot.querySelector('slot[name=button]');
    btn.click();

    expect(submitSpy.callCount).to.equal(1);
  });

  it('rotate & clickout optional attributes', async() => {
    const collapse = await fixture(html`
      <seed-dropdown clickout rotate>
        <button slot="button"><i class="material-icons">face</i>Dropdown</button>
        <p slot="content">Lorem ipsum</p>
      </seed-dropdown>
    `);

    const submitSpy = spy(collapse, 'rotateIcon');
    const btn = collapse.shadowRoot.querySelector('slot[name=button]');
    btn.click();

    expect(collapse.clickout).to.be.true;
    expect(submitSpy.callCount).to.equal(1);
  });
});
