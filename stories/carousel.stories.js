import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';
import '../carousel';
import { seedStyle } from '../styles';
import carousel1 from '../assets/images/carousel_1.jpg';
import carousel2 from '../assets/images/carousel_2.jpg';
import carousel3 from '../assets/images/carousel_3.jpg';
import carousel4 from '../assets/images/carousel_4.jpg';

storiesOf('Seed Catalog', module)
  .add('Carousel', () => html`
        <style>
            ${seedStyle}

            * {
                font-family: 'Ubuntu', sans-serif;
            }

            seed-carousel > div {
                color: white;
            }

            .due-card {
                display: flex;
                flex-flow: row wrap;
            }

            .card {
                width: 100%;
            }

            @media screen and (min-width: 768px) {
                .card {
                    width: 50%;
                }
            }
        </style>
        <h2 class="black">· Carousel - mobile touch</h2>
        <seed-carousel arrows stepper>
            <div class="black">Black</div> 
            <div class="red">Red</div>
            <div class="blue">Blue</div>
            <div class="green">Green</div>    
        </seed-carousel>
        <br><br>
        <h2 class="black">· Carousel combinations</h2>
        <div class="due-card">
            <seed-carousel class="card" stepper>
                <div class="green-mate">Green mate</div>      
                <div class="blue">Blue</div>
                <div class="purple">Purple</div>
            </seed-carousel>
            <seed-carousel class="card" arrows stepper>
                <div class="red-mate">Red</div>
                <div class="green">Green</div>
                <div class="black">Black</div>
                <div class="purple">Purple</div>
                <div class="orange">Orange</div>      
            </seed-carousel>
        </div>
        <div class="due-card">
            <seed-carousel class="card" stepper square>
                <div class="green">Green</div>      
                <div class="blue">Blue</div>
                <div class="purple">Purple</div>
            </seed-carousel>
            <seed-carousel class="card" arrows stepper square>
                <div class="black">Black</div>
                <div class="green">Green</div>
                <div class="red">Red</div>
                <div class="purple">Purple</div>
                <div class="orange">Orange</div>      
            </seed-carousel>
        </div>
        <div class="due-card">
            <seed-carousel class="card" stepper>
                <div class="blue">Blue</div>
                <div class="purple">Purple</div>
                <div class="green-mate">Green mate</div>      
            </seed-carousel>
            <seed-carousel class="card" arrows>
                <div class="purple">Purple</div>
                <div class="red-mate">Red</div>
                <div class="green">Green</div>
                <div class="black">Black</div>
                <div class="orange">Orange</div>      
            </seed-carousel>
        </div>
        <br><br>
        <h2 class="black">· Carousel with images</h2>
        <seed-carousel arrows stepper>
            <img src="${carousel3}" alt="carousel3">
            <img src="${carousel1}" alt="carousel1">
            <img src="${carousel2}" alt="carousel2">
            <img src="${carousel4}" alt="carousel4">  
        </seed-carousel>
        <br><br>
        <h2 class="black">· Carousel auto</h2>
        <seed-carousel auto stepper>
            <div class="green">Green</div>
            <div class="red">Red</div>
            <div class="blue">Blue</div>
            <div class="purple">Purple</div>
            <div class="orange">Orange</div>      
        </seed-carousel>
    `);
