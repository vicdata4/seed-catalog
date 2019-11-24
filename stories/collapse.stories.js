import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';

import { seedStyle } from '../styles';
import '../dropdown';
import '../collapse';

storiesOf('Seed Catalog', module)
  .add('Collapse', () => html`
        <style>
            ${seedStyle}

            * {
                font-family: 'Ubuntu', sans-serif;
            }
        </style>
        <h2 class="sd-btn black sm">Collapse</h2>
        <br>
        <seed-collapse>
            <seed-dropdown maxWidth="300" collapse rotate>
                <button id="paragrap" slot="button" class="sd-btn-mix green"><i class="material-icons">keyboard_arrow_down</i>Collapse mode</button>
                <p slot="content" class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
                </p>
            </seed-dropdown>
        </seed-collapse>
        <br><br>
        
        <br><br>
        <seed-collapse>
            <seed-dropdown collapse>
                <button id="lol" slot="button" class="sd-btn-mix red"><i class="material-icons">keyboard_arrow_down</i>Collapse 1</button>
                <p slot="content" class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
                </p>
            </seed-dropdown>
            <seed-dropdown collapse>
                <button id="lock" slot="button" class="sd-btn-mix blue-mate"><i class="material-icons">keyboard_arrow_down</i>Collapse 2</button>
                <p slot="content" class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
                </p>
            </seed-dropdown>
            <seed-dropdown collapse>
                <button id="drot" slot="button" class="sd-btn-mix green-mate"><i class="material-icons">keyboard_arrow_down</i>Collapse 3</button>
                <p slot="content" class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
                </p>
            </seed-dropdown>
            <seed-dropdown collapse>
                <button id="lops" slot="button" class="sd-btn-mix purple"><i class="material-icons">keyboard_arrow_down</i>Collapse 4</button>
                <p slot="content" class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
                    <br><br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
                </p>
                <p slot="content" class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
                    <br><br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
                </p>
            </seed-dropdown>
        </seed-collapse>

        <br><br>
        <seed-collapse>
            <seed-dropdown collapse>
                <button id="lol" slot="button" class="sd-btn-mix black"><i class="material-icons">keyboard_arrow_down</i>Collapse 1</button>
                <p slot="content" class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
                </p>
            </seed-dropdown>
            <seed-dropdown collapse>
                <button id="lock" slot="button" class="sd-btn-mix black"><i class="material-icons">keyboard_arrow_down</i>Collapse 2</button>
                <p slot="content" class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
                </p>
            </seed-dropdown>
            <seed-dropdown collapse>
                <button id="drot" slot="button" class="sd-btn-mix black"><i class="material-icons">keyboard_arrow_down</i>Collapse 3</button>
                <p slot="content" class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
                </p>
            </seed-dropdown>
            <seed-dropdown collapse>
                <button id="lops" slot="button" class="sd-btn-mix black"><i class="material-icons">keyboard_arrow_down</i>Collapse 4</button>
                <p slot="content" class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
                </p>
            </seed-dropdown>
        </seed-collapse>

    `);
