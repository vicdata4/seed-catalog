import { expect, fixture, html } from '@open-wc/testing';
import '../../stepper.js';

describe('Stepper component', () => {
  let el, buttons;

  before(async() => {
    el = await fixture(html`<seed-stepper .index="${0}" .size="${4}"></seed-stepper>`);
    buttons = el.shadowRoot.querySelectorAll('button');
  });

  it('render stepper component', async() => {
    expect(el.shadowRoot).not.to.be.null;
  });

  it('default index', async() => {
    expect(el.index).to.equal(0);
  });

  it('rendered dots', async() => {
    expect(buttons.length).to.equal(4);
  });

  it('active dot', () => {
    expect(buttons[0].style.backgroundColor).to.equal('white');
    expect(buttons[3].style.backgroundColor).to.equal('rgba(255, 255, 255, 0.5)');
  });

  it('change active dot', async() => {
    el.index = 3;
    await el.updateComplete;

    expect(buttons[3].style.backgroundColor).to.equal('white');
    expect(buttons[0].style.backgroundColor).to.equal('rgba(255, 255, 255, 0.5)');
  });
});
