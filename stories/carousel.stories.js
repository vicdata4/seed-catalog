import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';
import '../components/seed-carousel';
import { seedButtonStyle } from '../styles';

storiesOf('Seed Catalog', module)
  .add('Carousel', () => html`
        <style>
            ${seedButtonStyle}

            * {
                font-family: 'Ubuntu', sans-serif;
            }
        </style>
        <h2 class="sd-btn black sm">Stepper / Dots component</h2>
        <seed-carousel>
        
      
                <div slot="carousel">
                  <div>Hello</div>
                  <div>Hello1</div>
                  <div>Hello2</div>
                  <div>Hello3</div>
                  <div>Hello4</div>
                </div>
   
        </seed-carousel>
    `);