const plugin = require('./index');
const { generateComponents } = require('../../../../jest/generators');

test('it generates icon classes', () => {
    const config = {
        theme: {

        },
    };

    const output = `
      .icon {
        display: inline-block;
      }
      
      .icon svg {
        height: 100%;
        width: 100%;
        vertical-align: middle;
      }
      
      .icon:not(.no-fill) svg * {
        fill: currentColor;
      }
    `;

    expect.assertions(2);

    return generateComponents(plugin, config).then((result) => {
        expect(result.css).toMatchCss(output);
        expect(result.warnings().length).toBe(0);
    });
});
