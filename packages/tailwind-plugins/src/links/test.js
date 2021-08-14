const plugin = require('./index');
const { generateComponents } = require('../../../../jest/generators');

test('it generates link classes', () => {
    const config = {
        theme: {

        },
    };

    const output = `
      .link, .richtext a {
        text-decoration: underline;
        transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 200ms;
      }
      
      .link:hover, .richtext a:hover {
      }
      
      .link:focus, .link:active, .link:hover, .richtext a:focus, .richtext a:active, .richtext a:hover {
        text-decoration: none;
        outline: 2px solid transparent;
        outline-offset: 2px;
      }
      
      .stretched-link::after {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        z-index: 1;
        content: "";
      }
    `;

    expect.assertions(2);

    return generateComponents(plugin, config).then((result) => {
        expect(result.css).toMatchCss(output);
        expect(result.warnings().length).toBe(0);
    });
});
