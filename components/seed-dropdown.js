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
                    z-index: 999;
                    font-size: 15px;
                    background-color: white;
                    color: black;
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
            position: { type: String },
            mode: { type: String },
            maxWidth: { type: String }
        };
    }

    constructor() {
        super();
        this.rotate = this.rotate || false;
        this.position = this.position || 'absolute';
        this.mode = this.mode || 'default';
        this.maxWidth = this.maxWidth || 'unset';
    }

    firstUpdated() {
        const dropdown = this.shadowRoot.querySelector('.dropdown');
        const button = this.shadowRoot.querySelector('slot').assignedNodes()[0];
        const rotate = this.rotateIcon.bind(this);
        document.addEventListener('click', function(e){
            if ((e.target.tagName !== 'BUTTON' || e.target.id !== button.id) && e.target.className !== 'content') {
                dropdown.style.height = 'unset';
                dropdown.style.maxHeight = '0';
                rotate('0');
            } else if(e.target === this){
                dropdown.style.height = 'auto';
                dropdown.style.maxHeight = '600px';
            }
        });
    }

    rotateIcon(value) {
        const icon = this.shadowRoot.querySelector('slot').assignedNodes()[0].querySelector('i');
        if(this.rotate) {
            icon.style.transition = 'transform .2s ease-in';
            icon.style.transform = `rotate(${value}deg)`;
        }
    }

    openCollapse() {
        const dropdown = this.shadowRoot.querySelector('.dropdown');
        if(dropdown.style.height === 'auto') {
            dropdown.style.height = 'unset';
            dropdown.style.maxHeight = '0';
            this.rotateIcon('0');       
        } else {
            setTimeout(() => {
                dropdown.style.height = 'auto';
                dropdown.style.maxHeight = '600px';
                this.rotateIcon('180');
            });
        }
    }

    render() {
        return html`
            <slot name="button" @click="${this.openCollapse}"></slot>
            <div class="dropdown"
                style="
                    position: ${this.position};
                    max-width: ${this.maxWidth}px;
                    transition: max-height ${this.mode === 'collapse' ? '.5' : '0'}s ease-in-out;
                ">
                <slot name="content"></slot>
            </div>
        `;
    }
}

window.customElements.define('seed-dropdown', SeedDropdown);
