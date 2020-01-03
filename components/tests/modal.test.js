import { expect, fixture, html, aTimeout } from '@open-wc/testing';
import '../../modal.js';

describe('Modal component', () => {
  let el, button, closeBtn;
  before(async() => {
    el = await fixture(html`
      <seed-modal>
        <button slot="button">Open Modal</button>
        <button slot="close-btn"><i class="material-icons">close</i></button>
        <span slot="title">Building Web Components</span>

        <div slot="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div slot="footer">
          <button>Close</button>
          <button>Send</button>
        </div>
      </seed-modal>
    `);

    button = el.shadowRoot.querySelector('slot[name=button]');
    closeBtn = el.shadowRoot.querySelector('slot[name=close-btn]');
  });

  it('render modal component', async() => {
    expect(el.shadowRoot).not.to.be.null;
  });

  it('default modal properties and attributes', () => {
    expect(el.alignWindow).to.equal('flex-start');
  });

  it('closed modal by default', () => {
    expect(el.shadowRoot.querySelector('.closed')).not.to.be.null;
  });

  it('open modal', () => {
    button.click();
    expect(el.shadowRoot.querySelector('.closed')).to.be.null;
  });

  it('close modal', async() => {
    closeBtn.click();
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
