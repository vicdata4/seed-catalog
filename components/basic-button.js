import { LitElement, html, css } from 'lit-element';

export class BasicButton extends LitElement {
    static get styles() {
        return css`
            button {
                background-color: red;
            }
        `;
    }
    render() {
        return html`
            <button>
                <slot></slot>
            </button>
        `;
    }
}

window.customElements.define('basic-button', BasicButton);
