const plugin = require('./index');
const { generateComponents } = require('../../../../jest/generators');

test('it generates loading classes', () => {
    const config = {
        theme: {

        },
    };

    const output = `
      .loading {
        pointer-events: none;
        position: relative;
        color: transparent !important;
        min-height: 1rem;
      }
      
      .loading::after {
        position: absolute;
        z-index: 1;
        margin-top: -0.5rem;
        margin-left: -0.5rem;
        display: block;
        height: 1rem;
        width: 1rem;
        border-radius: 9999px;
        border-width: 2px;
        top: 50%;
        left: 50%;
        animation: loading 0.5s infinite linear;
        border-right-color: transparent !important;
        border-top-color: transparent !important;
        content: '';
      }
      
      .loading.loading-lg {
        min-height: 2rem;
      }
      
      .loading.loading-lg::after {
        margin-top: -1rem;
        margin-left: -1rem;
        height: 2rem;
        width: 2rem;
      }
      
      @keyframes loading {
        0% {
          transform: rotate(0);
        }
      
        100% {
          transform: rotate(360deg);
        }
      }
    `;

    expect.assertions(2);

    return generateComponents(plugin, config).then((result) => {
        expect(result.css).toMatchCss(output);
        expect(result.warnings().length).toBe(0);
    });
});
