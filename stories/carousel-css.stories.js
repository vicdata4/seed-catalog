import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';
import '../carousel-css';
import '../carousel-stepper';
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

            .blu {
              background-color: #43aad7;
            }

            .orang {
              background-color: #e18b46;
            }

            .gree {
              background-color: #5dbe59;
            }

            .purpl {
              background-color: #b250b2;
            }
        </style>
        <button class="sd-btn-mix black title"><i class="material-icons green">settings_overscan</i>Carousel CSS **WIP**</button>

        <seed-carousel-css>
          <card-examples class="blu"></card-examples>
          <card-examples class="orang"></card-examples>
          <card-examples class="gree"></card-examples>
          <card-examples class="purpl"></card-examples>
          <seed-carousel-stepper slot="stepper"></seed-carousel-stepper>
        </seed-carousel-css>
        <br><br><br>
        <seed-carousel-css>
          <card-examples class="blu" .width="${200}" .height="${200}"></card-examples>
          <card-examples class="orang" .width="${200}" .height="${200}"></card-examples>
          <card-examples class="gree" .width="${200}" .height="${200}"></card-examples>
          <card-examples class="purpl" .width="${200}" .height="${200}"></card-examples>
          <card-examples class="blu" .width="${200}" .height="${200}"></card-examples>
          <card-examples class="orang" .width="${200}" .height="${200}"></card-examples>
          <card-examples class="gree" .width="${200}" .height="${200}"></card-examples>
          <card-examples class="purpl" .width="${200}" .height="${200}"></card-examples>
          <seed-carousel-stepper slot="stepper"></seed-carousel-stepper>
        </seed-carousel-css>
    `);
