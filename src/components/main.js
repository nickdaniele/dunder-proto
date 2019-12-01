import { LitElement, html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

import './about';
import './tutorial';
import './blog';
import './social';

class Main extends LitElement {
  static get properties() {
    return {
      sectionSelected: { type: String },
      rowOneClasses: { type: Object },
      rowTwoClasses: { type: Object },
      sectionOneClasses: { type: Object },
      sectionTwoClasses: { type: Object },
      sectionThreeClasses: { type: Object },
      sectionFourClasses: { type: Object }
    };
  }

  constructor() {
    super();

    this.sectionMapping = {
      one: 'about',
      two: 'tutorial',
      three: 'blog',
      four: 'social'
    };

    this.rowOneClasses = {
      'flex': true,
      'w-full': true,
      'h-inherit': false,
      'h-53px': false
    };

    this.rowTwoClasses = {
      'flex': true,
      'w-full': true,
      'h-inherit': false,
      'h-53px': false
    };

    this.sectionOneClasses = {
      'w-1/2': true,
      'border-b': true,
      'border-r': true,
      'border-solid': true,
      'border-black': true,
      'hover:bg-orange': true,
      'cursor-pointer': true,
      'flex-grow': false
    };

    this.sectionTwoClasses = {
      'w-1/2': true,
      'border-b': true,
      'border-solid': true,
      'border-black': true,
      'hover:bg-yellow': true,
      'cursor-pointer': true,
      'flex-grow': false
    };

    this.sectionThreeClasses = {
      'w-1/2': true,
      'border-r': true,
      'border-solid': true,
      'border-black': true,
      'hover:bg-green': true,
      'cursor-pointer': true,
      'flex-grow': false
    };

    this.sectionFourClasses = {
      'w-1/2': true,
      'hover:bg-blue': true,
      'cursor-pointer': true,
      'flex-grow': false
    };
  }

  // Events Handlers //////////////////
  sectionSelect(section) {
    this.dispatchEvent(
      new CustomEvent('section-select', {
        detail: { section }
      })
    );
  }

  contentSelect(event) {
    this.dispatchEvent(
      new CustomEvent('content-select', {
        detail: { title: event.detail.title }
      })
    );
  }
  /////////////////////////////////////

  updatedClasses() {
    /**
     * Enable h-inherit of expanded row.
     * Disable h-53px of expanded row.
     * Disable h-inherit of collapsed row.
     * Enable h-53px of collapsed row.
     * Enable flex-grow of clicked section.
     * Disable w-1/2 of clicked section.
     * Disable hover:bg-[color] of clicked section.
     * Disable cursor-pointer of clicked section.
     * Disable flex-grow of not clicked section of same row.
     * Disable w-1/2 of not clicked section of same row.
     * Enable hover:bg-[color] of not clicked section of same row.
     * Enable cursor-pointer of not clicked section of same row.
     * Enable w-1/2 of not clicked sections of different row.
     * Enable hover:bg-[color] of not clicked sections of different row.
     * Enable cursor-pointer of not clicked sections of different row.
     */

    const sectionSelected = this.sectionSelected;

    switch (sectionSelected) {
      case 'none':
        this.rowOneClasses = {
          'flex': true,
          'w-full': true,
          'h-inherit': false,
          'h-53px': false
        };

        this.rowTwoClasses = {
          'flex': true,
          'w-full': true,
          'h-inherit': false,
          'h-53px': false
        };

        this.sectionOneClasses = {
          'w-1/2': true,
          'border-b': true,
          'border-r': true,
          'border-solid': true,
          'border-black': true,
          'hover:bg-orange': true,
          'cursor-pointer': true,
          'flex-grow': false
        };

        this.sectionTwoClasses = {
          'w-1/2': true,
          'border-b': true,
          'border-solid': true,
          'border-black': true,
          'hover:bg-yellow': true,
          'cursor-pointer': true,
          'flex-grow': false
        };

        this.sectionThreeClasses = {
          'w-1/2': true,
          'border-r': true,
          'border-solid': true,
          'border-black': true,
          'hover:bg-green': true,
          'cursor-pointer': true,
          'flex-grow': false
        };

        this.sectionFourClasses = {
          'w-1/2': true,
          'hover:bg-blue': true,
          'cursor-pointer': true,
          'flex-grow': false
        };
        break;
      case 'one':
        this.rowOneClasses = {
          ...this.rowOneClasses,
          ...{ 'h-inherit': true, 'h-53px': false }
        };

        this.rowTwoClasses = {
          ...this.rowTwoClasses,
          ...{ 'h-inherit': false, 'h-53px': true }
        };

        this.sectionOneClasses = {
          ...this.sectionOneClasses,
          ...{
            'flex-grow': true,
            'w-1/2': false,
            'hover:bg-orange': false,
            'cursor-pointer': false
          }
        };

        this.sectionTwoClasses = {
          ...this.sectionTwoClasses,
          ...{
            'flex-grow': false,
            'w-1/2': false,
            'hover:bg-yellow': true,
            'cursor-pointer': true
          }
        };

        this.sectionThreeClasses = {
          ...this.sectionThreeClasses,
          ...{ 'w-1/2': true, 'hover:bg-green': true, 'cursor-pointer': true }
        };

        this.sectionFourClasses = {
          ...this.sectionFourClasses,
          ...{ 'w-1/2': true, 'hover:bg-blue': true, 'cursor-pointer': true }
        };
        break;
      case 'two':
        this.rowOneClasses = {
          ...this.rowOneClasses,
          ...{ 'h-inherit': true, 'h-53px': false }
        };

        this.rowTwoClasses = {
          ...this.rowTwoClasses,
          ...{ 'h-inherit': false, 'h-53px': true }
        };

        this.sectionOneClasses = {
          ...this.sectionOneClasses,
          ...{
            'flex-grow': false,
            'w-1/2': false,
            'hover:bg-orange': true,
            'cursor-pointer': true
          }
        };

        this.sectionTwoClasses = {
          ...this.sectionTwoClasses,
          ...{
            'flex-grow': true,
            'w-1/2': false,
            'hover:bg-yellow': false,
            'cursor-pointer': false
          }
        };

        this.sectionThreeClasses = {
          ...this.sectionThreeClasses,
          ...{ 'w-1/2': true, 'hover:bg-green': true, 'cursor-pointer': true }
        };

        this.sectionFourClasses = {
          ...this.sectionFourClasses,
          ...{ 'w-1/2': true, 'hover:bg-blue': true, 'cursor-pointer': true }
        };
        break;
      case 'three':
        this.rowOneClasses = {
          ...this.rowOneClasses,
          ...{ 'h-inherit': false, 'h-53px': true }
        };

        this.rowTwoClasses = {
          ...this.rowTwoClasses,
          ...{ 'h-inherit': true, 'h-53px': false }
        };

        this.sectionOneClasses = {
          ...this.sectionOneClasses,
          ...{ 'w-1/2': true, 'hover:bg-orange': true, 'cursor-pointer': true }
        };

        this.sectionTwoClasses = {
          ...this.sectionTwoClasses,
          ...{ 'w-1/2': true, 'hover:bg-yellow': true, 'cursor-pointer': true }
        };

        this.sectionThreeClasses = {
          ...this.sectionThreeClasses,
          ...{
            'flex-grow': true,
            'w-1/2': false,
            'hover:bg-green': false,
            'cursor-pointer': false
          }
        };

        this.sectionFourClasses = {
          ...this.sectionFourClasses,
          ...{
            'flex-grow': false,
            'w-1/2': false,
            'hover:bg-blue': true,
            'cursor-pointer': true
          }
        };
        break;
      case 'four':
        this.rowOneClasses = {
          ...this.rowOneClasses,
          ...{ 'h-inherit': false, 'h-53px': true }
        };

        this.rowTwoClasses = {
          ...this.rowTwoClasses,
          ...{ 'h-inherit': true, 'h-53px': false }
        };

        this.sectionOneClasses = {
          ...this.sectionOneClasses,
          ...{ 'w-1/2': true, 'hover:bg-orange': true, 'cursor-pointer': true }
        };

        this.sectionTwoClasses = {
          ...this.sectionTwoClasses,
          ...{ 'w-1/2': true, 'hover:bg-yellow': true, 'cursor-pointer': true }
        };

        this.sectionThreeClasses = {
          ...this.sectionThreeClasses,
          ...{
            'flex-grow': false,
            'w-1/2': false,
            'hover:bg-green': true,
            'cursor-pointer': true
          }
        };

        this.sectionFourClasses = {
          ...this.sectionFourClasses,
          ...{
            'flex-grow': true,
            'w-1/2': false,
            'hover:bg-blue': false,
            'cursor-pointer': false
          }
        };
        break;
    }
  }

  createRenderRoot() {
    return this;
  }

  render() {
    const mappedSection = this.sectionMapping[this.sectionSelected] || 'none';
    this.updatedClasses();

    return html`
      <main class="flex flex-wrap h-custom">
        <div class="${classMap(this.rowOneClasses)}">
          <div
            class="${classMap(this.sectionOneClasses)}"
            @click="${() => {
              this.sectionSelect('one');
            }}"
          >
            <section-about sectionSelected="${mappedSection}"></section-about>
          </div>
          <div
            class="${classMap(this.sectionTwoClasses)}"
            @click="${() => {
              this.sectionSelect('two');
            }}"
          >
            <section-tutorial
              sectionSelected="${mappedSection}"
              @content-select="${event => {
                this.contentSelect(event);
              }}"
            ></section-tutorial>
          </div>
        </div>
        <div class="${classMap(this.rowTwoClasses)}">
          <div
            class="${classMap(this.sectionThreeClasses)}"
            @click="${() => {
              this.sectionSelect('three');
            }}"
          >
            <section-blog sectionSelected="${mappedSection}"></section-blog>
          </div>
          <div
            class="${classMap(this.sectionFourClasses)}"
            @click="${() => {
              this.sectionSelect('four');
            }}"
          >
            <section-social sectionSelected="${mappedSection}"></section-social>
          </div>
        </div>
      </main>
    `;
  }
}

customElements.define('app-main', Main);
