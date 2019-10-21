import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';

import { seedButtonStyle } from '../styles';
import '../components/seed-dropdown';

storiesOf('Seed Library', module)
  .add('Collapse', () => html`
        <style>
            ${seedButtonStyle}
        </style>
  
        <seed-dropdown>
            <button slot="button" class="sd-btn-mix red"><i class="material-icons">keyboard_arrow_down</i>Open collapse</button>
            <div slot="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
            </div>
        </seed-dropdown>

        <seed-dropdown>
        <button slot="button" class="sd-btn-mix blue">Link</button>
        <div slot="content">
            <a href="#">Hola</a>
            <a href="#">Hola</a>
            <a href="#">Hola</a>
            <a href="#">Hola</a>
            <a href="#">Hola</a>
        </div>
        </seed-dropdown>
    `);