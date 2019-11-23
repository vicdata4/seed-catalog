import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';
import '../components/seed-carousel';
import { seedButtonStyle } from '../styles';
import carousel1 from '../assets/images/carousel_1.jpg';
import carousel2 from '../assets/images/carousel_2.jpg';
import carousel3 from '../assets/images/carousel_3.jpg';
import carousel4 from '../assets/images/carousel_4.jpg';

storiesOf('Seed Catalog', module)
  .add('Carousel', () => html`
        <style>
            ${seedButtonStyle}

            * {
                font-family: 'Ubuntu', sans-serif;
            }

            seed-carousel > div {
                color: white;
            }

            .due-card {
                display: flex;
            }

            .due-card > div {
                width: 100%;
            }

            @media screen and (min-width: 768px) {
                .due-card {
                display: flex;
            }
            }
        </style>
        <h2 class="sd-btn black sm">Carousel Standard</h2>
        <seed-carousel arrows stepper>
            <div class="black">Black</div> 
            <div class="red">Red</div>
            <div class="blue">Blue</div>
            <div class="green">Green</div>    
        </seed-carousel>
        <br><br>
        <h2 class="sd-btn black sm">Carousel small version</h2>
        <div class="due-card">
            <div style="
                display: flex;
                flex: 1 1;
                margin: 0;">
                <seed-carousel stepper>
                    <div class="green-mate">Green mate</div>      
                    <div class="blue">Blue</div>
                    <div class="purple">Purple</div>
                </seed-carousel>
            </div>
            <div style="
                display: flex;
                flex: 1 1;
                height: auto;
                margin: 0;">
                <seed-carousel arrows>
                    <div class="red-mate">Red</div>
                    <div class="green">Green</div>
                    <div class="black">Black</div>
                    <div class="purple">Purple</div>
                    <div class="orange">Orange</div>      
                </seed-carousel>
            </div>
        </div>
        <div class="due-card">
            <div style="
                display: flex;
                flex: 1 1;
                height: auto;
                margin: 0;">
                <seed-carousel>
                    <div class="green">Green</div>      
                    <div class="blue">Blue</div>
                    <div class="purple">Purple</div>
                </seed-carousel>
            </div>
            <div style="
                display: flex;
                flex: 1 1;
                height: auto;
                margin: 0;">
                <seed-carousel arrows stepper>
                    <div class="black">Black</div>
                    <div class="green">Green</div>
                    <div class="red">Red</div>
                    <div class="purple">Purple</div>
                    <div class="orange">Orange</div>      
                </seed-carousel>
            </div>
        </div>
        <br><br>
        <h2 class="sd-btn black sm">Carousel photos</h2>
        <seed-carousel arrows stepper>
            <img src="${carousel1}" alt="carousel1">
            <img src="${carousel2}" alt="carousel2">
            <img src="${carousel3}" alt="carousel3">
            <img src="${carousel4}" alt="carousel4">  
        </seed-carousel>
        <br><br>
        <h2 class="sd-btn black sm">Carousel auto</h2>
        <seed-carousel auto stepper>
            <div class="green">Green</div>
            <div class="red">Red</div>
            <div class="blue">Blue</div>
            <div class="purple">Purple</div>
            <div class="orange">Orange</div>      
        </seed-carousel>
        
      
        
    `);