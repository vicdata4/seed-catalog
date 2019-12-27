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
                align-items: center;
                text-align: left;
            }

            .stepper {
                position: relative;
                display: flex;
                flex-flow: row wrap;
                justify-content: space-between;
                width: max-content;
                
            }

            .stepper > seed-stepper {
                width: auto;
            }
        </style>
        <button class="sd-btn-mix black title"><i class="material-icons green-mate">more_horiz</i>Stepper</button>
        <br>
        <br>
            <h6 style="color: white;">Check out Carusel section to see more examples.</h6>
        <div style="width: 30%;margin-left: 20px;display: flex; flex-direction: column;">
            <div class="stepper">
                <seed-stepper style="width: 180px;" .index="${1}" .size="${4}"></seed-stepper>
                <seed-stepper .square="${true}" .index="${3}" .size="${6}"></seed-stepper>
            </div>
            <div class="stepper">
                <seed-stepper style="width: 180px;" .index="${2}" .size="${5}" .colorActive="${'var(--seed-color-blue)'}" .colorBack="${'var(--seed-color-blue-focus)'}"></seed-stepper>
                <seed-stepper .square="${true}" .index="${2}" .size="${5}" .colorActive="${'var(--seed-color-blue)'}" .colorBack="${'var(--seed-color-blue-focus)'}"></seed-stepper>
            </div>
            <div class="stepper">
                <seed-stepper style="width: 180px;" .index="${1}" .size="${4}" .colorActive="${'var(--seed-color-red-hover)'}" .colorBack="${'var(--seed-color-red-mate-focus)'}"></seed-stepper>
                <seed-stepper .square="${true}" .index="${1}" .size="${4}" .colorActive="${'var(--seed-color-red-hover)'}" .colorBack="${'var(--seed-color-red-mate-focus)'}"></seed-stepper>
            </div>
            <div class="stepper">
                <seed-stepper style="width: 180px;" .index="${2}" .size="${6}" .colorActive="${'var(--seed-color-purple)'}" .colorBack="${'var(--seed-color-purple-focus)'}"></seed-stepper>
                <seed-stepper .square="${true}" .index="${2}" .size="${6}" .colorActive="${'var(--seed-color-purple)'}" .colorBack="${'var(--seed-color-purple-focus)'}"></seed-stepper>
            </div>

            <div class="stepper">
                <seed-stepper style="width: 180px;" .index="${1}" .size="${4}" .colorActive="${'var(--seed-color-yellow)'}" .colorBack="${'var(--seed-color-yellow-focus)'}"></seed-stepper>
                <seed-stepper .square="${true}" .index="${1}" .size="${4}" .colorActive="${'var(--seed-color-yellow)'}" .colorBack="${'var(--seed-color-yellow-focus)'}"></seed-stepper>
            </div>

            <div class="stepper">
                <seed-stepper style="width: 180px;" .index="${3}" .size="${5}" .colorActive="${'var(--seed-color-green)'}" .colorBack="${'var(--seed-color-green-focus)'}"></seed-stepper>
                <seed-stepper .square="${true}" .index="${3}" .size="${5}" .colorActive="${'var(--seed-color-green)'}" .colorBack="${'var(--seed-color-green-focus)'}"></seed-stepper>
            </div>
        </div>
 
        <p class="package">
    <span class="gre"><</span><span class="blu">seed-spinner</span> <span class="light-txt">.index</span>=<span class="ora">"\$\{0}"</span> <span class="light-txt">.size</span>=<span class="ora">"\$\{4}"</span><span class="gre">></span><span class="gre">${'</'}</span><span class="blu">seed-spinner</span><span class="gre">></span>

    <span class="gre"><</span><span class="blu">seed-spinner</span> <span class="light-txt">.index</span>=<span class="ora">"\$\{0}"</span> <span class="light-txt">.size</span>=<span class="ora">"\$\{3}"</span> <span class="light-txt">.square</span>=<span class="ora">"\$\{true}"</span><span class="gre">></span><span class="gre">${'</'}</span><span class="blu">seed-spinner</span><span class="gre">></span>

    <span class="gre"><</span><span class="blu">seed-spinner</span> <span class="light-txt">.index</span>=<span class="ora">"\$\{0}"</span> <span class="light-txt">.size</span>=<span class="ora">"\$\{3}"</span> <span class="light-txt">.colorActive</span>=<span class="ora">"\$\{'#2dabb4'}"</span> <span class="light-txt">.colorBack</span>=<span class="ora">"\$\{'#2dabb445'}"</span> <span class="gre">${'</'}</span><span class="blu">seed-spinner</span><span class="gre">></span>
    </p>
    `);
