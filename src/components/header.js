import { LitElement, html } from 'lit-element';

class Header extends LitElement {
  // Events Handlers //////////////////
  sectionReset() {
    this.dispatchEvent(
      new CustomEvent('section-select', {
        detail: { section: 'none' }
      })
    );
  }
  /////////////////////////////////////

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <header class="py-4 text-center border-b border-solid border-c-black">
        <h1 class="inline-block cursor-pointer" @click="${this.sectionReset}">
          nick daniele
        </h1>
      </header>
    `;
  }
}

customElements.define('app-header', Header);
