import { LitElement, html, css } from 'lit-element';
import { seedButtonStyle } from '../styles';

export class SeedDropdown extends LitElement {
    static get styles() {
        return [
            seedButtonStyle,
            css`
                .dropdown {
                    position: relative;
                    height: 0;
                    overflow: hidden;
                    z-index: 999;
                    transition: height .5s linear;
                }

                .hide {
                    height: 0;
                }

                .show {
                    height: auto;
                    background-color: white;
                    width: 300px;
                    padding: 10px; 
                }

                a {
                    color: black;
                }
        `]
    }

    static get properties() {
        return {
            modalBackground: { type: String },
        };
    }

    constructor() {
        super();
    }

    firstUpdated() {}

    openCollapse() {
        const classx = this.shadowRoot.querySelector('.dropdown').className;
        
        if(classx === 'dropdown show') {
            this.shadowRoot.querySelector('.dropdown').className = 'dropdown hide';
        }else {
            this.shadowRoot.querySelector('.dropdown').className = 'dropdown show';
        }
    }

    render() {
        return html`
            <slot name="button" @click="${this.openCollapse}"></slot>
            <div class="dropdown">
                <slot name="content"></slot>
            </div>
        `;
    }
}

window.customElements.define('seed-dropdown', SeedDropdown);
