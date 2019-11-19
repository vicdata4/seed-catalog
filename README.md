# Seed Catalog

[Storybook - Seed Catalog](https://seed-catalog.web.app)

## Project installation

git clone https://github.com/vicdata4/seed-catalog.git

npm install

npm run storybook

##  Add as project dependency

LitElement is required.

from `package.json`

```js
"dependencies": {
    ...
    "lit-element": "^2.0.1",
    "seed-catalog": "git://github.com/vicdata4/seed-catalog.git"
}
```

## Components

```js
    // import style.js file

    import { seedButtonStyle } from 'seed-catalog/styles.js';
```

#### `sd-btn class`
```js
    <button class="sd-btn red">Submit</button>
```
#### `sd-btn-mix`
```js
    <button class="sd-btn-mix blue"><i class="material-icons">folder</i>Folder</button>
```
#### `sd-icon`

```js
    <button class="sd-icon red"><i class="material-icons">folder</i></button>
```
#### `sd-icon circle`
```js
    <button class="sd-icon circle green"><i class="material-icons">face</i></button>
```
### `Modal`

```js
    // import seed-modal
    import 'seed-catalog/seed-modal.js';
    // and combine with sd-btn class to improve your performance
    import { seedButtonStyle } from 'seed-catalog/styles.js';

    // lit element example
    static get styles() {
        return [
            seedButtonStyle,
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

### `Dropdown / Collapse`

```js
    // import seed-dropdown
    import 'seed-catalog/seed-dropdown.js';
    // and combine with sd-btn class to improve your performance
    import { seedButtonStyle } from 'seed-catalog/styles.js';

    // lit element example
    static get styles() {
        return [
            seedButtonStyle,
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

