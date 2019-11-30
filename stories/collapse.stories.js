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
            <seed-dropdown maxWidth="300" rotate>
                <button id="paragrap" slot="button" class="sd-btn-mix red-mate"><i class="material-icons">keyboard_arrow_down</i>Collapse relative</button>
                <p slot="content" class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
                </p>
            </seed-dropdown>
        </seed-collapse>

        <seed-collapse>
            <seed-dropdown position="absolute" maxWidth="300" rotate>
                <button id="paragrapx" slot="button" class="sd-btn-mix blue-mate"><i class="material-icons">keyboard_arrow_down</i>Collapse absolute</button>
                <p slot="content" class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
                </p>
            </seed-dropdown>
        </seed-collapse>

        <seed-collapse>
            <seed-dropdown>
                <button id="paragrapx" slot="button" class="sd-btn-mix green-mate"><i class="material-icons">keyboard_arrow_down</i>Default Collapse</button>
                <p slot="content" class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
                </p>
            </seed-dropdown>
        </seed-collapse>
    `);
