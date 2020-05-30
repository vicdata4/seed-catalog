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

describe('Stepper component additional attributes', () => {
  let el, buttons;

  before(async() => {
    el = await fixture(html`<seed-stepper .index="${0}" .size="${4}" colorActive="rgb(45, 171, 180)" colorBack="rgba(45, 171, 180, 0.27)"></seed-stepper>`);
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

  it('change active dot 2', async() => {
    el.index = 3;
    await el.updateComplete;

    expect(buttons[3].style.backgroundColor).to.equal('rgb(45, 171, 180)');
    expect(buttons[0].style.backgroundColor).to.equal('rgba(45, 171, 180, 0.27)');
  });
});
