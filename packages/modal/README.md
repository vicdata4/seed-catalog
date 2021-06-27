<img src="https://cdn.jsdelivr.net/gh/vicdata4/doc-template/assets/seed-icon.png" width="40">

## Seed Modal

### [Documentation](https://vicdata4.github.io/seed-catalog/seed/modal)

Npm

```
npm install @seed-catalog/modal
```

How to use

```js
import { LitElement, html, css } from 'lit-element';
import { seedStyle } from '@seed-catalog/styles';
import '@seed-catalog/modal';

class MyComponent extends LitElement {
  render() {
    return html`
      <seed-modal>
        <button slot="button" class="sd-btn blue">Open Modal</button>
        <div slot="header" class="header">      
          <span>Building Web Components</span>
          <button class="sd-icon clear close"><i class="material-icons blue-mate">close</i></button>
        </div>
        <div slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div slot="footer" class="footer">
          <button class="sd-btn black close">Close</button>
          <button class="sd-btn blue-mate">Send</button>
        </div>
      </seed-modal>
    `;
  }
}
```

Link: https://www.npmjs.com/package/@seed-catalog/modal