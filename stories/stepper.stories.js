import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';
import { seedStyle } from '../styles';
import { storyCommonStyles, cssTemplateColors } from '../.storybook/common-styles';
import '../stepper';

storiesOf('Seed Catalog', module)
  .add('Stepper', () => html`
        <style>
            ${seedStyle}
            ${storyCommonStyles}
            ${cssTemplateColors}

            seed-stepper {
                justify-content: flex-start;
                text-align: left;
            }
        </style>
        <button class="sd-btn-mix black title"><i class="material-icons green-mate">more_horiz</i>Stepper</button>
        <br>
        <br>
            <h6 style="color: white;">Check out Carusel section to see more examples.</h6>
        <div style="width: 30%;margin-left: 20px;display: flex;">
            <div style="margin-right: 50px;">
                <seed-stepper .index="${0}" .size="${5}" .selectedColor="${'purple'}" .colorBack="${'yellow'}"></seed-stepper>
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
 
        <p class="package">
    <span class="gre"><</span><span class="blu">seed-spinner</span> <span class="light-txt">.index</span>=<span class="ora">"\$\{0}"</span> <span class="light-txt">.size</span>=<span class="ora">"\$\{4}"</span><span class="gre">></span><span class="gre">${'</'}</span><span class="blu">seed-spinner</span><span class="gre">></span>

    <span class="gre"><</span><span class="blu">seed-spinner</span> <span class="light-txt">.index</span>=<span class="ora">"\$\{0}"</span> <span class="light-txt">.size</span>=<span class="ora">"\$\{3}"</span> <span class="light-txt">.square</span>=<span class="ora">"\$\{true}"</span><span class="gre">></span><span class="gre">${'</'}</span><span class="blu">seed-spinner</span><span class="gre">></span>
    </p>
    `);
