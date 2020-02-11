import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';
import '../carousel-css';
import '../components/utils/card-examples';
import { seedStyle } from '../styles';
import { storyCommonStyles, cssTemplateColors } from '../.storybook/common-styles';

storiesOf('Seed Catalog', module)
  .add('Carousel Css', () => html`
        <style>
            ${storyCommonStyles}
            ${cssTemplateColors}

            .title {
              margin-bottom: 40px;
            }

            .blue {
              background-color: #43aad7;
            }

            .orange {
              background-color: #e18b46;
            }

            .green {
              background-color: #5dbe59;
            }

            .purple {
              background-color: #b250b2;
            }
        </style>
        <button class="sd-btn-mix black title"><i class="material-icons green">settings_overscan</i>Carousel CSS</button>

        <seed-carousel-css>
          <card-examples class="blue"></card-examples>
          <card-examples class="orange"></card-examples>
          <card-examples class="green"></card-examples>
          <card-examples class="purple"></card-examples>
          <p slot="stepper">Stepper</p>
        </seed-carousel-css>
        <br><br><br>
        <seed-carousel-css>
          <card-examples class="blue" .width="${200}" .height="${200}"></card-examples>
          <card-examples class="orange" .width="${200}" .height="${200}"></card-examples>
          <card-examples class="green" .width="${200}" .height="${200}"></card-examples>
          <card-examples class="purple" .width="${200}" .height="${200}"></card-examples>
          <card-examples class="blue" .width="${200}" .height="${200}"></card-examples>
          <card-examples class="orange" .width="${200}" .height="${200}"></card-examples>
          <card-examples class="green" .width="${200}" .height="${200}"></card-examples>
          <card-examples class="purple" .width="${200}" .height="${200}"></card-examples>
          <p slot="stepper">Stepper</p>
        </seed-carousel-css>
    `);
