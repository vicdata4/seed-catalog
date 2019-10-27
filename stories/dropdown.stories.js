import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';

import { seedButtonStyle } from '../styles';
import '../components/seed-dropdown';

storiesOf('Seed Library', module)
  .add('Dropdown', () => html`
        <style>
            ${seedButtonStyle}

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
  
       
        <br>
        <h2 class="sd-btn black sm">position fixed (overflow)</h2>
        <br><br>
        <seed-dropdown rotate="true">
            <button id="restaurant" slot="button" class="sd-btn-mix red-mate"><i class="material-icons">arrow_drop_down</i>Menu</button>
            <div slot="content" class="dropdown-links">
                <a href="/">Select type</a>
                <a href="/"><i class="material-icons green-mate sm">fastfood</i>Burgers</a>
                <a href="/"><i class="material-icons green-mate sm">local_dining</i>Salads</a>
                <a href="/"><i class="material-icons green-mate sm">local_cafe</i>Desserts</a>
                <a href="/"><i class="material-icons red sm">local_bar</i>Drinks</a>
            </div>
        </seed-dropdown>

         <seed-dropdown mode="collapse" rotate="true" maxWidth="300">
            <button id="paragrap" slot="button" class="sd-btn-mix black"><i class="material-icons">keyboard_arrow_down</i>Collapse mode</button>
            <p slot="content" class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
            </p>
        </seed-dropdown>

        <seed-dropdown maxWidth="300">
            <button id="lorem" slot="button" class="sd-btn-mix green"><i class="material-icons">local_library</i>Default dropdown</button>
            <p slot="content" class="content">
            Space Exploration Technologies Corp., doing business as SpaceX, is a private American aerospace manufacturer and space transportation services company headquartered in Hawthorne, California. It was founded in 2002 by Elon Musk with the goal of reducing space transportation costs to enable the colonization of Mars.[7][8][9] SpaceX has developed the Falcon launch vehicle family and the Dragon spacecraft family.
            </p>
        </seed-dropdown>

        <seed-dropdown>
            <button id="menu" slot="button" class="sd-btn-mix blue-mate">Dropwdown Links</button>
            <div slot="content" class="content dropdown-links">
                <a href="/"><i class="material-icons blue-mate sm">home</i>Home</a>
                <a href="/"><i class="material-icons blue-mate sm">info</i>About us</a>
                <a href="/"><i class="material-icons blue-mate sm">web</i>Products</a>
                <a href="/"><i class="material-icons blue-mate sm">shop</i>Shop</a>
                <a href="/"><i class="material-icons blue-mate sm">contact_mail</i>Contact</a>
            </div>
        </seed-dropdown>
        <br>
        <h2 class="sd-btn black sm">Collapse</h2>
        <br><br>
        <seed-dropdown mode="collapse" position="relative" rotate="true">
            <button id="lol" slot="button" class="sd-btn-mix black"><i class="material-icons">keyboard_arrow_down</i>Collapse 1</button>
            <p slot="content" class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
            </p>
        </seed-dropdown>
        <seed-dropdown mode="collapse" position="relative" rotate="true">
            <button id="lock" slot="button" class="sd-btn-mix black"><i class="material-icons">keyboard_arrow_down</i>Collapse 2</button>
            <p slot="content" class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
            </p>
        </seed-dropdown>
        <seed-dropdown mode="collapse" position="relative" rotate="true">
            <button id="drot" slot="button" class="sd-btn-mix black"><i class="material-icons">keyboard_arrow_down</i>Collapse 3</button>
            <p slot="content" class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
            </p>
        </seed-dropdown>
        <seed-dropdown mode="collapse" position="relative" rotate="true">
            <button id="lops" slot="button" class="sd-btn-mix black"><i class="material-icons">keyboard_arrow_down</i>Collapse 4</button>
            <p slot="content" class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
            </p>
        </seed-dropdown>

    `);