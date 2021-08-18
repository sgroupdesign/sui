// ================================================
// Click Toggle
// A module for toggling a class on the `<html>` element (configurable), with the option of providing
// a selector to detect when the user had clicked away from it. This is useful for opening up modals or other
// components, by toggling the class, then providing a selector to detect when clicked-off the shown component.
//
// Available coptions:
// `openSelector` | `String` | `` | The selector string for all open triggers (supports multiple)
// `activeClass` | `String` | `` | The class to toggle on the `<html>` element when clicked.
// `classElement` | `HTMLElement` | `document.documentElement` | The element the active class should be applied to.
// `clickAwaySelector` | `String` | `` | A valid element selector to detect when clicking away from. This will remove the `activeClass`.
// `clickAwayRemoveListener` | `Boolean` | `true` | Whether to stop listening for click-away clicks once triggered.

import clickOutside from 'vanilla-click-outside';

export default class ClickToggle {
    constructor(config) {
        // Add all properties here
        this.openSelector = '';
        this.activeClass = '';
        this.classElement = document.documentElement;
        this.clickAwaySelector = '';
        this.clickAwayRemoveListener = true;

        // Assign config from class instance to override class fields
        Object.assign(this, config);

        this.initSearch();
    }

    initSearch() {
        if (!this.openSelector) {
            return;
        }

        document.querySelectorAll(this.openSelector).forEach((element) => {
            element.addEventListener('click', (e) => {
                this.classElement.classList.add(this.activeClass);

                // Handle aria attribute, but only for the open button
                this.setAria(true);

                // Start checking if we've clicked-away from an element
                this.initClickAway();
            });
        });
    }

    initClickAway() {
        if (!this.clickAwaySelector) {
            return;
        }

        const clickAwayElement = document.querySelector(this.clickAwaySelector);

        if (!clickAwayElement) {
            return;
        }

        clickOutside(clickAwayElement, (state, type) => {
            if (state) {
                this.classElement.classList.remove(this.activeClass);

                // Handle aria attribute, but only for the open button
                this.setAria(false);
            }
        }, {
            removeListener: this.clickAwayRemoveListener,
        });
    }

    setAria(value) {
        document.querySelectorAll(this.openSelector).forEach((element) => {
            element.setAttribute('aria-expanded', value);
        });
    }
}
