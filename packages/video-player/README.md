![](https://cdn.jsdelivr.net/gh/vicdata4/seed/assets/logo_md.png?v=4&s=100)

## Seed Video Player ![#fff](https://via.placeholder.com/15/fff/000000?text=+)![#bf4545](https://via.placeholder.com/15/bf4545/000000?text=+)![#fff](https://via.placeholder.com/15/fff/000000?text=+)![#3f76b6](https://via.placeholder.com/15/3f76b6/000000?text=+)![#fff](https://via.placeholder.com/15/fff/000000?text=+)![#1C8281](https://via.placeholder.com/15/1C8281/000000?text=+)![#fff](https://via.placeholder.com/15/fff/000000?text=+)![#e6af0e](https://via.placeholder.com/15/e6af0e/000000?text=+)![#fff](https://via.placeholder.com/15/fff/000000?text=+)![#903e8d](https://via.placeholder.com/15/903e8d/000000?text=+)![#fff](https://via.placeholder.com/15/fff/000000?text=+)![#2f2d2d](https://via.placeholder.com/15/2f2d2d/000000?text=+)

### [Storybook](https://vicdata4.github.io/?path=/story/seed-catalog--video-player)

### [Dependencies](package.json)

- [LitElement](https://lit-element.polymer-project.org) Web Components

Npm

```
npm install @seed-catalog/video-player
```

How to use

```js
import { LitElement, html, css } from 'lit-element';
import '@seed-catalog/video-player';

class MyComponent extends LitElement {
  render() {
    return html`
      <seed-video-player src="https://url.to/download-file.mp4" autoplay mute></seed-video-player>
    `;
  }
}
```

Link: https://www.npmjs.com/package/@seed-catalog/video-player