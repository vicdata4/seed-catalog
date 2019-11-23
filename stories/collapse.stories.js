import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';

import { seedStyle } from '../styles';
import '../components/seed-dropdown';
import '../components/seed-collapse';

storiesOf('Seed Catalog', module)
  .add('Collapse', () => html`
        <style>
            ${seedStyle}

            * {
                font-family: 'Ubuntu', sans-serif;
            }
            .dropdown-links > a {
                color: #483f3f;
                text-decoration: none;
                
                display: flex;
                align-items: center;
                padding: 8px;
                padding-left: 20px;
                padding-right: 50px;
            }

            .dropdown-links > a:hover {
                background-color: #f9f9f9;
            }

            .dropdown-links > a > i{
                margin-right: 15px;
            }
        </style>
        <h2 class="sd-btn black sm">Collapse</h2>
        <br>
        <seed-collapse>
            <seed-dropdown mode="collapse" rotate="true" maxWidth="300">
                <button id="paragrap" slot="button" class="sd-btn-mix green"><i class="material-icons">keyboard_arrow_down</i>Collapse mode</button>
                <p slot="content" class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
                </p>
            </seed-dropdown>
        </seed-collapse>
        <br><br>
        
        <br><br>
        <seed-collapse>
            <seed-dropdown mode="collapse">
                <button id="lol" slot="button" class="sd-btn-mix red"><i class="material-icons">keyboard_arrow_down</i>Collapse 1</button>
                <p slot="content" class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
                </p>
            </seed-dropdown>
            <seed-dropdown mode="collapse">
                <button id="lock" slot="button" class="sd-btn-mix blue-mate"><i class="material-icons">keyboard_arrow_down</i>Collapse 2</button>
                <p slot="content" class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
                </p>
            </seed-dropdown>
            <seed-dropdown mode="collapse">
                <button id="drot" slot="button" class="sd-btn-mix green-mate"><i class="material-icons">keyboard_arrow_down</i>Collapse 3</button>
                <p slot="content" class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
                </p>
            </seed-dropdown>
            <seed-dropdown mode="collapse">
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
            <seed-dropdown mode="collapse">
                <button id="lol" slot="button" class="sd-btn-mix black"><i class="material-icons">keyboard_arrow_down</i>Collapse 1</button>
                <p slot="content" class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
                </p>
            </seed-dropdown>
            <seed-dropdown mode="collapse">
                <button id="lock" slot="button" class="sd-btn-mix black"><i class="material-icons">keyboard_arrow_down</i>Collapse 2</button>
                <p slot="content" class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
                </p>
            </seed-dropdown>
            <seed-dropdown mode="collapse">
                <button id="drot" slot="button" class="sd-btn-mix black"><i class="material-icons">keyboard_arrow_down</i>Collapse 3</button>
                <p slot="content" class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
                </p>
            </seed-dropdown>
            <seed-dropdown mode="collapse">
                <button id="lops" slot="button" class="sd-btn-mix black"><i class="material-icons">keyboard_arrow_down</i>Collapse 4</button>
                <p slot="content" class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
                </p>
            </seed-dropdown>
        </seed-collapse>

    `);
