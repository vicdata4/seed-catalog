import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';
import '../carousel-css';
import '../components/utils/card-examples';
import { seedStyle } from '../styles';
import { storyCommonStyles, cssTemplateColors } from '../.storybook/common-styles';

storiesOf('Seed Catalog', module)
  .add('Carousel Css', () => html`
        <style>
            ${seedStyle}
            ${storyCommonStyles}
            ${cssTemplateColors}

            .title {
                margin-bottom: 40px;
            }
        </style>
        <button class="sd-btn-mix black title"><i class="material-icons green">settings_overscan</i>Carousel CSS</button>

        <seed-carousel-css>
          <card-examples style="background-color: #43aad7;"></card-examples>
          <card-examples style="background-color: #e18b46;"></card-examples>
          <card-examples style="background-color: #5dbe59;"></card-examples>
          <card-examples style="background-color: #b250b2;"></card-examples>
          <p slot="stepper">Stepper</p>
        </seed-carousel-css>
        <br><br><br>
        <seed-carousel-css>
          <card-examples style="background-color: #43aad7;" .width="${200}" .height="${200}"></card-examples>
          <card-examples style="background-color: #e18b46;" .width="${200}" .height="${200}"></card-examples>
          <card-examples style="background-color: #5dbe59;" .width="${200}" .height="${200}"></card-examples>
          <card-examples style="background-color: #b250b2;" .width="${200}" .height="${200}"></card-examples>
          <card-examples style="background-color: #43aad7;" .width="${200}" .height="${200}"></card-examples>
          <card-examples style="background-color: #e18b46;" .width="${200}" .height="${200}"></card-examples>
          <card-examples style="background-color: #5dbe59;" .width="${200}" .height="${200}"></card-examples>
          <card-examples style="background-color: #b250b2;" .width="${200}" .height="${200}"></card-examples>
          <p slot="stepper">Stepper</p>
        </seed-carousel-css>
    `);
