![](assets/logo_md.png?v=4&s=100)

## Seed Catalog [Storybook](https://seed-catalog.web.app)

Seed-catalog is a free and open-source `web-components library`. It contains CSS-styles and standard-web based templates such as buttons, modals, dropdowns and other interface components.


### Dependencies:
- [Storybook](https://storybook.js.org) WC Interface
- [LitElement](https://lit-element.polymer-project.org) Web Components
- [ESLint](https://eslint.org) Coding style


###  Add as project dependency

`LitElement is required.`

from `package.json`

```js
"dependencies": {
    ...
    "lit-element": "^2.0.1",
    "seed-catalog": "git://github.com/vicdata4/seed-catalog.git"
}
```

### Run Storybook

`git clone https://github.com/vicdata4/seed-catalog.git`

`npm install`

`npm run storybook`

## Catalog

- [Button classes](#button-classes)
- [Carousel](#carousel)
- [Collapse](#collapse)
- [Dropdown](#dropdown)
- [Modal](#modal)
- [Stepper](#stepper)

## Button classes

You can play with different combinations of colors, types and sizes according with the requirements of your application or website.

- [Material Icons](https://material.io/resources/icons) Crafted symbols

Material icons is integrated as dependency of this class, so you can create more complex and dynamic buttons, easy and fast just importing `seedStyle` class.

```js
    // example using lit-element
    // import styles.js file

    import { LitElement, css } from 'lit-element';
    import { seedStyle } from 'seed-catalog/styles.js';

    class MyClass extends LitElement {
        static get styles() {
            return [
                seedStyle,
                css`
                    /** your css **/
                `
            ];
        }

        render() {
            return html`
                <button class="sd-btn red">Submit</button>
                <button class="sd-btn-mix blue"><i class="material-icons">folder</i>Folder</button>
                <button class="sd-icon red"><i class="material-icons">folder</i></button>
                <button class="sd-icon circle green"><i class="material-icons">face</i></button>
            `;
        }
    }
```

### classes: `sd-btn`, `sd-btn-mix`, `sd-btn-mixr`, `sd-icon`, `circle`, `sd-btn-empty`

### colors:

<div style="display: inline-block; width: fit-content; background-color: #de3d4c; padding: 5px 15px; margin: 2px;">red</div>
<div style="display: inline-block; width: fit-content; background-color: #22ac41; padding: 5px 15px; margin: 2px;">green</div>
<div style="display: inline-block; width: fit-content; background-color: #2dabb4; padding: 5px 15px; margin: 2px;">blue</div>
<div style="display: inline-block; width: fit-content; background-color: #e6af0e; padding: 5px 15px; margin: 2px;">yellow</div>
<div style="display: inline-block; width: fit-content; background-color: #903e8d; padding: 5px 15px; margin: 2px;">purple</div>
<div style="display: inline-block; width: fit-content; background-color: #2f2d2d; padding: 5px 15px; margin: 2px;">black</div>
<div style="display: inline-block; width: fit-content; background-color: #d58309; padding: 5px 15px; margin: 2px;">orange</div>
<div style="display: inline-block; width: fit-content; background-color: #1C8281; padding: 5px 15px; margin: 2px;">green-mate</div>
<div style="display: inline-block; width: fit-content; background-color: #bf4545; padding: 5px 15px; margin: 2px;">red-mate</div>
<div style="display: inline-block; width: fit-content; background-color: rgb(63, 118, 182); padding: 5px 15px; margin: 2px;">blue-mate</div>

### colors: `red`, `green`, `blue`, `yellow`, `purple`, `black`, `orange`, `green-mate`, `red-mate`, `blue-mate`

### size: `sm`, `lg`

### `Modal`

```js
    // import seed-modal
    import 'seed-catalog/seed-modal.js';
    // and combine with sd-btn class to improve your performance
    import { seedStyle } from 'seed-catalog/styles.js';

    // lit element example
    static get styles() {
        return [
            seedStyle,
            css`
                ...
            `
        ];
    }

    <seed-modal>
        <button slot="button" class="sd-btn-mix red">
            <i class="material-icons">people</i>Open modal
        </button>
        <div slot="header">...header content</div>
        <div slot="content">...content</div>
        <div slot="footer">...footer content</div> 
    </seed-modal>
```

### `Dropdown`

```js
    // import seed-dropdown
    import 'seed-catalog/seed-dropdown.js';
    // and combine with sd-btn class to improve your performance
    import { seedStyle } from 'seed-catalog/styles.js';

    // lit element example
    static get styles() {
        return [
            seedStyle,
            css`
                ...
            `
        ];
    }

    // dropdown with links
    <seed-dropdown>
        <button id="menu" slot="button" class="sd-btn-mix blue-mate">Dropwdown Links</button>
        <div slot="content" class="content dropdown-links">
            <a href="/"><i class="material-icons blue-mate sm">home</i>Home</a>
            <a href="/aboutus"><i class="material-icons blue-mate sm">info</i>About us</a>
            <a href="/products"><i class="material-icons blue-mate sm">web</i>Products</a>
            <a href="/shop"><i class="material-icons blue-mate sm">shop</i>Shop</a>
            <a href="/contact"><i class="material-icons blue-mate sm">contact_mail</i>Contact</a>
        </div>
    </seed-dropdown>

    // dropdown with paragraph
    <seed-dropdown
        mode="collapse"
        position="relative"
        rotate="true">
        <button id="lol" slot="button" class="sd-btn-mix black"><i class="material-icons">keyboard_arrow_down</i>Collapse 1</button>
        <p slot="content" class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
        </p>
    </seed-dropdown>
```

