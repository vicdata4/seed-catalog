<img src="https://cdn.jsdelivr.net/gh/vicdata4/doc-template/assets/seed-icon.png" width="40">

## Seed Progress Ring

### [Documentation](https://vicdata4.github.io/seed-catalog/seed/ring)

Npm

```
npm install @seed-catalog/progress-ring
```

How to use

```js
import { LitElement, html, css } from 'lit-element';
import '@seed-catalog/progress-ring';

class MyComponent extends LitElement {
  render() {
    return html`
      <seed-progress-ring></seed-progress-ring>
      
      <seed-progress-ring .percent="20" text="%"></seed-progress-ring>

      <seed-progress-ring .percent="20" custom>
        <div slot="custom">
          ...
        </div>
      </seed-progress-ring>

      <seed-progress-ring .percent="70" text="Uploading"></seed-progress-ring>

      <seed-progress-ring .percent="10" text="Uploading" only-text></seed-progress-ring>
      
      Optional attributes: ringColor / ringBackground / background / textColor

      <seed-progress-ring 
        .percent="20"
        ringColor="#f70bdd"
        ringBackground="rgba(0, 0, 0, 0.3)"
        background="grey">
      </seed-progress-ring>
    `;
  }
}
```

Link: https://www.npmjs.com/package/@seed-catalog/progress-ring