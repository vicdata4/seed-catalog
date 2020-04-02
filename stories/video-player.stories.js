import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';
import { seedStyle } from '../styles';
import { storyCommonStyles, cssTemplateColors } from '../.storybook/common-styles';
import '../video-player';

storiesOf('Seed Catalog', module)
  .add('Video Player', () => html`
        <style>
            ${seedStyle}
            ${storyCommonStyles}
            ${cssTemplateColors}

        </style>
        <button class="sd-btn-mix black title"><i class="material-icons green-mate">more_horiz</i>Video Player</button>
        <br>
        <h6 style="color: white;">Check out Carusel section to see more examples.</h6>
      
    `);
