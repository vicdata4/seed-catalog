import { LitElement, html } from 'lit-element';

export class BasicButton extends LitElement {
    render() {
        return html`
            <button>Vicdata4-Hi</button>
        `;
    }
}

window.customElements.define('basic-button', BasicButton);
