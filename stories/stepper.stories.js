import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';
import { seedStyle } from '../styles';
import '../stepper';

storiesOf('Seed Catalog', module)
  .add('Stepper', () => html`
        <style>
            ${seedStyle}

            * {
                font-family: 'Ubuntu', sans-serif;
            }

            seed-stepper {
                justify-content: flex-start;
                text-align: left;
            }

            .green-mate {
                --seed-color-green-mate: #1C8281;
                --seed-color-green-mate-focus: #2dabb445;
                --seed-color-green-mate-hover: rgb(51, 121, 120);
            }

            .title {
                width: 100%;
                text-align: left;
            }
            .black {
                --seed-color-black: #2f2d2d;
                --seed-color-black-focus: #43434387;
                --seed-color-black-hover: #434343;
            }
        </style>
        <button class="sd-btn-mix black title"><i class="material-icons green-mate">more_horiz</i>Stepper</button>
        <br>
        <br>
            <h6 style="color: white;">Check out Carusel section to see more examples.</h6>
        <div style="width: 30%;margin-left: 20px;display: flex;">
            <div style="margin-right: 50px;">
                <seed-stepper .index="${0}" .size="${5}"></seed-stepper>
                <seed-stepper .index="${1}" .size="${4}"></seed-stepper>
                <seed-stepper .index="${2}" .size="${3}"></seed-stepper>
                <seed-stepper .index="${1}" .size="${2}"></seed-stepper>
                <seed-stepper .index="${0}" .size="${1}"></seed-stepper>
            </div>
            <div>
                <seed-stepper .index="${1}" .size="${4}" .square="${true}"></seed-stepper>
                <seed-stepper .index="${2}" .size="${3}" .square="${true}"></seed-stepper>
                <seed-stepper .index="${1}" .size="${2}" .square="${true}"></seed-stepper>
                <seed-stepper .index="${3}" .size="${5}" .square="${true}"></seed-stepper>
                <seed-stepper .index="${1}" .size="${4}" .square="${true}"></seed-stepper>
                <seed-stepper .index="${0}" .size="${4}" .square="${true}"></seed-stepper>
            </div>
        </div>
        
    `);
