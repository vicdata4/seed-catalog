![](logo.png?v=4&s=100)

## Seed Catalog ![#fff](https://placehold.it/15/fff/000000?text=+)![#bf4545](https://placehold.it/15/bf4545/000000?text=+)![#fff](https://placehold.it/15/fff/000000?text=+)![#3f76b6](https://placehold.it/15/3f76b6/000000?text=+)![#fff](https://placehold.it/15/fff/000000?text=+)![#1C8281](https://placehold.it/15/1C8281/000000?text=+)![#fff](https://placehold.it/15/fff/000000?text=+)![#e6af0e](https://placehold.it/15/e6af0e/000000?text=+)![#fff](https://placehold.it/15/fff/000000?text=+)![#903e8d](https://placehold.it/15/903e8d/000000?text=+)![#fff](https://placehold.it/15/fff/000000?text=+)![#2f2d2d](https://placehold.it/15/2f2d2d/000000?text=+)

### [Storybook](https://seed-catalog.com)

Seed-catalog is a free and open-source `web-components library`. It contains CSS-styles and standards-based web templates such as buttons, modals, dropdowns and other interface components.

### [Dependencies](package.json)

- [LitElement](https://lit-element.polymer-project.org) Web Components
- [Storybook](https://storybook.js.org) WC Interface (dev)
- [ESLint](https://eslint.org) Coding style (dev)
- [Open-wc](https://open-wc.org/) Testing recommendations (Karma, Mocha, Chai)


###  Add as project dependency (98kb)

from `package.json`

```js
"dependencies": {
    ...
    "seed-catalog": "git://github.com/vicdata4/seed-catalog.git"
}
```

### Run Storybook

`git clone https://github.com/vicdata4/seed-catalog.git`

`npm install`

`npm run storybook`

### Run tests

`npm run test`

Karma coverage

## Catalog

- [Seed Style](https://seed-catalog.com/?path=/story/seed-catalog--buttons)
- [Carousel CSS](https://seed-catalog.com/?path=/story/seed-catalog--carousel-css)
- [Carousel JS](https://seed-catalog.com/?path=/story/seed-catalog--carousel)
- [Collapse](https://seed-catalog.com/?path=/story/seed-catalog--collapse)
- [Dropdown](https://seed-catalog.com/?path=/story/seed-catalog--dropdown)
- [Modal](https://seed-catalog.com/?path=/story/seed-catalog--modal)
- [Spinner](https://seed-catalog.com/?path=/story/seed-catalog--spinner)
- [Progress ring](https://seed-catalog.com/?path=/story/seed-catalog--progress-ring)
- [Stepper](https://seed-catalog.com/?path=/story/seed-catalog--stepper)

## Style classes

#### Buttons

You can play with different combinations of colors, types and sizes according with the requirements of your application or website.

- [Material Icons](https://material.io/resources/icons) Crafted symbols

Material icons is integrated as dependency of this class, so you can create more complex and dynamic buttons, easy and fast just importing `seedStyle` class.

```js

import { LitElement, css } from 'lit-element';
import { seedStyle } from 'seed-catalog/styles.js';

class MyComponent extends LitElement {
    static get styles() {
        return [
            seedStyle,
            css`
                ...
            `
        ];
    }

    render() {
        return html`
            <button class="sd-btn red">Red</button>
            <button class="sd-btn-mix blue"><i class="material-icons">folder</i>Folder</button>
            <button class="sd-icon circle"><i class="material-icons">face</i></button>
        `;
    }
}
```

##### color classes:
- ![](https://placehold.it/15/de3d4c/000000?text=+) `red`
- ![](https://placehold.it/15/22ac41/000000?text=+) `green`
- ![](https://placehold.it/15/2dabb4/000000?text=+) `blue`
- ![](https://placehold.it/15/e6af0e/000000?text=+) `yellow`
- ![](https://placehold.it/15/903e8d/000000?text=+) `purple`
- ![](https://placehold.it/15/2f2d2d/000000?text=+) `black`
- ![](https://placehold.it/15/d58309/000000?text=+) `orange`
- ![](https://placehold.it/15/bf4545/000000?text=+) `red-mate`
- ![](https://placehold.it/15/1C8281/000000?text=+) `green-mate`
- ![](https://placehold.it/15/3f76b6/000000?text=+) `blue-mate`
- ![](https://placehold.it/15/fff/000000?text=+) `default`

### How to use

We recommend to see the [storybook documentation](https://seed-catalog.com) to learn more about seed-components catalog and how to use them.