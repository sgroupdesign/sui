// ================================================
// Mobile Nav
// A renderless mobile nav - the implementation is up to you! Simple put, it toggles a class on the
// `<html>` element but also handles multiple open/close triggers and aria-expanded support
//
// Available coptions:
// `openSelector` | `String` | `[data-mobile-nav-open]` | The selector string for all open triggers (supports multiple)
// `closeSelector` | `String` | `[data-mobile-nav-close]` | The selector string for all close triggers (supports multiple)
// `activeClass` | `String` | `mobile-nav-open` | The class to toggle on the `<html>` element when clicked.
// `classElement` | `HTMLElement` | `document.documentElement` | The element the active class should be applied to.
// `enableScrollLock` | `Boolean` | `true` | Whether to lock scrolling when triggered.
// `scrollLockElement` | `HTMLElement` | `document.body` | The element scroll-locking should apply to.
// `scrollLockOptions` | `Object` | `{ reserveScrollBarGap: true }` | Settings for the `body-scroll-lock` package.

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export default class MobileNav {
    constructor(config) {
        // Add all properties here
        this.openSelector = '[data-mobile-nav-open]';
        this.closeSelector = '[data-mobile-nav-close]';
        this.activeClass = 'mobile-nav-open';
        this.classElement = document.documentElement;
        this.enableBodyScrollLock = true;
        this.scrollLockElement = document.body;

        this.scrollLockOptions = {
            reserveScrollBarGap: true,
        };

        // Assign config from class instance to override class fields
        Object.assign(this, config);

        this.initMobileNav();
    }

    initMobileNav() {
        document.querySelectorAll(this.openSelector).forEach((element) => {
            console.log(element)
            element.addEventListener('click', (e) => {
                this.classElement.classList.add(this.activeClass);

                // Handle aria attribute, but only for the open button
                this.setAria(true);

                if (this.enableBodyScrollLock) {
                    disableBodyScroll(this.scrollLockElement, this.scrollLockOptions);
                }
            });
        });

        document.querySelectorAll(this.closeSelector).forEach((element) => {
            element.addEventListener('click', (e) => {
                this.classElement.classList.remove(this.activeClass);

                // Handle aria attribute, but only for the open button
                this.setAria(false);

                if (this.enableBodyScrollLock) {
                    enableBodyScroll(this.scrollLockElement);
                }
            });
        });
    }

    setAria(value) {
        document.querySelectorAll(this.openSelector).forEach((element) => {
            element.setAttribute('aria-expanded', value);
        });
    }
}
