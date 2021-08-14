const plugin = require('./index');
const { generateComponents } = require('../../../../jest/generators');

test('it generates lazyload classes', () => {
    const config = {
        theme: {

        },
    };

    const output = `
      .lazyload, .lazyloading {
        opacity: 0
      }
      
      .lazyloaded {
        opacity: 1;
        transition-property: opacity;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 200ms
      }
    `;

    expect.assertions(2);

    return generateComponents(plugin, config).then((result) => {
        expect(result.css).toMatchCss(output);
        expect(result.warnings().length).toBe(0);
    });
});
