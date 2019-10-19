# Seed Catalog

[Storybook - Seed Catalog](https://seed-catalog.web.app)

## Project installation

git clone https://github.com/vicdata4/seed-catalog.git

npm install

npm run storybook

##  Add as project dependency

from `package.json`

```js
"dependencies": {
    ...
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

    <seed-modal>
        <button slot="button" class="sd-btn-mix red">
            <i class="material-icons">people</i>Open modal
        </button>
        <div slot="header">...header content</div>
        <div slot="content">...content</div>
        <div slot="footer">...footer content</div> 
    </seed-modal>
```

