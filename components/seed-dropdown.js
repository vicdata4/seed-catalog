import { LitElement, html, css } from 'lit-element';
import { seedButtonStyle } from '../styles';

export class SeedDropdown extends LitElement {
    static get styles() {
        return [
            seedButtonStyle,
            css`

                :host {
                    display: inline-block;
                }

                .dropdown {
                    position: relative;
                    height: 0;
                    max-height: 0;
                    overflow: hidden;
                    transition: height .2s ease-in-out;
                    z-index: 999;
                    font-size: 15px;
                    
                }

                ::slotted(div) {
                    display: flex;
                    flex-direction: column;
                }

                ::slotted(p) {
                    margin: 0;
                    padding: 15px;
                }

                

                .show {
                    height: auto;
                    width: auto;
                    background-color: white;
                    max-height: 600px;
                }

                .hide {
                    height: 0;
                    max-height: 0;
                }

                .house {
                    max-width: 250px;
                }
        `]
    }

    static get properties() {
        return {
            modalBackground: { type: String },
            rotate: { type: String },
            width: { type: String },
            position: { type: String },
            mode: { type: String },
        };
    }

    constructor() {
        super();
        this.rotate = this.rotate || false;
        this.position = this.position || 'absolute';
        this.mode = this.mode || 'default';
    }

    firstUpdated() {
        let dropdown = this.shadowRoot.querySelector('.dropdown');
        let button = this.shadowRoot.querySelector('slot').assignedNodes()[0];
        const rotate = this.rotateIcon.bind(this);
        document.addEventListener('click', function(e){
            if ((e.target.tagName !== 'BUTTON' || e.target.id !== button.id) && e.target.className !== 'content') {
                    dropdown.className = 'dropdown hide';
                    rotate('0');
            } else if(e.target === this){
                dropdown.className = 'dropdown show'; 
            }
        });
    }

    rotateIcon(value) {
        if(this.rotate) {
            this.shadowRoot.querySelector('slot').assignedNodes()[0].querySelector('i').style.transition = 'transform .2s ease-in';
            this.shadowRoot.querySelector('slot').assignedNodes()[0].querySelector('i').style.transform = `rotate(${value}deg)`;
        }
    }

    openCollapse() {
        let classx = this.shadowRoot.querySelector('.dropdown').className;
        if(classx === 'dropdown show') {
            this.shadowRoot.querySelector('.dropdown').className = 'dropdown hide';
            this.rotateIcon('0');    
        }else {
            this.shadowRoot.querySelector('.dropdown').className = 'dropdown show';
            this.rotateIcon('180');
        }
    }

    render() {
        return html`
            <slot name="button" @click="${this.openCollapse}"></slot>
            <div class="dropdown" style="position: ${this.position}; transition: max-height ${this.mode === 'collapse' ? '.5' : '0'}s ease-in-out;">
                <slot name="content"></slot>
            </div>
        `;
    }
}

window.customElements.define('seed-dropdown', SeedDropdown);
