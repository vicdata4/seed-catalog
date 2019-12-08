import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';
import '../carousel';
import { seedStyle } from '../styles';
import { storyCommonStyles } from '../.storybook/common-styles';
import { codeGenerator, carouselContent } from '../.storybook/code-template';
import carousel1 from '../assets/images/carousel_1.jpg';
import carousel2 from '../assets/images/carousel_2.jpg';
import carousel3 from '../assets/images/carousel_3.jpg';
import carousel4 from '../assets/images/carousel_4.jpg';

storiesOf('Seed Catalog', module)
  .add('Carousel', () => html`
        <style>
            ${seedStyle}
            ${storyCommonStyles}

            seed-carousel > div {
                color: white;
            }

            .due-card {
                display: flex;
                flex-flow: row wrap;
            }
        </style>
        <button class="sd-btn-mix black title"><i class="material-icons red">settings_overscan</i>Carousel</button>
        <h4 style="color:white;">Carousel - mobile touch</h4>
        <seed-carousel arrows stepper>
            <div class="black">Black</div> 
            <div class="red">Red</div>
            <div class="blue">Blue</div>
            <div class="green">Green</div>    
        </seed-carousel>
        <p class="tags-container">${codeGenerator(`<seed-carousel arrows stepper>`, `</seed-carousel>`, carouselContent())}</p>
        <h4 style="color:white;">Carousel combinations</h4>
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
        <div class="due-card">
        <p class="tags-container">${codeGenerator(`<seed-carousel stepper>`, `</seed-carousel>`, carouselContent())}</p>
        <p class="tags-container">${codeGenerator(`<seed-carousel arrows stepper>`, `</seed-carousel>`, carouselContent())}</p>
        </div>
        <div class="due-card">
        <p class="tags-container">${codeGenerator(`<seed-carousel stepper square>`, `</seed-carousel>`, carouselContent())}</p>
        <p class="tags-container">${codeGenerator(`<seed-carousel arrows stepper square>`, `</seed-carousel>`, carouselContent())}</p>
        </div>
        <div class="due-card">
        <p class="tags-container">${codeGenerator(`<seed-carousel stepper>`, `</seed-carousel>`, carouselContent())}</p>
        <p class="tags-container">${codeGenerator(`<seed-carousel arrows>`, `</seed-carousel>`, carouselContent())}</p>
        </div>
        <h4 style="color:white;">Carousel with images</h4>
        <seed-carousel arrows stepper>
            <img src="${carousel3}" alt="carousel3">
            <img src="${carousel1}" alt="carousel1">
            <img src="${carousel2}" alt="carousel2">
            <img src="${carousel4}" alt="carousel4">  
        </seed-carousel>
        <p class="tags-container">${codeGenerator(`<seed-carousel arrows stepper square>`, `</seed-carousel>`, `<img src="assets/carousel1.jpg" alt="carousel1">
        <img src="assets/carousel2.jpg" alt="carousel2">
        <img src="assets/carousel3.jpg" alt="carousel3">
        <img src="assets/carousel4.jpg" alt="carousel4">`)}</p>
        <h4 style="color:white;">Carousel auto</h4>
        <seed-carousel auto stepper>
            <div class="green">Green</div>
            <div class="red">Red</div>
            <div class="blue">Blue</div>
            <div class="purple">Purple</div>
            <div class="orange">Orange</div>      
        </seed-carousel>
        <p class="tags-container">${codeGenerator(`<seed-carousel auto stepper>`, `</seed-carousel>`, carouselContent())}</p>
    `);
