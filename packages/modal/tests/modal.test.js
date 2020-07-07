import { expect, fixture, html, aTimeout } from '@open-wc/testing';
import '../index.js';

describe('Modal component', () => {
  let el, button, header, footer;
  before(async() => {
    el = await fixture(html`
      <seed-modal>
        <button slot="button">Open Modal</button>
        <div slot="header">
          <span>Building Web Components</span>
          <button class="close"><i class="material-icons">close</i></button>
        </div>
        <div slot="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div slot="footer">
          <button class="close">Close</button>
          <button>Send</button>
        </div>
      </seed-modal>
    `);

    header = el.shadowRoot.querySelector('slot[name="header"]');
    footer = el.shadowRoot.querySelector('slot[name="footer"]');
    button = el.shadowRoot.querySelector('slot[name=button]');
    await header.assignedElements()[0].updateComplete;
  });

  it('render modal component', async() => {
    expect(el.shadowRoot).not.to.be.null;
  });

  it('default modal properties and attributes', () => {
    expect(el.centered).to.equal(false);
  });

  it('closed modal by default', () => {
    expect(el.shadowRoot.querySelector('.closed')).not.to.be.null;
  });

  it('open modal', () => {
    button.click();
    expect(el.shadowRoot.querySelector('.closed')).to.be.null;
  });

  it('close modal', async() => {
    header.assignedElements()[0].querySelector('.close').click();
    await aTimeout(300);
    await el.updateComplete;
    expect(el.shadowRoot.querySelector('.closed')).not.to.be.null;
  });

  it('open modal', () => {
    button.click();
    expect(el.shadowRoot.querySelector('.closed')).to.be.null;
  });

  it('close modal from footer', async() => {
    footer.assignedElements()[0].querySelector('.close').click();
    await aTimeout(300);
    await el.updateComplete;
    expect(el.shadowRoot.querySelector('.closed')).not.to.be.null;
  });

  it('click on focus-out modal', () => {
    const ev = new Event('click');
    ev.changedTouches = [{ clientX: 10, clientY: 10 }];
    el.shadowRoot.querySelector('.modal').dispatchEvent(ev);
  });
});
