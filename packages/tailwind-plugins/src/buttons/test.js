const plugin = require('./index');
const { generateComponents } = require('../../../../jest/generators');

test('it generates button classes', () => {
    const config = {
        theme: {

        },
    };

    const output = `
      .btn {
        display: inline-block;
        -webkit-user-select: none;
        user-select: none;
        white-space: nowrap;
        border-style: solid;
        text-align: center;
        vertical-align: middle;
        text-decoration: none;
        outline: 2px solid transparent;
        outline-offset: 2px;
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        border-radius: 0.25rem;
        border-width: 1px;
        border-color: transparent;
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 500;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 200ms;
      }
      
      .btn:hover, .btn:focus, .btn:active {
        text-decoration: none;
        outline: 2px solid transparent;
        outline-offset: 2px;
      }
      
      .btn.disabled, .btn:disabled {
        pointer-events: none;
        opacity: 0.75;
      }
      
      .btn:not(:disabled):not(.disabled) {
        cursor: pointer;
      }
      
      .btn:focus {
        --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
        --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
        box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
        --tw-ring-color: transparent;
        --tw-ring-offset-width: 2px;
      }
      
      .btn-transparent {
        border-color: transparent;
        background-color: transparent;
        color: #fff;
      }
      
      .btn-transparent.loading::after {
        border-bottom-color: #fff;
        border-left-color: #fff;
      }
      
      .btn-transparent:hover, .btn-transparent:focus, .btn-transparent:active {
        border-color: transparent;
        background-color: transparent;
        color: #fff;
      }
      
      .btn-transparent:focus {
        --tw-ring-color: transparent;
      }
      
      .btn-current {
        border-color: currentColor;
        background-color: currentColor;
        color: #fff;
      }
      
      .btn-current.loading::after {
        border-bottom-color: #fff;
        border-left-color: #fff;
      }
      
      .btn-current:hover, .btn-current:focus, .btn-current:active {
        border-color: currentColor;
        background-color: currentColor;
        color: #fff;
      }
      
      .btn-current:focus {
        --tw-ring-color: currentColor;
      }
      
      .btn-black {
        border-color: #000;
        background-color: #000;
        color: #fff;
      }
      
      .btn-black.loading::after {
        border-bottom-color: #fff;
        border-left-color: #fff;
      }
      
      .btn-black:hover, .btn-black:focus, .btn-black:active {
        border-color: #000;
        background-color: #000;
        color: #fff;
      }
      
      .btn-black:focus {
        --tw-ring-color: #000;
      }
      
      .btn-white {
        border-color: #fff;
        background-color: #fff;
        color: #fff;
      }
      
      .btn-white.loading::after {
        border-bottom-color: #fff;
        border-left-color: #fff;
      }
      
      .btn-white:hover, .btn-white:focus, .btn-white:active {
        border-color: #fff;
        background-color: #fff;
        color: #fff;
      }
      
      .btn-white:focus {
        --tw-ring-color: #fff;
      }
      
      .btn-gray {
        border-color: #6b7280;
        background-color: #6b7280;
        color: #fff;
      }
      
      .btn-gray.loading::after {
        border-bottom-color: #fff;
        border-left-color: #fff;
      }
      
      .btn-gray:hover, .btn-gray:focus, .btn-gray:active {
        border-color: #4b5563;
        background-color: #4b5563;
        color: #fff;
      }
      
      .btn-gray:focus {
        --tw-ring-color: #6b7280;
      }
      
      .btn-red {
        border-color: #ef4444;
        background-color: #ef4444;
        color: #fff;
      }
      
      .btn-red.loading::after {
        border-bottom-color: #fff;
        border-left-color: #fff;
      }
      
      .btn-red:hover, .btn-red:focus, .btn-red:active {
        border-color: #dc2626;
        background-color: #dc2626;
        color: #fff;
      }
      
      .btn-red:focus {
        --tw-ring-color: #ef4444;
      }
      
      .btn-yellow {
        border-color: #f59e0b;
        background-color: #f59e0b;
        color: #fff;
      }
      
      .btn-yellow.loading::after {
        border-bottom-color: #fff;
        border-left-color: #fff;
      }
      
      .btn-yellow:hover, .btn-yellow:focus, .btn-yellow:active {
        border-color: #d97706;
        background-color: #d97706;
        color: #fff;
      }
      
      .btn-yellow:focus {
        --tw-ring-color: #f59e0b;
      }
      
      .btn-green {
        border-color: #10b981;
        background-color: #10b981;
        color: #fff;
      }
      
      .btn-green.loading::after {
        border-bottom-color: #fff;
        border-left-color: #fff;
      }
      
      .btn-green:hover, .btn-green:focus, .btn-green:active {
        border-color: #059669;
        background-color: #059669;
        color: #fff;
      }
      
      .btn-green:focus {
        --tw-ring-color: #10b981;
      }
      
      .btn-blue {
        border-color: #3b82f6;
        background-color: #3b82f6;
        color: #fff;
      }
      
      .btn-blue.loading::after {
        border-bottom-color: #fff;
        border-left-color: #fff;
      }
      
      .btn-blue:hover, .btn-blue:focus, .btn-blue:active {
        border-color: #2563eb;
        background-color: #2563eb;
        color: #fff;
      }
      
      .btn-blue:focus {
        --tw-ring-color: #3b82f6;
      }
      
      .btn-indigo {
        border-color: #6366f1;
        background-color: #6366f1;
        color: #fff;
      }
      
      .btn-indigo.loading::after {
        border-bottom-color: #fff;
        border-left-color: #fff;
      }
      
      .btn-indigo:hover, .btn-indigo:focus, .btn-indigo:active {
        border-color: #4f46e5;
        background-color: #4f46e5;
        color: #fff;
      }
      
      .btn-indigo:focus {
        --tw-ring-color: #6366f1;
      }
      
      .btn-purple {
        border-color: #8b5cf6;
        background-color: #8b5cf6;
        color: #fff;
      }
      
      .btn-purple.loading::after {
        border-bottom-color: #fff;
        border-left-color: #fff;
      }
      
      .btn-purple:hover, .btn-purple:focus, .btn-purple:active {
        border-color: #7c3aed;
        background-color: #7c3aed;
        color: #fff;
      }
      
      .btn-purple:focus {
        --tw-ring-color: #8b5cf6;
      }
      
      .btn-pink {
        border-color: #ec4899;
        background-color: #ec4899;
        color: #fff;
      }
      
      .btn-pink.loading::after {
        border-bottom-color: #fff;
        border-left-color: #fff;
      }
      
      .btn-pink:hover, .btn-pink:focus, .btn-pink:active {
        border-color: #db2777;
        background-color: #db2777;
        color: #fff;
      }
      
      .btn-pink:focus {
        --tw-ring-color: #ec4899;
      }
    `;

    expect.assertions(2);

    return generateComponents(plugin, config).then((result) => {
        expect(result.css).toMatchCss(output);
        expect(result.warnings().length).toBe(0);
    });
});
