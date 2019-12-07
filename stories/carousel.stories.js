import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';
import '../carousel';
import { seedStyle } from '../styles';
import { storyCommonStyles } from '../.storybook/common-styles';
import carousel1 from '../assets/images/carousel_1.jpg';
import carousel2 from '../assets/images/carousel_2.jpg';
import carousel3 from '../assets/images/carousel_3.jpg';
import carousel4 from '../assets/images/carousel_4.jpg';

storiesOf('Seed Catalog', module)
  .add('Carousel', () => html`
        <style>
            ${seedStyle}
            ${storyCommonStyles}
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

            .title {
                width: 100%;
                text-align: left;
            }

            .red {
                --seed-color-red: #de3d4c;
                --seed-color-red-focus: #ff00184d;
                --seed-color-red-hover: #bb3440;
            }

            .black {
                --seed-color-black: #2f2d2d;
                --seed-color-black-focus: #43434387;
                --seed-color-black-hover: #434343;
            }

            
        </style>
        <button class="sd-btn-mix black title"><i class="material-icons red">web_asset</i>Carousel</button>
        <h4 style="color:white;">Carousel - mobile touch</h4>
        <seed-carousel arrows stepper>
            <div class="black">Black</div> 
            <div class="red">Red</div>
            <div class="blue">Blue</div>
            <div class="green">Green</div>    
        </seed-carousel>
        <p class="tags-container"><span><span class="light-txt">${`<seed-carousel arrows stepper>`}</span>
        ${`<div class="black">Black</div>
        <div class="red">Red</div>
        <div class="blue">Blue</div>
        <div class="green">Green</div>`}
<span class="light-txt">${`</seed-carousel>`}</span></span>
        </p>
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
        <p class="tags-container"><span><span class="light-txt">${`<seed-carousel stepper>`}</span>
        ${`<div class="black">Black</div>
        <div class="red">Red</div>
        <div class="blue">Blue</div>
        <div class="green">Green</div>`}
<span class="light-txt">${`</seed-carousel>`}</span></span>
        </p>
        <p class="tags-container"><span><span class="light-txt">${`<seed-carousel arrows stepper>`}</span>
        ${`<div class="black">Black</div>
        <div class="red">Red</div>
        <div class="blue">Blue</div>
        <div class="green">Green</div>`}
<span class="light-txt">${`</seed-carousel>`}</span></span>
        </p>
        </div>
        <div class="due-card">
        <p class="tags-container"><span><span class="light-txt">${`<seed-carousel stepper square>`}</span>
        ${`<div class="black">Black</div>
        <div class="red">Red</div>
        <div class="blue">Blue</div>
        <div class="green">Green</div>`}
<span class="light-txt">${`</seed-carousel>`}</span></span>
        </p>
        <p class="tags-container"><span><span class="light-txt">${`<seed-carousel arrows stepper square>`}</span>
        ${`<div class="black">Black</div>
        <div class="red">Red</div>
        <div class="blue">Blue</div>
        <div class="green">Green</div>`}
<span class="light-txt">${`</seed-carousel>`}</span></span>
        </p>
        </div>
        <div class="due-card">
        <p class="tags-container"><span><span class="light-txt">${`<seed-carousel stepper>`}</span>
        ${`<div class="black">Black</div>
        <div class="red">Red</div>
        <div class="blue">Blue</div>
        <div class="green">Green</div>`}
<span class="light-txt">${`</seed-carousel>`}</span></span>
        </p>
        <p class="tags-container"><span><span class="light-txt">${`<seed-carousel arrows>`}</span>
        ${`<div class="black">Black</div>
        <div class="red">Red</div>
        <div class="blue">Blue</div>
        <div class="green">Green</div>`}
<span class="light-txt">${`</seed-carousel>`}</span></span>
        </p>
        </div>
        <h4 style="color:white;">Carousel with images</h4>
        <seed-carousel arrows stepper>
            <img src="${carousel3}" alt="carousel3">
            <img src="${carousel1}" alt="carousel1">
            <img src="${carousel2}" alt="carousel2">
            <img src="${carousel4}" alt="carousel4">  
        </seed-carousel>
        <p class="tags-container"><span><span class="light-txt">${`<seed-carousel arrows>`}</span>
        ${`<img src="assets/carousel1.jpg" alt="carousel1">
        <img src="assets/carousel2.jpg" alt="carousel2">
        <img src="assets/carousel3.jpg" alt="carousel3">
        <img src="assets/carousel4.jpg" alt="carousel4">  `}
<span class="light-txt">${`</seed-carousel>`}</span></span>
        </p>
        <h4 style="color:white;">Carousel auto</h4>
        <seed-carousel auto stepper>
            <div class="green">Green</div>
            <div class="red">Red</div>
            <div class="blue">Blue</div>
            <div class="purple">Purple</div>
            <div class="orange">Orange</div>      
        </seed-carousel>
        <p class="tags-container"><span><span class="light-txt">${`<seed-carousel auto stepper>`}</span>
        ${`<div class="black">Black</div>
        <div class="red">Red</div>
        <div class="blue">Blue</div>
        <div class="green">Green</div>`}
<span class="light-txt">${`</seed-carousel>`}</span></span>
        </p>
    `);
