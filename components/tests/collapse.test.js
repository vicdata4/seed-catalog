import { expect, fixture, html } from '@open-wc/testing';
import { spy } from 'sinon';
import '../../collapse.js';
import '../../dropdown.js';

describe('Collapse component', () => {
  let el, submitSpy;

  before(async() => {
    const component = html`
      <seed-collapse>
        <seed-dropdown position="absolute" maxWidth="300" @set-collapse=${() => submitSpy()} rotate clickout>
          <button slot="button">Collapse</button>
          <p slot="content">Lorem ipsum</p>
        </seed-dropdown>
      </seed-collapse>
    `;

    submitSpy = spy();
    el = await fixture(component);
  });

  it('render collapse component', () => {
    expect(el.querySelector('seed-dropdown')).not.to.be.null;
  });

  it('click collapse dropdown button', () => {
    const button = el.querySelector('seed-dropdown').shadowRoot.querySelector('slot[name=button]');
    button.click();

    expect(submitSpy.callCount).to.equal(1);
  });

  it('multi-dropdown collapse | click events', async() => {
    const component = await fixture(html`
      <seed-collapse basic>
        <seed-dropdown>
          <button id="col1" slot="button">Collapse</button>
          <p slot="content">Lorem ipsum</p>
        </seed-dropdown>
        <seed-dropdown>
          <button id="col2" slot="button">Collapse</button>
          <p slot="content">Lorem ipsum</p>
        </seed-dropdown>
      </seed-collapse>
  `);

    const element = component.querySelectorAll('seed-dropdown');

    element[0].shadowRoot.querySelector('slot[name=button]').click();
    element[1].shadowRoot.querySelector('slot[name=button]').click();
    element[1].shadowRoot.querySelector('slot[name=button]').click();

    expect(component.basic).to.be.true;
  });

  it('set accordion component', async() => {
    const component = await fixture(html`
      <seed-accordion>
        <seed-dropdown>
          <button slot="button">Collapse</button>
          <p slot="content">Lorem ipsum</p>
        </seed-dropdown>
      </seed-accordion>
    `);
    expect(component).not.to.be.null;
  });
});
