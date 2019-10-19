import { LitElement, html, css } from 'lit-element';
import { seedButtonStyle } from '../styles';

export class SeedModal extends LitElement {
    static get styles() {
        return [
            seedButtonStyle,
            css`
            .modal {
                position: fixed;
                display: flex;
                align-items: center;
                justify-content: center;
                align-items: flex-start;

                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
                background-color: transparent;
                transition: background-color .3s;
                color: black;
                z-index: 1;

                overflow: auto;
            }

            .modal-content {
                background-color: white;
                width: 80%;
                transition: margin-top .3s;
                margin-top: -50px;
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

            .footer {
                display: flex;
                justify-content: flex-end;
                padding: .8rem 1rem;
            }
            

            .close {
                height: fit-content;
            }

            .content {
                background-color: yellow;
            }

            @media (min-width: 768px) {
                .modal-content {
                    width: 50%;
                }
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
        const content = this.shadowRoot.querySelector('.modal-content');

        this.modal.addEventListener('click', function(e){
            if (e.target === this) {
                this.className = 'modal closed';
                this.style.backgroundColor = 'transparent';
                content.style.marginTop = '-50px';
            }
        });
    }

    openModal() {
        this.modal.className = 'modal';
        setTimeout(() => {
            this.modal.style.backgroundColor = 'rgba(0, 0, 0, .6)';
            this.shadowRoot.querySelector('.modal-content').style.marginTop = '0';
        })
    }

    closeModal() {
        this.modal.className = 'modal closed';
        this.modal.style.backgroundColor = 'transparent';
        this.shadowRoot.querySelector('.modal-content').style.marginTop = '-50px';
    }

    render() {
        return html`
            <slot name="button" @click="${this.openModal}"></slot>
            <div class="modal closed">
                <div class="modal-content">
                    <div class="header">
                        <slot name="header"></slot>
                        <button class="sd-btn-empty" @click="${this.closeModal}"><slot name="icon"></slot></button>
                    </div>
          
                    <slot class="header" name="content"></slot>
                    <slot name="footer" class="footer"></slot>
  
                </div>
            </div>
     
        `;
    }
}

window.customElements.define('seed-modal', SeedModal);
