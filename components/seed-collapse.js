import { LitElement, html, css } from 'lit-element';
import './seed-dropdown.js';

export class SeedCollapse extends LitElement {
    static get styles() {
        return [
            css`
                :host {
                    display: flex;
                    flex-direction: column;
                    flex: auto;
                }
            `
        ]
    };
    
    static get properties() {
        return {
            speed: { type: String },
        };
    }

    setParams(element, transition, height, maxHeight) {
        element.style.transition = transition;
        element.style.height = height;
        element.style.maxHeight = maxHeight;
    }

    setCollapse(collapseList, type, time_) {
        this.shadowRoot.addEventListener('set-collapse', (e) => {
            const evElement = e.target.shadowRoot.querySelector('.dropdown');
            const time = time_;
            const cubicTransition = `max-height ${time}s cubic-bezier(0, 1, 0, 1)`;

            if(evElement.style.maxHeight === '600px') {
                this.setParams(evElement, cubicTransition, 'unset', '0');
                e.target.rotateIcon('0'); 
            } else {
                collapseList.forEach(x => {
                    const dropdown = x.shadowRoot.querySelector('.dropdown');
                    if(dropdown.style.maxHeight === '600px' || evElement === dropdown) {
                        setTimeout(() => {
                            this.setParams(dropdown, `max-height ${time}s cubic-bezier(0, .6, 0, 1)`, 'unset', '0');
                            x.rotateIcon('0'); 
                            setTimeout(() => {
                                if(evElement === dropdown){
                                    this.setParams(dropdown, `max-height ${time}s ${type}`, 'auto', '600px');
                                    x.rotateIcon('180');
                                }
                            });
                        });
                    } 
                })
        }
        })
    }

    firstUpdated() {
        const collapseList = this.querySelectorAll('seed-dropdown');
        if (collapseList.length === 1) {
            this.setCollapse(collapseList, 'ease-in-out', '.8');
        } else {
            this.setCollapse(collapseList, 'linear', '1');
        }
    }

    render() {
        return html`
            <slot></slot>
        `;
    }
}

window.customElements.define('seed-collapse', SeedCollapse);
