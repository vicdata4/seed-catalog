import { LitElement, html, css } from 'lit-element';
import { seedButtonStyle } from '../styles';

export class SeedModal extends LitElement {
    static get styles() {
        return [
            seedButtonStyle,
            css`
            .modal {
                display: flex;
                align-items: center;
                justify-content: center;

                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
                background-color: transparent;
                transition: background-color .5s;
                z-index: 1;
            }

            .modal-content {
                background-color: white;
                width: 80%;
            }

            .closed {
                display: none;
                background-color: transparent;
            }

            .header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: .8rem 1rem;
            }

            .close {
                height: fit-content;
            }

            .content {
                background-color: yellow;
            }
        `]
    }

    static get properties() {
        return {
          alert: { type: String, attribute: false }
        };
    }

    firstUpdated() {
        this.modal = this.shadowRoot.querySelector('.modal');

        this.modal.addEventListener('click', function(e){
            if (e.target === this) {
                this.className = 'modal closed';
                this.style.backgroundColor = 'transparent';
            }
        });
    }

    openModal() {
        this.modal.className = 'modal';
        setTimeout(x => {
            this.modal.style.backgroundColor = 'rgba(0, 0, 0, .6)';
        })
    }

    closeModal() {
        this.modal.className = 'modal closed';
        this.modal.style.backgroundColor = 'transparent';
    }

    render() {
        return html`
            <div>
                <slot name="button" @click="${this.openModal}"></slot>
                <div class="modal closed">
                    <div class="modal-content">
                        <div class="header">
                            <slot name="header"></slot>
                            <button class="sd-btn red sm close" @click="${this.closeModal}">Close</button>
                        </div>
                        <div class="header">
                            <slot name="content"></slot>
                        </div>
                        <div class="header">
                            <slot name="footer"></slot>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

window.customElements.define('seed-modal', SeedModal);
